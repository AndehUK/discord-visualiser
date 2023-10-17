"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect } from "react";
import axios from "axios";
import { type MinimalDiscordUser } from "@/types/discord-user";

export const UserCard = () => {
  const [user, setUser] = useState<MinimalDiscordUser>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/discord/user`);
        setUser(response.data as MinimalDiscordUser);
      } catch (error) {
        console.log("Error fetching data from bot api", error);
      }
    };
    void fetchData();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex w-full items-center p-3 text-sm hover:bg-primary/5"
        >
          <div className="flex items-center gap-x-2">
            <Avatar className="h-5 w-5">
              <AvatarImage src={user?.avatar} />
            </Avatar>
            <span className="line-clamp-1 text-start text-lg font-medium">
              Logged in as{" "}
              <span className="font-bold">
                {user?.username ?? "Unknown User"}
              </span>
            </span>
          </div>
          <ChevronsLeftRight className="ml-2 h-4 w-4 rotate-90 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.global_name}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.avatar} />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="line-clamp-1 text-sm">{user?.username}</p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground hover:bg-card/10"
        >
          <SignOutButton>Log out</SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
