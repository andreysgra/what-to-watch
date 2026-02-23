import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {FormEvent, useRef} from 'react';
import {VALID_PASSWORD_REGEXP} from '../../const';
import {loginUser} from '../../store/api-actions';

function LoginForm() {
  const dispatch = useAppDispatch();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!passwordRef.current?.value.match(VALID_PASSWORD_REGEXP)) {
      return;
    }

    if (emailRef.current !== null) {
      dispatch(loginUser(
        {
          email: emailRef.current.value,
          password: passwordRef.current.value
        }
      ));
    }
  };

  return (
    <form action="#" className="sign-in__form" method="post" onSubmit={handleFormSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            required
            ref={emailRef}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-email"
          >
            Email address
          </label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            required
            ref={passwordRef}
          />
          <label
            className="sign-in__label visually-hidden"
            htmlFor="user-password"
          >
            Password
          </label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
