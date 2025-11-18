"use client";

import React from "react";
import { Id } from "@/convex/_generated/dataModel";

interface DocumentListProps {
  productDocumentId?: Id<"documents">;
  level?: number;
}

const DocumentList = ({ productDocumentId, level }: DocumentListProps) => {
  return <div>DocumentList</div>;
};

export default DocumentList;
