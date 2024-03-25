import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderButtonProps {
  nav: string;
  name: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ nav, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nav);
  };

  return (
    <button
      className="header-btn"
      type="button"
      onClick={handleClick}
      style={{ marginRight: "15px" }}
    >
      {name}
    </button>
  );
};

export default HeaderButton;
