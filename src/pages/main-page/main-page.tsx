import {Fragment} from 'react';
import PageFooter from '../../components/page-footer/page-footer';
import Catalog from '../../components/catalog/catalog';
import FilmPromo from '../../components/film-promo/film-promo';

function MainPage() {
  return (
    <Fragment>
      <FilmPromo />
      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </Fragment>
  );
}

export default MainPage;
