"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { tools } from "@/lib/constants";
import { UserCard } from "./user-card";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col space-y-4 bg-[#111827] pt-4 text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="mb-14 flex items-center pl-3">
          <div className="relative mr-4 h-8 w-44">
            <Image fill alt="Logo" src="/logo-dark-full.png" />
          </div>
        </Link>
        <div className="space-y-1">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={cn(
                "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white",
                pathname === tool.href
                  ? "bg-white/10 text-white"
                  : "text-zinc-400",
              )}
            >
              <div className="flex flex-1 items-center">
                <tool.icon className={cn("mr-3 h-5 w-5", tool.color)} />
                {tool.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <UserCard />
    </div>
  );
};
