import Button from "../Button/Button";

const Form = () => {
  return (
    <form className="form">
      <h1>log-in</h1>
      <label className="form__label" htmlFor="username">
        username
      </label>
      <input
        className="form__input"
        placeholder="introduce username"
        name="username"
        id="username"
        type="username"
        required
      ></input>

      <label className="form__label" htmlFor="password">
        password
      </label>
      <input
        className="form__input"
        placeholder="introduce password"
        name="password"
        id="password"
        type="password"
        required
      ></input>

      <Button text="log-in" />
    </form>
  );
};

export default Form;
