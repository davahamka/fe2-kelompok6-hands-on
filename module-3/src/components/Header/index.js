import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header>
      <div className="layout header-inner">
        <p>Kelompok 6</p>
        <p
          onClick={() => {
            setIsLogin((isLogin) => !isLogin);
          }}
        >
          {isLogin ? "Hi, User!" : "Login"}
        </p>
      </div>
    </header>
  );
};

export default Header;
