import { useState } from "react";
import useUserApi from "../../hooks/useUserApi";
import { LoginCredentials } from "../../types";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const { loginUser } = useUserApi();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginCredentials: LoginCredentials = {
      username,
      password,
    };

    loginUser(loginCredentials);
  };

  return (
    <LoginFormStyled className="form" onSubmit={handleOnSubmit}>
      <h1 className="login-form__title">log-in</h1>
      <label className="login-form__label" htmlFor="username">
        username
      </label>
      <input
        onChange={handleChangeUsername}
        value={username}
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
        onChange={handleChangePassword}
        value={password}
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

export default LoginForm;
