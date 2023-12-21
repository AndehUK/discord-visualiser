import axios from "axios";
import { NextResponse } from "next/server";

import { currentUser } from "@/lib/current-user";

interface ChannelMessageData {
  channelID: string;
  messageID: string;
}

export async function GET(req: Request) {
  try {
    const user = await currentUser();
    const { channelID, messageID } = (await req.json()) as ChannelMessageData;
    if (!user) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const response = await axios.get(
      `http://localhost:3001/channels/${channelID}/messages/${messageID}`,
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[DISCORD_USER_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
