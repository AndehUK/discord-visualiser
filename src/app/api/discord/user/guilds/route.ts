import axios from "axios";
import { NextResponse } from "next/server";

import { currentUser } from "@/lib/current-user";

export async function GET() {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const response = await axios.get(
      `http://localhost:3001/users/${user?.discordID}/guilds`,
    );
    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[DISCORD_USER_GUILDS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
