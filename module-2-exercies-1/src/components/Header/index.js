import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header>
      <div className="layout header-inner">
        <p>Kelompok 6</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
          <p
            onClick={() => {
              setIsLogin((isLogin) => !isLogin);
            }}
          >
            {isLogin ? "Hi, User!" : "Login"}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
