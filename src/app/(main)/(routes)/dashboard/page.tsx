"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { tools } from "@/lib/constants";

const DashboardPage = () => {
  const router = useRouter();

  const pushToTool = (href: string) => {
    return router.push(href);
  };

  return (
    <div>
      <div className="mb-8  space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Power-up your Discord
        </h2>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg">
          Take your Discord Server to the next level with Exult
        </p>
      </div>
      <div className=" space-y-4 px-4">
        {tools.map((tool) => (
          <>
            {tool.href !== "/dashboard" && (
              <Card
                key={tool.href}
                className="flex cursor-pointer items-center justify-between border-black/5 bg-secondary p-4 transition hover:shadow-md"
                onClick={() => pushToTool(tool.href)}
              >
                <div className="flex  items-center gap-x-4">
                  <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                    <tool.icon className={cn("h-8 w-8", tool.color)} />
                  </div>
                  <div className="font-semibold">{tool.label}</div>
                </div>
                <ArrowRight className="h-5 w-5" />
              </Card>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
