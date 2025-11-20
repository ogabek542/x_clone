import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Doc } from "@/convex/_generated/dataModel";
import React, { useRef, useState } from "react";

interface TitleProps {
  document: Doc<"documents">;
}

export const Title = ({ document }: TitleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState(document.title || "Untitled");
  const [isEditing, setIsEditing] = useState(false);
  const enableInput = () => {
    setTitle(document.title || "Untitled");
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };
  const disableInput = () => {
    setIsEditing(false);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onKeydown = () => {};

  return (
    <div className="flex items-center gap-x-1">
      {!!document.icon && <p>{document.icon}</p>}
      {isEditing ? (
        <Input
          ref={inputRef}
          onClick={enableInput}
          onBlur={disableInput}
          onChange={onChange}
          onKeyDown={onKeydown}
          value={title}
          className="h-7 px-2 focus-visible:ring-transparent"
        />
      ) : (
        <Button
          className="font-normal h-auto p-1 "
          variant={"ghost"}
          size={"sm"}
          onClick={enableInput}
        >
          <span className="truncate">{document.title || "Untitled"}</span>
        </Button>
      )}
    </div>
  );
};
