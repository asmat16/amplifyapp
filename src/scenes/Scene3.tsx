import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { KenBurns } from "../components/KenBurns";
import { CinematicOverlay } from "../components/CinematicOverlay";
import { Subtitle } from "../components/Subtitle";
import { SCENES } from "../voiceover-config";

const scene = SCENES[2];

type Props = {
  audioAvailable: boolean;
};

export const Scene3: React.FC<Props> = ({ audioAvailable }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const imagePath = "images/scene3.jpg";

  // Quick camera shake feel — intensity pulses at start
  const shakeX = interpolate(frame, [0, fps * 0.5, fps], [0, 4, 0], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ transform: `translateX(${shakeX}px)` }}>
      <KenBurns
        src={audioAvailable ? staticFile(imagePath) : null}
        placeholderColor={scene.placeholderColor}
        scale={[1, 1.12]}
        panX={[-1, 2]}
        panY={[-2, 1]}
      />
      {/* Dramatic high-contrast — rescue action */}
      <CinematicOverlay mood="dramatic" />
      <Subtitle
        text={scene.urduText}
        audioSrc={audioAvailable ? `voiceover/${scene.id}.mp3` : null}
      />
    </AbsoluteFill>
  );
};
