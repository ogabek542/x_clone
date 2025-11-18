"use client";

import React from "react";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Item from "./item";

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
}

const DocumentList = ({ parentDocumentId, level }: DocumentListProps) => {
  const documents = useQuery(api.document.getDocuments, {
    parentDocument: parentDocumentId,
  });
  console.log(documents, "test documents");
  return (
    <>
      {documents?.map((document) => (
        <div key={document._id}>
          <Item label={document.title} id={document._id} />
          <DocumentList parentDocumentId={document._id} level={1} />
        </div>
      ))}
    </>
  );
};

export default DocumentList;
