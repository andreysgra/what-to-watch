import {useParams} from 'react-router-dom';
import FilmsSimilar from '../../components/films-similar/films-similar';
import Film from '../../components/film/film';
import PageFooter from '../../components/page-footer/page-footer';

function FilmPage() {
  const id = useParams().id as string;

  return (
    <div className="page-content">
      <Film id={id} />
      <FilmsSimilar id={id} />
      <PageFooter />
    </div>
  );
}

export default FilmPage;
