"use client";

import { ChildProps } from "@/types";
import React from "react";
import { useConvexAuth } from "convex/react";
import { Loader } from "@/components/ui/loader";

const SecretLayout = ({ children }: ChildProps) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    return (
      <div>
        <Loader size={"lg"} />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default SecretLayout;
