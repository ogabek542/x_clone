import React from "react";
import { useUser } from "@clerk/clerk-react";

const SearchCommand = () => {
  const { user } = useUser();
  return <div>SearchCommand</div>;
};

export default SearchCommand;
