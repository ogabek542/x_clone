"use client"; // This MUST be the very first line!

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const DocumentPage = () => {
  const { user } = useUser();
  const createDocument = useMutation(api.document.createDocument);
  const onCreateDocument = () => {
    createDocument({
      title: "Untitled",
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center space-y-4 flex-col">
      <Image
        src={"/note.svg"}
        alt="Logo"
        width={300}
        height={300}
        className="object-cover  dark:hidden"
      />
      <Image
        src={"/note-dark.svg"}
        alt="Logo"
        width={300}
        height={300}
        className="object-cover hidden dark:block"
      />
      <h2 className="text-lg font-bold">
        Welcome to {user?.firstName}&apos;s document page!
      </h2>
      <Button onClick={onCreateDocument} className="cursor-pointer">
        <Plus className="mr-2 h-4 w-4" />
        Create blank
      </Button>
    </div>
  );
};

export default DocumentPage;
