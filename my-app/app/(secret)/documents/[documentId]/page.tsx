"use client";

import Cover from "@/components/shared/cover";
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

  return (
    <div className="pb-40">
      {/* <Cover url={document?.coverImage} /> */}
      <Cover
        url={
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dfloral%2Bheader&psig=AOvVaw3Xo8MHmGPjhb9spx6_0DmH&ust=1764131118190000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMjV19a6jJEDFQAAAAAdAAAAABAL"
        }
      />

      <div className="md:max-w-3xl lg:max-w-4xl mx-auto"></div>
    </div>
  );
};

export default DocumentIdPage;
