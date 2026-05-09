import React from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Audio } from "@remotion/media";
import { staticFile } from "remotion";

// Noto Nastaliq Urdu loaded via Google Fonts CSS
const URDU_FONT = "'Noto Nastaliq Urdu', 'Noto Serif', serif";

type Props = {
  text: string;
  audioSrc: string | null;
};

export const Subtitle: React.FC<Props> = ({ text, audioSrc }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [fps * 0.3, fps * 0.8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <>
      {audioSrc && <Audio src={staticFile(audioSrc)} />}
      <div
        style={{
          position: "absolute",
          bottom: "14%",
          left: "6%",
          right: "6%",
          opacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            borderRadius: 12,
            padding: "18px 24px",
            backdropFilter: "blur(4px)",
          }}
        >
          <p
            dir="rtl"
            style={{
              fontFamily: URDU_FONT,
              fontSize: 52,
              lineHeight: 1.8,
              color: "#f5e6c8",
              textAlign: "center",
              margin: 0,
              textShadow: "0 2px 8px rgba(0,0,0,0.8)",
              letterSpacing: 0,
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </>
  );
};
