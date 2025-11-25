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
          "https://t3.ftcdn.net/jpg/11/37/76/10/360_F_1137761079_hOzJmsXNfQQnZGHUMbGrFDDkT8sKa325.jpg"
        }
      />

      <div className="md:max-w-3xl lg:max-w-4xl mx-auto"></div>
    </div>
  );
};

export default DocumentIdPage;
