import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { KenBurns } from "../components/KenBurns";
import { CinematicOverlay } from "../components/CinematicOverlay";
import { Subtitle } from "../components/Subtitle";
import { SCENES } from "../voiceover-config";

const scene = SCENES[3];

type Props = {
  audioAvailable: boolean;
};

export const Scene4: React.FC<Props> = ({ audioAvailable }) => {
  const imagePath = "images/scene4.jpg";

  return (
    <AbsoluteFill>
      <KenBurns
        src={audioAvailable ? staticFile(imagePath) : null}
        placeholderColor={scene.placeholderColor}
        scale={[1.04, 1]}
        panX={[0, 1]}
        panY={[1, 0]}
      />
      {/* Golden hour — emotional resolution */}
      <CinematicOverlay mood="golden" />
      <Subtitle
        text={scene.urduText}
        audioSrc={audioAvailable ? `voiceover/${scene.id}.mp3` : null}
      />
    </AbsoluteFill>
  );
};
