export interface DiscordEmbed {
  title?: string;
  type?: "rich" | "image" | "video" | "gifv" | "article" | "link";
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedMedia;
  thumbnail?: EmbedMedia;
  video?: EmbedMedia;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
}

interface EmbedWithIcon {
  icon_url?: string;
  proxy_icon_url?: string;
}

interface EmbedMedia {
  url?: string;
  proxy_url?: string;
  height?: number;
  width: number;
}

interface EmbedAuthor extends EmbedWithIcon {
  name: string;
  url: string;
}

interface EmbedFooter extends EmbedWithIcon {
  text: string;
}

interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

interface EmbedProvider {
  name: string;
  url: string;
}
