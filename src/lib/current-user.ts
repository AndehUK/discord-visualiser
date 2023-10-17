import { auth, clerkClient } from "@clerk/nextjs";

import { db } from "./db";
import axios from "axios";
import { type DiscordUser } from "@/types/discord-user";

export const currentUser = async () => {
  const { userId: userID } = auth();

  if (!userID) {
    return null;
  }

  const user = await db.user.findUnique({
    where: { userID },
  });

  if (!user) {
    const tokenData = await clerkClient.users.getUserOauthAccessToken(
      userID,
      "oauth_discord",
    );
    try {
      const response = await axios.get("https://discordapp.com/api/users/@me", {
        headers: { Authorization: `Bearer ${tokenData[0]?.token}` },
      });
      const data = response.data as DiscordUser;
      const newUser = await db.user.create({
        data: { discordID: data.id, userID },
      });
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  return user;
};
