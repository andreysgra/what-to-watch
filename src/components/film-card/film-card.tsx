import {TFilm} from '../../types/film';
import {Link} from 'react-router-dom';
import {AppRoute, DELAY_BEFORE_PLAY_VIDEO, RouteParam} from '../../const';
import VideoPlayer from '../video-player/video-player';
import {useEffect, useRef} from 'react';

type FilmCardProps = {
  film: TFilm;
  filmCurrentId?: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}

function FilmCard({film, filmCurrentId, onMouseEnter, onMouseLeave}: FilmCardProps) {
  const {id, name, previewImage, previewVideoLink} = film;
  const link = AppRoute.Film.replace(RouteParam.Id, id);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => onMouseEnter(id);

  const handleMouseLeave = () => onMouseLeave();

  useEffect(() => {
    if (filmCurrentId !== id || !videoRef.current) {
      return ;
    }

    const timerId = setTimeout(
      () => {
        videoRef.current?.play();
      },
      DELAY_BEFORE_PLAY_VIDEO
    );

    return () => {
      clearTimeout(timerId);
    };
  }, [id, filmCurrentId]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="small-film-card__image" to={link} style={{display: 'block'}}>
        {filmCurrentId !== id ?
          (<img src={previewImage} alt={name} width={280} height={175}/>)
          :
          (<VideoPlayer src={previewVideoLink} poster={previewImage} ref={videoRef} />)}
      </Link>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={link}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
