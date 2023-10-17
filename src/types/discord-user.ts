import { type MinimalDiscordGuild } from "./discord-guild";

export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  global_name?: string;
  avatar?: string;
  bot: boolean;
  system: boolean;
  mfa_enabled: boolean;
  banner?: string;
  accent_color: number;
  locale: string;
  verified: boolean;
  email?: string;
  flags: number;
  premium_type: number;
  public_flags: number;
  avatar_decoration?: string;
}

export interface MinimalDiscordUser {
  username: string;
  id: number;
  avatar: string;
  global_name?: string;
  guilds: MinimalDiscordGuild[];
}
