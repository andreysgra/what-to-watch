import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type UserNavigationProps = {
  authorizationStatus?: AuthorizationStatus;
}

function UserNavigation({authorizationStatus = AuthorizationStatus.Auth}: UserNavigationProps) {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    isAuthorized ? (
      <ul className="user-block">
        <li className="user-block__item">
          <Link className="user-block__avatar" to={AppRoute.MyList} style={{display: 'block'}}>
            <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
          </Link>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    ) :
      (
        <div className="user-block">
          <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>
        </div>
      )
  );
}

export default UserNavigation;
