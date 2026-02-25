import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {logoutUser} from '../../store/api-actions';

function UserNavigation() {
  const user = useAppSelector((state) => state.user);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    if (isAuthorized) {
      dispatch(logoutUser());
    }
  };

  return (
    isAuthorized ?
      (
        <ul className="user-block">
          <li className="user-block__item">
            <Link className="user-block__avatar" to={AppRoute.MyList} style={{display: 'block'}} title={user.name}>
              <img src={user.avatarUrl} alt={`${user.name} avatar`} width={63} height={63} />
            </Link>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" to={AppRoute.Root} onClick={handleLogoutClick}>Sign out</Link>
          </li>
        </ul>
      )
      :
      (
        <div className="user-block">
          <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>
        </div>
      )
  );
}

export default UserNavigation;
