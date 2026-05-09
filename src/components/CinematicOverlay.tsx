import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

type Mood = "warm" | "cold" | "dramatic" | "golden";

const MOOD_COLORS: Record<Mood, { top: string; bottom: string; tint: string }> = {
  warm: {
    top: "rgba(20,8,0,0.55)",
    bottom: "rgba(80,30,5,0.75)",
    tint: "rgba(180,80,10,0.08)",
  },
  cold: {
    top: "rgba(0,8,30,0.60)",
    bottom: "rgba(5,20,50,0.75)",
    tint: "rgba(10,40,120,0.08)",
  },
  dramatic: {
    top: "rgba(0,0,0,0.65)",
    bottom: "rgba(0,0,0,0.80)",
    tint: "rgba(0,0,0,0.0)",
  },
  golden: {
    top: "rgba(10,5,0,0.45)",
    bottom: "rgba(60,30,0,0.70)",
    tint: "rgba(200,130,20,0.10)",
  },
};

type Props = {
  mood: Mood;
};

export const CinematicOverlay: React.FC<Props> = ({ mood }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const colors = MOOD_COLORS[mood];

  const fadeIn = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - fps * 0.5, durationInFrames],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const overlayOpacity = Math.max(fadeIn, fadeOut);

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* Cinematic letterbox bars (2.35:1 crop suggestion) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "6%",
          background: "rgba(0,0,0,0.85)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "6%",
          background: "rgba(0,0,0,0.85)",
        }}
      />
      {/* Vignette gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)`,
        }}
      />
      {/* Top-to-bottom gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom, ${colors.top} 0%, transparent 35%, transparent 60%, ${colors.bottom} 100%)`,
        }}
      />
      {/* Mood tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: colors.tint,
        }}
      />
      {/* Fade to black */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `rgba(0,0,0,${overlayOpacity * 0.9})`,
        }}
      />
    </AbsoluteFill>
  );
};
