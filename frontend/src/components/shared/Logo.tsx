import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to={"/"} style={{
            gap: "15px",
            display: "flex",
            marginRight: 'auto',
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none"
        }}>
            <img
                src="cloth_icon.png"
                alt="cloth_icon"
                width={"30px"}
                height={"30px"}
            />
            <Typography
                sx={{
                    display: { md: "block", sm: "none", xs: "none" },
                    mr: "auto",
                    fontWeight: "700",
                    textShadow: "2px 2px 20px #FFF",
                }}
            >
                <span style={{ fontSize: "20px" }}>OutfitWiz</span>
            </Typography>

        </Link>
    );
};

export default Logo;