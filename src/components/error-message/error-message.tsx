import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';
import './error-message.css';

function ErrorMessage() {
  return (
    <section className="error-message">
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header error-message__head">
        <Logo/>
        <UserNavigation/>
      </header>
      <div className="error-message__wrap">
        <div className="error-message__text">
          <h2 className="error-message__title">Something went wrong</h2>
          <p className="error-message__description">We couldn&apos;t load the film. Please try again later.</p>
        </div>
      </div>
    </section>
  );
}

export default ErrorMessage;
