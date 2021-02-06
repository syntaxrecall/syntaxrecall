import React from 'react';
import Searchbar from '../components/Searchbar';

export default function Page(): React.ReactElement {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-start-5 col-span-4 min-h-screen">
        <div className="flex items-center min-h-screen">
          <div className="w-full">
            <h1 className="text-4xl text-center font-bold mb-4">Syntax Recall</h1>
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
}
