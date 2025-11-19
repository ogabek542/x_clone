import React, { ElementRef, useEffect, useRef, useState } from "react";
import { ChevronsLeft, MenuIcon, Plus, Search, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";
import { DocumentList } from "./document-list";
import { Item } from "./item";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { UserBox } from "./user-box";

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 770px)");
  const createDocument = useMutation(api.document.createDocument);

  const sidebarRef = useRef<ElementRef<"div">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [isResetting, setIsResetting] = useState(false);
  const isResizing = useRef(false);

  //   close siodebar function //
  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0px";
      navbarRef.current.style.width = "100%";
      navbarRef.current.style.left = "0px";

      // Reset the resetting state after animation completes
      setTimeout(() => setIsResetting(false), 300);
    }
  };
  // reopen sidebar function //
  const reset = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.width = isMobile ? "100%" : "calc(100% - 240px)";
      navbarRef.current.style.left = isMobile ? "100%" : "240px";

      // Reset the resetting state after animation completes
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizing.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizing.current) return;
    let newWidth = event.clientX;
    if (newWidth < 240) newWidth = 240;
    if (newWidth > 400) newWidth = 400;
    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.width = `calc(100% - ${newWidth}px)`;
      navbarRef.current.style.left = `${newWidth}px`;
      navbarRef.current.style.width = `calc(100% - ${newWidth}px)`;
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      reset();
    }
  }, [isMobile]);

  const onCreateDocument = () => {
    createDocument({
      title: "Untitled",
    });
  };

  return (
    <>
      <div
        className={cn(
          "group/sidebar h-screen bg-secondary overflow-y-auto relative flex w-60 flex-col z-50",
          isResetting && "transition-all duration-300 ease-in-out",
          isMobile && "w-full left-0"
        )}
        ref={sidebarRef}
      >
        <div
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition cursor-pointer",
            isMobile && "opacity-100"
          )}
          role="button"
          onClick={collapse}
        >
          <ChevronsLeft className="w-6 h-6" />
        </div>

        <div>
          <UserBox />
          <Item label="Search" icon={Search} />
          <Item label="Settings" icon={Settings} />
          <Item label="New document" icon={Plus} onClick={onCreateDocument} />
        </div>
        <div className="mt-4">
          <DocumentList />
          <Item onClick={onCreateDocument} icon={Plus} label="Add a page" />
        </div>

        <div
          className="absolute right-0 top-0 w-1 h-full cursor-ew-resize bg-primary/10 opacity-0 group-hover/sidebar:opacity-100 transition"
          onMouseDown={handleMouseDown}
        />
      </div>

      <div
        className={cn(
          "absolute top-0 z-50 left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all duration-300 ease-in-out",
          isCollapsed && "left-0 w-full"
        )}
        ref={navbarRef}
      >
        <nav className="bg-transparent px-3 py-2 w-full">
          {isCollapsed && (
            <MenuIcon
              className="w-6 h-6 text-muted-foreground cursor-pointer"
              role="button"
              onClick={reset}
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
