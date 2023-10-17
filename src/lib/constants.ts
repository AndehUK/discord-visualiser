import {
  Workflow,
  MessageSquarePlus,
  MousePointerSquare,
  LayoutDashboard,
} from "lucide-react";

import { type Tool } from "@/types/tool";

export const tools: Tool[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    href: "/dashboard",
  },
  {
    label: "Message Builder",
    icon: MessageSquarePlus,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/tools/message-builder",
  },
  {
    label: "Autoroles",
    icon: Workflow,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/tools/autoroles",
  },
  {
    label: "Role Menus",
    icon: MousePointerSquare,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/tools/rolemenus",
  },
];
