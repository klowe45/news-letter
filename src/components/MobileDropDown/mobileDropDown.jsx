import "./MobileDropDown.css";
import { useNavigate, useLocation } from "react-router-dom";

function MobileDropDown({
  handleSigninFromMenu,
  isLoggedIn,
  handleSignOut,
  closeModal,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const onSavedPage = location.pathname === "/saved-news";

  const handleTogglePage = () => {
    const destination = onSavedPage ? "/" : "/saved-news";
    navigate(destination);
    setTimeout(() => {
      document.querySelector(".mobile__overlay")?.click();
    }, 0);
  };

  const homeClick = () => {
    navigate("/");
  };

  return (
    <div className="mobile__drop_down">
      <button className="mobile__drop_down-home" onClick={handleTogglePage}>
        {onSavedPage ? "Home" : "Saved News"}
      </button>

      {isLoggedIn ? (
        <>
          <button className="mobile__drop_down-btn" onClick={handleSignOut}>
            Sign out
          </button>
        </>
      ) : (
        <button
          className="mobile__drop_down-btn"
          onClick={handleSigninFromMenu}
        >
          Sign In
        </button>
      )}
    </div>
  );
}

export default MobileDropDown;
