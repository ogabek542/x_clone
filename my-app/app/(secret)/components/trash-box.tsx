"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";

export const TrashBox = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="text-sm">
      <div className="flex items-center gap-x-1 p-2">
        <Search className="w-4 h-4" />
        <Input
          className="h-7 px-2 focus-visible:ring-transparent bg-secondary"
          placeholder="Filter by page title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mt-2 px-1 pb-1">
        <p className="hidden last:block text-xs text-muted-foreground pb-2">
          No documents in trash
        </p>
      </div>
    </div>
  );
};
