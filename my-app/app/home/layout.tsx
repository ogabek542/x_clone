import { ChildProps } from "@/types";
import React from "react";

const Homelayout = ({ children }: ChildProps) => {
  return (
    <div className="h-full">
      <p>navbar</p>
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default Homelayout;
