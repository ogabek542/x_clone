import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CoverProps {
  url?: string;
  preview?: string;
}

const Cover = ({ url, preview }: CoverProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-[30vh] group",
        !url && "h-[10vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image src={url} alt="cover" fill className="object-cover" />}
    </div>
  );
};

export default Cover;
