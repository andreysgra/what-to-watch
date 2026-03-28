import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {FormEvent, useRef, useState} from 'react';
import {ErrorMessage, VALID_EMAIL_PATTERN, VALID_PASSWORD_PATTERN} from '../../const';
import {loginUser} from '../../store/user/api-actions';
import classNames from 'classnames';

function LoginForm() {
  const dispatch = useAppDispatch();

  const [isValueValid, setIsValueValid] = useState({email: true, password: true});
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!emailRef.current?.value.match(VALID_EMAIL_PATTERN)) {
      setErrorMessage(ErrorMessage.Email);
      setIsValueValid({email: false, password: true});

      return;
    }

    if (!passwordRef.current?.value.match(VALID_PASSWORD_PATTERN)) {
      setErrorMessage(ErrorMessage.Password);
      setIsValueValid({email: true, password: false});

      return;
    }

    dispatch(loginUser(
      {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
    ));
  };

  const handleFormChange = ()=> {
    setIsValueValid({email: true, password: true});
  };

  return (
    <form
      className="sign-in__form"
      method="post"
      onSubmit={handleFormSubmit}
      onChange={handleFormChange}
      noValidate
    >
      <div className="sign-in__message">
        <p>{isValueValid.email && isValueValid.password ? '' : errorMessage}</p>
      </div>
      <div className="sign-in__fields">
        <div className={classNames('sign-in__field', {'sign-in__field--error': !isValueValid.email})}>
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
        <div className={classNames('sign-in__field', {'sign-in__field--error': !isValueValid.password})}>
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
