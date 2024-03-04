import "./HeaderContainer.css";
import { Link } from "react-router-dom";

const HeaderContainer = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo1">
          <b className="csd-afd-online">AFD Portal</b>
        </div>
      </div>
      <div className="header-child" />
      <div className="btn">
        <div className="btn-login">
          {/* Add custom styles to the Link component */}
          <div className="sign-up">
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
