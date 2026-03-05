import VideoPlayer from '../video-player/video-player';
import {TFilmDetailed} from '../../types/film';
import {resetPlayback, setCurrentTime, setDuration} from '../../store/video-player/slice';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getPlaybackProgress, getRemainingTime} from '../../store/video-player/selectors';
import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';

type PlayerProps = {
  film: TFilmDetailed;
}

function Player({film}: PlayerProps) {
  const remainingTime = useAppSelector(getRemainingTime);
  const playbackProgress = useAppSelector(getPlaybackProgress);

  const [isPaused, setIsPaused] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetPlayback());
  }, [dispatch]);

  const {name, backgroundImage, videoLink} = film;

  const handleButtonPlayClick = () => {
    setIsPaused((prevState) => !prevState);

    if (isPaused) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  };

  const handleButtonFullScreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleButtonExitClick = () => {
    navigate(-1);
  };

  const handleDataLoaded = () => {
    if (!videoRef.current) {
      return;
    }

    videoRef.current?.play();
    videoRef.current.muted = false;
  };

  const handleDataEnded = () => {
    setIsPaused(true);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) {
      return;
    }

    dispatch(setDuration(videoRef.current.duration));
    dispatch(setCurrentTime(videoRef.current.currentTime));
  };

  return (
    <div className="player">
      <VideoPlayer
        src={videoLink}
        poster={backgroundImage}
        onLoadedData={handleDataLoaded}
        onEnded={handleDataEnded}
        onTimeUpdate={handleTimeUpdate}
        ref={videoRef}
      />
      <button type="button" className="player__exit" onClick={handleButtonExitClick}>
        Exit
      </button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playbackProgress} max={100} />
            <div className="player__toggler" style={{left: `${playbackProgress}%`}}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{remainingTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handleButtonPlayClick}>
            {isPaused ? (
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s"/>
              </svg>
            ) : (
              <svg viewBox="0 0 14 21" width={14} height={21}>
                <use xlinkHref="#pause"></use>
              </svg>
            )}
            <span>{isPaused ? 'Play' : 'Paused'}</span>
          </button>
          <div className="player__name">{name}</div>
          <button type="button" className="player__full-screen" onClick={handleButtonFullScreen}>
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
