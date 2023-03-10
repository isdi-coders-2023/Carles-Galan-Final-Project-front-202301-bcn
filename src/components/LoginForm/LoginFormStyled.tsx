import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .login-form {
    &__title {
      text-align: center;
      text-transform: uppercase;
      width: 100%;
    }

    &__input {
      &__label {
        text-transform: capitalize;
      }
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 10px;
    }

    &__register-section {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    &__register-link {
      display: flex;
      flex-direction: column;
      color: #14805a;
      text-align: center;
    }
  }
`;

export default LoginFormStyled;
