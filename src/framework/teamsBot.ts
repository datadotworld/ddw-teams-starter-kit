import {
  ActivityTypes,
  CardFactory,
  TeamsActivityHandler,
  TurnContext,
} from "botbuilder";

import { api } from "../api";
import { cardBody } from "../components/cardBody";

export class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();

    this.onMessage(async (context, next) => {
      const removedMentionText = TurnContext.removeRecipientMention(
        context.activity,
      );
      const txt = removedMentionText.toLowerCase().replace(/\n|\r/g, "").trim();

      await context.sendActivity({ type: ActivityTypes.Typing });

      try {
        const response = await api.answer(txt);
        console.log(response);
        await context.sendActivity({
          type: ActivityTypes.Message,
          attachments: [
            CardFactory.adaptiveCard({
              type: "AdaptiveCard",
              body: cardBody(response),
            }),
          ],
        });

        // By calling next() you ensure that the next BotHandler is run.
        await next();
      } catch (error) {
        console.error(error);

        await context.sendActivity("Sorry, I missed that. Please try again.");
        await next();
      }
    });
  }
}
