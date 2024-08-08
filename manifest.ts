import { Manifest } from "deno-slack-sdk/mod.ts";
import { GetReacjiEmailText } from "./functions/get_reacji_text.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "get-email-msg-text",
  description: "get the text of the reacted email message",
  icon: "assets/default_new_app_icon.png",
  functions: [GetReacjiEmailText],
  workflows: [],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "channels:history",
  ],
});
