import PageFooter from '../../components/page-footer/page-footer';
import Logo from '../../components/logo/logo';
import LoginForm from '../../components/login-form/login-form';
import {PageTitle} from '../../const';
import {Helmet} from 'react-helmet-async';
import {Fragment} from 'react';

function LoginPage() {
  return (
    <Fragment>
      <Helmet>
        <title>{PageTitle.LogIn}</title>
      </Helmet>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <LoginForm/>
        </div>
        <PageFooter/>
      </div>
    </Fragment>
  );
}

export default LoginPage;
