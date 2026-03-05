import {ForwardedRef, forwardRef} from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  onLoadedData?: () => void;
  onEnded?: () => void;
  onTimeUpdate?: () => void;
}

function VideoPlayerElement(props: VideoPlayerProps, ref: ForwardedRef<HTMLVideoElement>) {
  const {src, poster, onLoadedData, onEnded, onTimeUpdate} = props;

  return (
    <video
      className="player__video"
      src={src}
      poster={poster}
      muted
      onLoadedData={onLoadedData}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      ref={ref}
    />
  );
}
const VideoPlayer = forwardRef<HTMLVideoElement | null, VideoPlayerProps>(VideoPlayerElement);

export default VideoPlayer;
