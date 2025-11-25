"use client";

import Cover from "@/components/shared/cover";
import Toolbar from "@/components/shared/toolbar";
// import Toolbar from "@/components/shared/toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import React, { use, useMemo } from "react";
// import "@blocknote/core/style.css";

interface DocumentIdPageProps {
  params: Promise<{
    documentId: Id<"documents">;
  }>;
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const resolvedParams = use(params);

  const document = useQuery(api.document.getDocumentById, {
    id: resolvedParams.documentId as Id<"documents">,
  });
  const updateFields = useMutation(api.document.updateFields);

  if (document === null) return null;
  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-40">
      {/* <Cover url={document?.coverImage} /> */}
      <Cover
        url={
          "https://png.pngtree.com/background/20210714/original/pngtree-floral-seamless-pattern-with-multicolored-flowers-on-a-black-background-picture-image_1203640.jpg"
        }
      />

      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar document={document} />
      </div>
    </div>
  );
};

export default DocumentIdPage;
