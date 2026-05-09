import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { CinematicOverlay } from "../components/CinematicOverlay";
import { Subtitle } from "../components/Subtitle";
import { SCENES } from "../voiceover-config";

const scene = SCENES[1];

type Props = {
  audioAvailable: boolean;
};

export const Scene2: React.FC<Props> = ({ audioAvailable }) => {
  const imagePath = "images/scene2.jpg";

  return (
    <AbsoluteFill>
      <KenBurns
        src={audioAvailable ? staticFile(imagePath) : null}
        placeholderColor={scene.placeholderColor}
        scale={[1.05, 1]}
        panX={[2, 0]}
        panY={[0, 1]}
      />
      {/* Cold blue mood — rainy walk */}
      <CinematicOverlay mood="cold" />
      <Subtitle
        text={scene.urduText}
        audioSrc={audioAvailable ? `voiceover/${scene.id}.mp3` : null}
      />
    </AbsoluteFill>
  );
};
