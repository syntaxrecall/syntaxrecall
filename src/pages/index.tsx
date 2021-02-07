import React, { useState } from 'react';
import Searchbar from '../components/Searchbar';
import { getAllTopics } from '../../lib/api';
import { Topic } from '../types';

interface Props {
  topics: Topic[]
}

export default function Page({ topics }: Props): React.ReactElement {
  const [filteredItems, setFilteredItems] = useState(null);

  function onSearchChange(items: Topic[]) {
    setFilteredItems(items);
  }

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-start-5 col-span-4 min-h-screen">
        <div className="flex items-end" style={{ minHeight: '40%' }}>
          <div className="w-full">
            <h1 className="text-4xl text-center font-bold mb-4">Syntax Recall</h1>
            <Searchbar items={topics} onChange={onSearchChange} />
          </div>
        </div>

        {filteredItems && (
          <div className="mt-4">
            <h2 className="mb-2 text-2xl font-bold">
              {`Found ${filteredItems.length} results`}
            </h2>
            {filteredItems.map((item) => (
              <div key={item.slug}>
                {item.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const topics = getAllTopics(['title', 'slug', 'keywords']);
  return {
    props: {
      topics,
    },
  };
}
