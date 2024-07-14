"use client";

import { Input } from "./ui/input";
import { useState } from "react";
import { Search } from "lucide-react";

function Searchbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="relative block">
      <Input
        className="input-class py-6 pl-12 focus-visible:ring-offset-blue-600"
        placeholder="Search tools"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onLoad={() => setSearch("")}
      />
      <Search size={20} className="absolute left-4 top-3.5 text-white" />
    </div>
  );
}

export default Searchbar;
