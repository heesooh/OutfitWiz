import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import HeaderButton from "./shared/HeaderButton";

const Header = () => {
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
          {/* <HeaderButton nav="/product" name="AI-IMAGE" /> */}
          <HeaderButton nav="/login" name="LOGIN" />
          <HeaderButton nav="/signup" name="SIGNUP" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
