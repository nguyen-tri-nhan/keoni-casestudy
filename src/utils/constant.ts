export const OnboardingPage = {
  username: "Jordan",
  estimatedTime: "<5 min",
  steps: ["About You", "Inspirations", "Brand Voice", "Knowledge Base"],
};

export enum BrandDescriptionValue {
  QUICK_START = "quick_start",
  SELF_DESCRIBE = "self_describe",
  KEONI_DESCRIBE = "keoni_describe",
}

export const BrandDescriptions = {
  [BrandDescriptionValue.KEONI_DESCRIBE]: {
    value: BrandDescriptionValue.KEONI_DESCRIBE,
    label:
      "Let Keoni extract your brand voice from files, published work or URLs",
  },
  [BrandDescriptionValue.SELF_DESCRIBE]: {
    value: BrandDescriptionValue.SELF_DESCRIBE,
    label: "Describe your brand voice to Keoni",
  },
  [BrandDescriptionValue.QUICK_START]: {
    value: BrandDescriptionValue.QUICK_START,
    label:
      "Quick Start from our templates",
  },
};
