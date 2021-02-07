import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '../hooks';
import { Topic } from '../types';

interface Props {
  items: Topic[];
  onChange: (items: Topic[]) => void
}

function getFilteredItems(searchText: string, topics: Topic[]) {
  let results: Topic[] = [];
  if (searchText) {
    results = topics.filter((topic) => topic.keywords.includes(searchText.toLowerCase()));
  }
  return results;
}

export default function SearchBar({ items, onChange }: Props): React.ReactElement {
  const [searchText, setSearchText] = useState('');
  const debouncedSearchTerm = useDebounce(searchText, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onChange(getFilteredItems(debouncedSearchTerm, items));
    } else {
      onChange(null);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className="rounded-full py-3 px-6 shadow-sm text-xl border-gray-300 flex items-center bg-white">
        <FontAwesomeIcon icon={faSearch} className="mr-6" />
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
