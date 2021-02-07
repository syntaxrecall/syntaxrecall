import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar(): React.ReactElement {
  return (
    <div className="rounded-full py-3 px-6 shadow-sm text-xl border-gray-300 flex items-center bg-white">
      <FontAwesomeIcon
        icon={faSearch}
        className="mr-6"
      />
      <input
        type="text"
        name="search"
        className="focus:outline-none w-full"
        placeholder="Search..."
        autoComplete="off"
      />
    </div>
  );
}
