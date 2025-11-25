import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ImageIcon, X } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { useCoverImage } from "@/hooks/use-cover-image";
// import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

interface CoverProps {
  url?: string;
  preview?: string;
}

const Cover = ({ url, preview }: CoverProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[10vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image src={url} alt="cover" fill className="object-cover" />}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute top-5 right-20 flex items-center gap-x-2">
          <Button
            size={"sm"}
            variant={"outline"}
            className="text-muted-foreground text-xs"
          >
            <ImageIcon />
            <span>Change cover </span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cover;
