import FilmTabNavigation from '../film-tab-navigation/film-tab-navigation';
import FilmOverviewTab from '../film-overview-tab/film-overview-tab';
import FilmDetailsTab from '../film-details-tab/film-details-tab';
import FilmReviewsTab from '../film-reviews-tab/film-reviews-tab';
import {TFilmDetailed} from '../../types/film';
import {TReviews} from '../../types/review';
import {FilmTabName} from '../../const';
import React, {MouseEvent, useState} from 'react';

type FilmDescriptionProps = {
  film: TFilmDetailed;
  reviews: TReviews;
}

function FilmDescription({film, reviews}: FilmDescriptionProps) {
  const [activeTab, setActiveTab] = useState<string | null>(FilmTabName.Overview);

  const handleLinkClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    setActiveTab(evt.currentTarget.textContent);
  };

  const renderActiveTab = (tab: string | null): React.JSX.Element => {
    switch (tab) {
      case FilmTabName.Details:
        return <FilmDetailsTab film={film} />;
      case FilmTabName.Reviews:
        return <FilmReviewsTab reviews={reviews} />;
      default:
        return <FilmOverviewTab film={film} />;
    }
  };

  return (
    <div className="film-card__desc">
      <FilmTabNavigation activeTab={activeTab} onClick={handleLinkClick} />
      {renderActiveTab(activeTab)}
    </div>
  );
}

export default FilmDescription;
