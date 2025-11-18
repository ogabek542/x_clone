"use client"; // This MUST be the very first line!

import React from "react";
import { useUser } from "@clerk/nextjs";

const DocumentPage = () => {
  const { user } = useUser();

  return (
    <div className="h-screen w-full flex justify-center items-center space-y-4 flex-col">
      <h2 className="text-lg font-bold">
        Welcome to {user?.firstName}&apos;s document page!
      </h2>
    </div>
  );
};

export default DocumentPage;
