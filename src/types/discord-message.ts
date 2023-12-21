import { type DiscordEmbed } from "./discord-embed";

export interface MinimalDiscordMessage {
  content?: string;
  embeds?: DiscordEmbed[];
  author_global_name?: string;
  author_avatar?: string;
}
