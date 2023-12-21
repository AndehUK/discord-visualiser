import { createContext, useEffect, useState } from "react";

import { type LayoutProps } from "@/types/layout-props";
import { type MinimalDiscordMessage } from "@/types/discord-message";

const defaultMessage = {
  content: "",
  embeds: [],
  author_global_name: "Exult",
  author_avatar: "/logo.png",
};

interface DiscordMessageState {
  message?: MinimalDiscordMessage;
  setMessage?: React.Dispatch<React.SetStateAction<MinimalDiscordMessage>>;
}

export const DiscordMessageContext = createContext<DiscordMessageState>({});

export const DiscordMessageProvider = ({ children }: LayoutProps) => {
  const [message, setMessage] = useState<MinimalDiscordMessage>({});

  useEffect(() => {
    setMessage(defaultMessage);
  }, []);

  return (
    <DiscordMessageContext.Provider value={{ message, setMessage }}>
      {children}
    </DiscordMessageContext.Provider>
  );
};
