"use client";

import { useContext } from "react";

import {
  DiscordMessageContext,
  DiscordMessageProvider,
} from "./_components/discord-provider";

const MessageBuilderPage = () => {
  const { message, setMessage } = useContext(DiscordMessageContext);

  return (
    <DiscordMessageProvider>
      <div className="mx-auto h-full w-full max-w-7xl">
        <div className="h-full w-full bg-white text-black">
          {JSON.stringify(message)}
        </div>
      </div>
    </DiscordMessageProvider>
  );
};

export default MessageBuilderPage;
