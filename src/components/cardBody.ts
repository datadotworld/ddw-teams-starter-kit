import { Response } from "../api";

export const cardBody = (response: Response) => [
  {
    type: "TextBlock",
    text: response.answer,
    wrap: true,
  },
  {
    type: "ActionSet",
    actions: [
      {
        type: "Action.ToggleVisibility",
        title: "Toggle SPARQL",
        id: "showAction",
        targetElements: ["sparql"],
      },
    ],
  },
  {
    type: "TextBlock",
    text: response.sparql,
    wrap: true,
    fontType: "Monospace",
    id: "sparql",
    isVisible: false,
  },
];
