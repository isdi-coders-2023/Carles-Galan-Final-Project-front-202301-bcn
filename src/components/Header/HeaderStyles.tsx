import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  padding: ${(props) => props.theme.padding};
  border-radius: ${(props) => props.theme.borderRadius};

  .header {
    &__navigation {
      padding-left: 10px;
      display: flex;
      justify-content: flex-end;
      justify-content: space-between;
      width: 100%;
    }

    &__to-my-list {
      width: 60px;
      height: 56px;
      padding-left: 10px;
    }

    &__log-in {
      width: 60px;
      height: 56px;
      padding-left: 10px;
    }

    &__log-out {
      width: 60px;
      height: 56px;
      padding-left: 10px;
    }

    &__to-home {
      width: 60px;
      height: 56px;
      padding-left: 10px;
    }
  }
`;

export default HeaderStyled;
