"use client";

import type React from "react";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (

    <form onSubmit={handleSubmit} className="flex-1 max-w-3xl mx-auto relative px-2 sm:px-4">
      <Search className="absolute left-5 sm:left-7 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        placeholder="Buscar películas..."
        className="w-full bg-neutral-900 border-neutral-800 pl-9 sm:pl-11 text-white placeholder:text-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
