import styled from "styled-components";

const LoaderStyled = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.8);

  .loader {
    width: 80px;
    height: 80px;
    display: inline-block;
    position: absolute;

    &::after,
    &::before {
      content: "";
      box-sizing: border-box;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 4px solid ${(prop) => prop.theme.colors.mainColor};
      position: absolute;
      left: 0;
      top: 0;
      animation: animloader 2s linear infinite;
    }
    &::after {
      animation-delay: 1s;
    }
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export default LoaderStyled;
