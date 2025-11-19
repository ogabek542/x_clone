"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";

const DocumentIdPage = () => {
  const params = useParams<{ documentId: string }>();
  const documentId = params.documentId as Id<"documents">;

  return <div>{documentId}</div>;
};

export default DocumentIdPage;
