import {FilmTabName} from '../../const';
import classNames from 'classnames';
import {MouseEvent} from 'react';

type FilmTabNavigationProps = {
  activeTab: string | null;
  onClick: (evt: MouseEvent<HTMLAnchorElement>) => void;
}

function FilmTabNavigation({activeTab, onClick}: FilmTabNavigationProps) {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {Object.values(FilmTabName).map((tab) => (
          <li key={tab} className={classNames('film-nav__item', {'film-nav__item--active': tab === activeTab})}>
            <a href="#" className="film-nav__link" onClick={onClick}>
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FilmTabNavigation;
