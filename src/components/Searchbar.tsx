import React from 'react';

export default function SearchBar(): React.ReactElement {
  return (
    <input
      type="text"
      name="search"
      className="px-6 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl border-gray-300 rounded-md"
      placeholder="Search for a topic..."
      autoComplete="off"
    />
  );
}
