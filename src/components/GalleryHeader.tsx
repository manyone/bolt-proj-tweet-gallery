import React from 'react';
import { AppWindow } from 'lucide-react';

export function GalleryHeader() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <div className="flex items-center justify-center mb-4">
        <AppWindow className="h-12 w-12 text-blue-500" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        My Bolt Apps on Twitter
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        A curated timeline of applications announced through tweets
      </p>
    </div>
  );
}