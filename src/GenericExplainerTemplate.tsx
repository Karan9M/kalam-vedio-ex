import { Fragment } from "react";
import { Audio } from "@remotion/media";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Sequence,
  staticFile,
} from "remotion";
import { SceneBrand } from "./scenes/SceneBrand";
import { TitleScene } from "./archetypes/TitleScene";
import { ConceptScene } from "./archetypes/ConceptScene";
import { FormulaScene } from "./archetypes/FormulaScene";
import { ComparisonScene } from "./archetypes/ComparisonScene";
import { ProcessScene } from "./archetypes/ProcessScene";
import { ConclusionScene } from "./archetypes/ConclusionScene";
import { D } from "./design";
import type { ExplainerScene, ExplainerVideoRequest } from "./tooling/renderContract";
import { getAudioDuration } from "./utils/getAudioDuration";
import { FPS } from "./constants";

const BRAND_INTRO_FRAMES = 75;
const BRAND_OUTRO_FRAMES = 90;
const TRANSITION_DURATION = 12;
const timing = linearTiming({ durationInFrames: TRANSITION_DURATION });

const pickAccent = (accentColor: ExplainerScene["accentColor"]) => {
  return D[accentColor];
};

const renderScene = (scene: ExplainerScene) => {
  switch (scene.kind) {
    case "title":
      return (
        <TitleScene
          label={scene.label}
          title={scene.title}
          accentColor={pickAccent(scene.accentColor)}
          titleColor={pickAccent(scene.accentColor)}
          rule={scene.takeaway}
        />
      );
    case "concept":
      return (
        <ConceptScene
          label={scene.label}
          heading={scene.title}
          subheading={scene.subheading}
          takeaway={scene.takeaway}
          accentColor={pickAccent(scene.accentColor)}
        />
      );
    case "formula":
      return (
        <FormulaScene
          label={scene.label}
          heading={scene.title}
          formula={scene.formula ?? ""}
          explanation={scene.subheading}
          takeaway={scene.takeaway}
          accentColor={pickAccent(scene.accentColor)}
        />
      );
    case "comparison":
      return scene.leftCard && scene.rightCard ? (
        <ComparisonScene
          label={scene.label}
          heading={scene.title}
          left={{ ...scene.leftCard, color: pickAccent(scene.leftCard.color) }}
          right={{ ...scene.rightCard, color: pickAccent(scene.rightCard.color) }}
          takeaway={scene.takeaway}
          accentColor={pickAccent(scene.accentColor)}
        />
      ) : null;
    case "process":
      return (
        <ProcessScene
          label={scene.label}
          heading={scene.title}
          steps={(scene.steps ?? []).map((step) => ({
            ...step,
            color: step.color ? pickAccent(step.color) : undefined,
          }))}
          takeaway={scene.takeaway}
          accentColor={pickAccent(scene.accentColor)}
        />
      );
    case "conclusion":
      return (
        <ConclusionScene
          title={scene.title}
          subtitle={scene.subheading}
          accentColor={pickAccent(scene.accentColor)}
        />
      );
    default:
      return null;
  }
};

type Props = {
  request: ExplainerVideoRequest;
  sceneDurations: number[];
};

const allocateDurations = (request: ExplainerVideoRequest, totalFrames: number) => {
  const weights = request.scenes.map((scene) => {
    const titleWeight = scene.title.length;
    const narrationWeight = scene.narration
      .map((segment) => segment.text.length)
      .reduce((sum, len) => sum + len, 0);
    return Math.max(1, titleWeight + narrationWeight);
  });
  const totalWeight = weights.reduce((sum, value) => sum + value, 0);
  const frames = weights.map((weight) =>
    Math.max(45, Math.floor((weight / totalWeight) * totalFrames)),
  );
  const assigned = frames.reduce((sum, value) => sum + value, 0);
  const remainder = totalFrames - assigned;

  if (remainder > 0 && frames.length > 0) {
    frames[frames.length - 1] += remainder;
  }

  return frames.map((frameCount) => frameCount + TRANSITION_DURATION);
};

export const calculateGenericTemplateMetadata: CalculateMetadataFunction<Props> = async ({
  props,
}) => {
  const durationInSeconds = await getAudioDuration(staticFile(props.request.masterAudioFile));
  const contentFrames = Math.ceil(durationInSeconds * FPS);
  const sceneDurations = allocateDurations(props.request, contentFrames);
  const sceneContentWithTransitions =
    sceneDurations.reduce((sum, value) => sum + value, 0) -
    (sceneDurations.length - 1) * TRANSITION_DURATION;

  return {
    durationInFrames:
      BRAND_INTRO_FRAMES + sceneContentWithTransitions + BRAND_OUTRO_FRAMES,
    props: {
      ...props,
      sceneDurations,
    },
  };
};

export const GenericExplainerTemplate: React.FC<Props> = ({
  request,
  sceneDurations,
}) => {
  const durations = sceneDurations?.length
    ? sceneDurations
    : request.scenes.map(() => FPS * 5 + TRANSITION_DURATION);
  const preparedScenes = request.scenes.map((scene, index) => ({
    scene,
    node: renderScene(scene),
    duration: durations[index],
  }));

  return (
    <AbsoluteFill style={{ backgroundColor: D.bg }}>
      <Sequence from={BRAND_INTRO_FRAMES}>
        <Audio src={staticFile(request.masterAudioFile)} />
      </Sequence>
      <TransitionSeries>
        <TransitionSeries.Sequence
          durationInFrames={BRAND_INTRO_FRAMES + TRANSITION_DURATION}
        >
          <SceneBrand
            mode="intro"
            brandName={request.branding.brandName}
            introSubtitle={request.branding.introSubtitle}
            outroSubtitle={request.branding.outroSubtitle}
            logoPath={request.branding.logoPath}
          />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        {preparedScenes.map((item, index) => (
          <Fragment key={item.scene.id}>
            <TransitionSeries.Sequence
              durationInFrames={item.duration}
              premountFor={TRANSITION_DURATION * 2}
            >
              {item.node}
            </TransitionSeries.Sequence>
            {index < preparedScenes.length - 1 && (
              <TransitionSeries.Transition
                key={`generic-transition-${item.scene.id}`}
                presentation={fade()}
                timing={timing}
              />
            )}
          </Fragment>
        ))}
        <TransitionSeries.Transition presentation={fade()} timing={timing} />
        <TransitionSeries.Sequence durationInFrames={BRAND_OUTRO_FRAMES}>
          <SceneBrand
            mode="outro"
            brandName={request.branding.brandName}
            introSubtitle={request.branding.introSubtitle}
            outroSubtitle={request.branding.outroSubtitle}
            logoPath={request.branding.logoPath}
          />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
