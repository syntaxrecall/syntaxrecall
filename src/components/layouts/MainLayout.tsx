import React from "react";

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps): React.ReactElement {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-3 md:col-span-8 min-h-screen">
        {children}
      </div>
    </div>
  );
}
