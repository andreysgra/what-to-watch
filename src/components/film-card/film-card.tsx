import {TFilm} from '../../types/film';
import {Link} from 'react-router-dom';
import {AppRoute, DELAY_BEFORE_PLAY_VIDEO, RouteParam} from '../../const';
import VideoPlayer from '../video-player/video-player';
import {useEffect, useRef, useState} from 'react';

type FilmCardProps = {
  film: TFilm;
}

function FilmCard({film}: FilmCardProps) {
  const [filmCurrentId, setFilmCurrentId] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const {id, name, previewImage, previewVideoLink} = film;
  const link = AppRoute.Film.replace(RouteParam.Id, id);


  const handleMouseEnter = () => {
    setFilmCurrentId(id);
  };

  const handleMouseLeave = () => {
    setFilmCurrentId(null);
  };

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
