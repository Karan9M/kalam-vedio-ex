export type TemplateDefinition = {
  id: string;
  compositionId: string;
  label: string;
  description: string;
};

export const TEMPLATE_REGISTRY: TemplateDefinition[] = [
  {
    id: "csat-numbers",
    compositionId: "CsatNumbers",
    label: "CSAT Numbers",
    description: "Scene-based numbers and simplification explainer.",
  },
  {
    id: "csat-percentages-averages",
    compositionId: "CsatPercentagesAverages",
    label: "CSAT Percentages & Averages",
    description: "Scene-based percentages and averages explainer.",
  },
  {
    id: "generic-explainer",
    compositionId: "GenericExplainerTemplate",
    label: "Generic Explainer Template",
    description: "Props-driven explainer scaffold for future user-generated videos.",
  },
];

export const getTemplateDefinition = (templateId: string) => {
  return TEMPLATE_REGISTRY.find((template) => template.id === templateId) ?? null;
};
