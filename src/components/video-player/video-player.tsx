import {useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying?: boolean;
}

function VideoPlayer({src, poster, isPlaying}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDataLoaded = () => setIsLoaded(true);

  useEffect(() => {
    if (!videoRef.current || !isLoaded) {
      return;
    }

    if (isPlaying) {
      videoRef.current
        .play()
        .catch((err) => new Error(`Can not play video: ${err}`));

      return;
    }

    videoRef.current.pause();
  }, [isLoaded, isPlaying]);

  return (
    <video
      className="player__video"
      ref={videoRef}
      src={src}
      poster={poster}
      onLoadedData={handleDataLoaded}
      muted
    />);
}

export default VideoPlayer;
