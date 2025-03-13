import React, { useEffect, useRef } from 'react';

const YouTubeBackground = ({ videoId }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube IFrame Player API code asynchronously
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          iv_load_policy: 3,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          mute: 1
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            // Set video to loop
            event.target.addEventListener('onStateChange', (e) => {
              if (e.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo();
              }
            });
          }
        }
      });
    };

    // Clean up
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = null;
    };
  }, [videoId]);

  return (
    <div className="absolute inset-0 z-0">
      <div id="youtube-player" className="w-full h-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  );
};

export default YouTubeBackground;

// Usage example:
// <YouTubeBackground videoId="dQw4w9WgXcQ" />