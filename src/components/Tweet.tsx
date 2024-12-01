import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

interface TweetProps {
  id: string;
}

export function Tweet({ id }: TweetProps) {
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widget script if not already loaded
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Render tweet when script is loaded
    const renderTweet = () => {
      if (window.twttr && tweetRef.current) {
        window.twttr.widgets.load(tweetRef.current);
      }
    };

    if (window.twttr) {
      renderTweet();
    } else {
      document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
        ?.addEventListener('load', renderTweet);
    }
  }, [id]);

  return (
    <div ref={tweetRef} className="bg-gray-800 rounded-lg overflow-hidden">
      <blockquote className="twitter-tweet" data-theme="dark">
        <a href={`https://twitter.com/x/status/${id}`}></a>
      </blockquote>
    </div>
  );
}