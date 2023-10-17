"use client";

import Link from "next/link";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  type ElementRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useMediaQuery } from "usehooks-ts";

import { UseScrollTop } from "@/hooks/use-scroll-top";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { tools } from "@/lib/constants";
import { Logo } from "./logo";
import { UserCard } from "./user-card";

export const Sidebar = () => {
  const pathname = usePathname();
  const maxWidth = "(max-width: 768px)";
  const scrolled = UseScrollTop();
  /* 
    eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, 
    @typescript-eslint/no-unsafe-call
  */
  const isMobile: boolean = useMediaQuery(maxWidth);

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(!!isMobile);

  const resetWidth = useCallback(() => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "260px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 260px)",
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "260px");
      setTimeout(() => setIsResetting(false), 300);
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile, resetWidth]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = event.clientX;

    if (newWidth < 260) newWidth = 260;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`,
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar relative z-[99999] flex h-full w-60 flex-col justify-between overflow-y-auto bg-secondary",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "w-0",
        )}
      >
        <div
          role="button"
          onClick={collapse}
          className={cn(
            "absolute right-2 top-3 h-6 w-6 rounded-sm text-muted-foreground opacity-0 transition hover:bg-neutral-300 group-hover/sidebar:opacity-100 dark:hover:bg-neutral-600",
            isMobile && "opacity-100",
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>
          <div className="flex w-full items-center justify-center p-4">
            <div className="rounded-xl bg-primary/20 p-4">
              <Logo />
            </div>
          </div>
          <div className="mx-4 mt-4 space-y-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={cn(
                  "group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-zinc-300 hover:text-black dark:hover:bg-white/10 dark:hover:text-white",
                  pathname === tool.href
                    ? "bg-zinc-300 text-black dark:bg-white/10 dark:text-white"
                    : "text-zinc-400",
                )}
              >
                <div className="flex  items-center gap-x-4">
                  <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                    <tool.icon className={cn("h-5 w-5", tool.color)} />
                  </div>
                  <div className="font-semibold">{tool.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <UserCard />
        </div>
        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-primary/10 opacity-0 transition group-hover/sidebar:opacity-100"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute left-60 top-0 z-[99999] w-[calc(100%-260px)]",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "left-0 w-full",
        )}
      >
        <div
          className={cn(
            "fixed top-0 z-50 flex w-full items-center bg-background p-6",
            scrolled && "border-b shadow-sm",
          )}
        >
          <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto">
            {isCollapsed && (
              <MenuIcon
                onClick={resetWidth}
                className="h-6 w-6 text-muted-foreground"
                role="button"
              />
            )}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
