import React from "react";
import { Composition } from "remotion";
import {
  SpidooReyVideo,
  SpidooReyProps,
  calculateMetadata,
} from "./SpidooReyVideo";
import {
  COMPOSITION_WIDTH,
  COMPOSITION_HEIGHT,
  FPS,
  SCENES,
  TRANSITION_DURATION_FRAMES,
} from "./voiceover-config";

const defaultTotalFrames =
  SCENES.reduce((sum, s) => sum + s.defaultDurationInSeconds * FPS, 0) -
  (SCENES.length - 1) * TRANSITION_DURATION_FRAMES;

const defaultProps: SpidooReyProps = {
  sceneDurationsInFrames: SCENES.map((s) => s.defaultDurationInSeconds * FPS),
  audioAvailable: SCENES.map(() => false),
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SpidooRey"
      component={SpidooReyVideo}
      durationInFrames={defaultTotalFrames}
      fps={FPS}
      width={COMPOSITION_WIDTH}
      height={COMPOSITION_HEIGHT}
      defaultProps={defaultProps satisfies SpidooReyProps}
      calculateMetadata={calculateMetadata}
    />
  );
};
