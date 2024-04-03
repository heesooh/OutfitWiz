import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import HeaderButton from "./shared/HeaderButton";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('auth_cookie='));
    if (authCookie) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    document.cookie = "auth_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  return (
    <AppBar
      sx={{ 
        bgcolor: "white", 
        position: "static", 
        boxShadow: "none",
        display: "flex", 
      }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div style={{ display: "flex", justifyContent: "right"}}>
          <HeaderButton nav="/" name="HOME" />
          {authenticated && <HeaderButton nav="/product" name="AI-IMAGE" />}
          {authenticated && (
            <button onClick={handleLogout} className="header-btn">
              LOGOUT
            </button>
          )}
          {!authenticated && <HeaderButton nav="/login" name="LOGIN" />}
          {!authenticated && <HeaderButton nav="/signup" name="SIGNUP" />}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
