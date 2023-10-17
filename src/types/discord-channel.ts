export interface MinimalDiscordCategory {
  id: number;
  name: string;
}

export interface MinimalDiscordChannel {
  category?: MinimalDiscordCategory;
  id: number;
  name: string;
  type: number;
}
