import classNames from 'classnames';
import {memo, MouseEvent} from 'react';

type GenreItemProps = {
  genre: string;
  isActive: boolean;
  onClick: (genre: string) => void;
}

function GenreItemElement({genre, isActive, onClick}: GenreItemProps) {
  const handleGenreLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClick(genre);
  };

  return (
    <li className={classNames('catalog__genres-item', {'catalog__genres-item--active': isActive})}>
      <a href="#" className="catalog__genres-link" onClick={handleGenreLinkClick}>
        {genre}
      </a>
    </li>
  );
}

const GenreItem = memo(GenreItemElement);

export default GenreItem;
