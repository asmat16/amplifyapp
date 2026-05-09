import React from "react";
import {
  CalculateMetadataFunction,
  staticFile,
} from "remotion";
import {
  TransitionSeries,
  linearTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Scene1 } from "./scenes/Scene1";
import { Scene2 } from "./scenes/Scene2";
import { Scene3 } from "./scenes/Scene3";
import { Scene4 } from "./scenes/Scene4";
import {
  FPS,
  SCENES,
  TRANSITION_DURATION_FRAMES,
} from "./voiceover-config";
import { getAudioDuration } from "./get-audio-duration";

export type SpidooReyProps = {
  sceneDurationsInFrames: number[];
  audioAvailable: boolean[];
};

export const calculateMetadata: CalculateMetadataFunction<
  SpidooReyProps
> = async ({ props }) => {
  const sceneDurationsInFrames: number[] = new Array(SCENES.length);
  const audioAvailable: boolean[] = new Array(SCENES.length);

  await Promise.all(
    SCENES.map(async (scene, i) => {
      try {
        const secs = await getAudioDuration(
          staticFile(`voiceover/${scene.id}.mp3`)
        );
        sceneDurationsInFrames[i] = Math.ceil(secs * FPS);
        audioAvailable[i] = true;
      } catch {
        sceneDurationsInFrames[i] = scene.defaultDurationInSeconds * FPS;
        audioAvailable[i] = false;
      }
    })
  );

  const numTransitions = SCENES.length - 1;
  const totalFrames =
    sceneDurationsInFrames.reduce((sum, d) => sum + d, 0) -
    numTransitions * TRANSITION_DURATION_FRAMES;

  return {
    durationInFrames: totalFrames,
    props: { ...props, sceneDurationsInFrames, audioAvailable },
  };
};

export const SpidooReyVideo: React.FC<SpidooReyProps> = ({
  sceneDurationsInFrames,
  audioAvailable,
}) => {
  const transition = linearTiming({
    durationInFrames: TRANSITION_DURATION_FRAMES,
  });
  const fadeEffect = fade();

  const [d1, d2, d3, d4] = sceneDurationsInFrames;
  const [a1, a2, a3, a4] = audioAvailable;

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={d1}>
        <Scene1 audioAvailable={a1} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fadeEffect}
        timing={transition}
      />

      <TransitionSeries.Sequence durationInFrames={d2}>
        <Scene2 audioAvailable={a2} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fadeEffect}
        timing={transition}
      />

      <TransitionSeries.Sequence durationInFrames={d3}>
        <Scene3 audioAvailable={a3} />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fadeEffect}
        timing={transition}
      />

      <TransitionSeries.Sequence durationInFrames={d4}>
        <Scene4 audioAvailable={a4} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
