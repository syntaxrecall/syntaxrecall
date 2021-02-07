import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../hooks";

interface Props {
  onChange: (searchTerm: string) => void;
}

export default function SearchBar({ onChange }: Props): React.ReactElement {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onChange(debouncedSearchTerm);
    } else {
      onChange(null);
    }
  }, [debouncedSearchTerm, onChange]);

  return (
    <>
      <div className="rounded-full py-3 px-6 shadow-sm text-xl border-gray-300 flex items-center bg-white">
        <FontAwesomeIcon
          icon={faSearch}
          className="mr-6"
          width="20"
          height="20"
        />
        <input
          type="text"
          name="search"
          className="focus:outline-none w-full"
          placeholder="Search..."
          autoComplete="off"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </>
  );
}
