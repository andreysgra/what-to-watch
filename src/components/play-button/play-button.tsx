import {TFilm} from '../../types/film';
import {useNavigate} from 'react-router-dom';
import {AppRoute, RouteParam} from '../../const';

type PlayButtonProps = {
  id: TFilm['id'];
}

function PlayButton({id}: PlayButtonProps) {
  const navigate = useNavigate();
  const link = AppRoute.Player.replace(RouteParam.Id, id);

  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <button className="btn btn--play film-card__button" type="button" onClick={handleButtonClick}>
      <svg viewBox="0 0 19 19" width={19} height={19}>
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
