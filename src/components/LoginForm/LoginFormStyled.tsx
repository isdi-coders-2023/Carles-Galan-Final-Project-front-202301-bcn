import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .login-form {
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
  }
`;

export default LoginFormStyled;
