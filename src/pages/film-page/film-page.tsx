import {useParams} from 'react-router-dom';
import FilmsSimilar from '../../components/films-similar/films-similar';
import Film from '../../components/film/film';
import PageFooter from '../../components/page-footer/page-footer';
import {Fragment} from 'react';

function FilmPage() {
  const id = useParams().id as string;

  return (
    <Fragment>
      <Film id={id} />
      <div className="page-content">
        <FilmsSimilar id={id} />
        <PageFooter />
      </div>
    </Fragment>
  );
}

export default FilmPage;
