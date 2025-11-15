"use client";

import React from "react";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import Link from "next/link"; // Fixed: Import Link from next/link instead of lucide-react
import { Loader } from "@/components/ui/loader";

export const Navbar = () => {
  const scrolled = useScrolled();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center gap-x-2">
        {isLoading && <Loader size={"lg"} />}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton>
              <Button size={"sm"} variant={"ghost"}>
                Log In
              </Button>
            </SignInButton>
            <SignInButton>
              <Button size={"sm"}>Get Notion Free</Button>
            </SignInButton>
            <ModeToggle />
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button size={"sm"} variant={"ghost"} asChild>
              <Link href="/documents">Enter Notion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
            <ModeToggle />
          </>
        )}
      </div>
    </div>
  );
};
