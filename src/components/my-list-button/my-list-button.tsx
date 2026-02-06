type MyListButtonProps = {
  isFavorite: boolean;
}

function MyListButton({isFavorite}: MyListButtonProps) {
  return (
    <button className="btn btn--list film-card__button" type="button">
      {!isFavorite ? (
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add"/>
        </svg>
      ) :
        (
          <svg viewBox="0 0 18 14" width={18} height={14}>
            <use xlinkHref="#in-list"></use>
          </svg>
        )}
      <span>My list</span>
      <span className="film-card__count">9</span>
    </button>
  );
}

export default MyListButton;
