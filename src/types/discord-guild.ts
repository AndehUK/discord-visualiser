import { type MinimalDiscordRole } from "./discord-role";

export interface MinimalDiscordGuild {
  channels: undefined[];
  emojis: string[];
  icon?: string;
  id: number;
  name: string;
  owner_id?: number;
  premium_tier: number;
  roles: MinimalDiscordRole[];
  unavailable: boolean;
}
