import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faHouseChimney,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderStyled from "./HeaderStyles";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <div className="header__logo">
        <Logo className="header__ere" aria-label="logo" />
      </div>
      <div className="header__navigation">
        <FontAwesomeIcon
          icon={faList}
          className="header__to-my-list"
          aria-label="my-list"
        />
        <FontAwesomeIcon
          icon={faArrowRightToBracket}
          className="header__log-in"
          aria-label="login"
        />
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="header__log-out"
          aria-label="logout"
        />
        <FontAwesomeIcon
          icon={faHouseChimney}
          className="header__to-home"
          aria-label="home"
        />
      </div>
    </HeaderStyled>
  );
};

export default Header;
