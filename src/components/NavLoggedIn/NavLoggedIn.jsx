import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import loggout from "../../assets/imgs_svg/logout-white.svg";
import logoutBlack from "../../assets/imgs_svg/loggout.svg";

function NavLoggedIn({ handleSignOut, mobileMenuOpen }) {
  const { currentUser } = useContext(CurrentUserContext);
  const location = useLocation();
  const onSavedPageLocation = location.pathname === "/saved-news";

  const onSignoutClick = (e) => {
    e.preventDefault();
    handleSignOut();
  };

  return (
    <ul className="header__navi-list">
      <li className="header__navi-list-items">
        <Link
          to="/"
          className={`header__navi-link ${
            location.pathname === "/" ? "active" : ""
          } ${onSavedPageLocation ? "header__navi-link-black" : ""}`}
        >
          Home
        </Link>
      </li>

      <li className="header__navi-list-items">
        <Link
          to="/saved-news"
          className={`header__navi-link ${
            location.pathname === "/saved-news" ? "active" : ""
          } ${onSavedPageLocation ? "header__navi-link-black" : ""}`}
        >
          Saved articles
        </Link>
      </li>

      <li className="header__navi-list-items">
        <div className="header__navi-signout">
          <button
            onClick={onSignoutClick}
            className={`header__navi-loggout-btn ${
              onSavedPageLocation ? "header__navi-loggout-btn-black" : ""
            }`}
          >
            <p className="header__navi-name">{currentUser?.username}</p>
            <img
              className="header__navi-loggout-btn-img-black"
              src={onSavedPageLocation ? logoutBlack : loggout}
              alt="Log out"
            />
          </button>
        </div>
      </li>
    </ul>
  );
}

export default NavLoggedIn;
