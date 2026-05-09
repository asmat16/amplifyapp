import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {
  src: string | null;
  placeholderColor: string;
  scale?: [number, number];
  panX?: [number, number];
  panY?: [number, number];
};

export const KenBurns: React.FC<Props> = ({
  src,
  placeholderColor,
  scale = [1, 1.08],
  panX = [0, -3],
  panY = [0, -2],
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.45, 0, 0.55, 1),
  });

  const scaleValue = interpolate(progress, [0, 1], scale);
  const x = interpolate(progress, [0, 1], panX);
  const y = interpolate(progress, [0, 1], panY);

  const transform = `scale(${scaleValue}) translate(${x}%, ${y}%)`;

  if (!src) {
    return (
      <AbsoluteFill
        style={{ backgroundColor: placeholderColor, overflow: "hidden" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform,
            transformOrigin: "center center",
          }}
        />
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <Img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform,
          transformOrigin: "center center",
        }}
      />
    </AbsoluteFill>
  );
};
