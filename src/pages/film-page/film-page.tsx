import {useParams} from 'react-router-dom';
import FilmsSimilar from '../../components/films-similar/films-similar';
import Film from '../../components/film/film';
import PageFooter from '../../components/page-footer/page-footer';
import {Fragment} from 'react';
import {PageTitle} from '../../const';
import {Helmet} from 'react-helmet-async';

function FilmPage() {
  const id = useParams().id as string;

  return (
    <Fragment>
      <Helmet>
        <title>{PageTitle.Film}</title>
      </Helmet>
      <Film id={id} />
      <div className="page-content">
        <FilmsSimilar id={id} />
        <PageFooter />
      </div>
    </Fragment>
  );
}

export default FilmPage;
