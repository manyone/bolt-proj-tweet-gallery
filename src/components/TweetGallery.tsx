import React from 'react';
import { GalleryHeader } from './GalleryHeader';
import { Tweet } from './Tweet';

const tweets = [
  '1848573330581795215',
  '1861969897586409672',
  '1861687962075041889',
  '1857251604904440116',
  '1849730292032082144',
  '1856559297104433242',
  '1857574399760884187',
  '1856457377547202974',
  '1853613473521090992',
  '1857255167864995969',
  '1850344633882312856',
  '1862603652139282676',
  '1864168113333522862'
];

export function TweetGallery() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <GalleryHeader />
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweetId) => (
            <Tweet key={tweetId} id={tweetId} />
          ))}
        </div>
      </div>
    </div>
  );
}
