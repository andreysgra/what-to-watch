type ShowMoreButtonProps = {
  onClick: () => void;
}

function ShowMoreButton({onClick}: ShowMoreButtonProps) {
  return (
    <button className="catalog__button" type="button" onClick={onClick}>
      Show more
    </button>
  );
}

export default ShowMoreButton;
