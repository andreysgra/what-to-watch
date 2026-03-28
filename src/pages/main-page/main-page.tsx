import {Fragment} from 'react';
import PageFooter from '../../components/page-footer/page-footer';
import Catalog from '../../components/catalog/catalog';
import FilmPromo from '../../components/film-promo/film-promo';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../const';

function MainPage() {
  return (
    <Fragment>
      <Helmet>
        <title>{PageTitle.Main}</title>
      </Helmet>
      <FilmPromo />
      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </Fragment>
  );
}

export default MainPage;
