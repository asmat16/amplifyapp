import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { CinematicOverlay } from "../components/CinematicOverlay";
import { Subtitle } from "../components/Subtitle";
import { SCENES } from "../voiceover-config";

const scene = SCENES[0];

type Props = {
  audioAvailable: boolean;
};

export const Scene1: React.FC<Props> = ({ audioAvailable }) => {
  const imagePath = "images/scene1.jpg";

  return (
    <AbsoluteFill>
      <KenBurns
        src={audioAvailable ? staticFile(imagePath) : null}
        placeholderColor={scene.placeholderColor}
        scale={[1, 1.06]}
        panX={[0, -2]}
        panY={[0, -1.5]}
      />
      {/* Warm amber mood — chai shop */}
      <CinematicOverlay mood="warm" />
      <Subtitle
        text={scene.urduText}
        audioSrc={audioAvailable ? `voiceover/${scene.id}.mp3` : null}
      />
    </AbsoluteFill>
  );
};
