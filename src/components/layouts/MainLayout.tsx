import React from 'react';

interface PageProps {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-5 col-span-6">
        {children}
      </div>
    </div>
  );
}
