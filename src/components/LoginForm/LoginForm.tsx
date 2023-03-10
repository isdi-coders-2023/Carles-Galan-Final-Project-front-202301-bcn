import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const Form = () => {
  return (
    <LoginFormStyled className="form">
      <h1 className="login-form__title">log-in</h1>
      <label className="login-form__label" htmlFor="username">
        username
      </label>
      <input
        className="login-form__input"
        placeholder="introduce username"
        name="username"
        id="username"
        type="username"
        required
      ></input>

      <label className="login-form__label" htmlFor="password">
        password
      </label>
      <input
        className="login-form__input"
        placeholder="introduce password"
        name="password"
        id="password"
        type="password"
        required
      ></input>

      <Button text="log-in" />
      <div className="login-form__register-section">
        <span className="login-form__register-text">
          already have an account?
        </span>
        <a
          className="login-form__register-link"
          href="register"
          aria-label="register link"
        >
          register here
        </a>
      </div>
    </LoginFormStyled>
  );
};

export default Form;
