import { Doc } from "@/convex/_generated/dataModel";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import React from "react";
import { Globe } from "lucide-react";

interface PublishProps {
  document: Doc<"documents">;
}

export const Publish = ({ document }: PublishProps) => {
  const onPublish = () => {};

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"sm"} variant={"ghost"}>
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72" align="end" alignOffset={8} forceMount>
        {!document.isPublished && (
          <div className="flex flex-col items-center justify-center">
            <Globe className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm font-medium mb-2 ">Publish this document</p>
            <span className="text-xs text-muted-foreground mb-4">
              Share your work with others.
            </span>
            <Button size={"sm"} className="w-full text-sm" onClick={onPublish}>
              Publish
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
