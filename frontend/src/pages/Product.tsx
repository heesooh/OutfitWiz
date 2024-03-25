import { Box } from "@mui/material";
import pose_img from "../assets/pose.png";
import clothing_img from "../assets/clothing.png";

const Product = () => {
  // const handleSubmit = async () => {

  // };

  return (
    <div className="chat-flipIn">
      <span
        style={{
          fontSize: "50px",
          fontWeight: "700",
          display: "block",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Upload Two Photos
      </span>
      <a
        className="home-card-subscribe-button"
        href="#"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "15%",
          margin: "0 auto",
          marginTop: "40px"
        }}
      >
        Generate
      </a>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { md: "row", xs: "column", sm: "column" },
          gap: 20,
          my: 5,
        }}
      >
        {/* photo of yourself */}
        <div
          className="home-card-container"
          style={{ backgroundColor: "rgb(248, 237, 232)" }}
        >
          <p className="home-card-title">Photo - Yourself</p>
          <img
            src={pose_img}
            alt="defalt pose image"
            width="250"
            height="320"
          />
          <a
            className="home-card-subscribe-button"
            href="#"
            style={{ fontSize: "27px", width: "50%" }}
          >
            Upload
          </a>
        </div>
        {/* photo of clothing */}
        <div
          className="home-card-container"
          style={{ backgroundColor: "rgb(248, 237, 232)" }}
        >
          <p className="home-card-title">Photo - The Clothing Item</p>
          <img
            src={clothing_img}
            alt="defalt pose image"
            width="250"
            height="320"
          />
          <a
            className="home-card-subscribe-button"
            href="#"
            style={{ fontSize: "27px", width: "50%" }}
          >
            Upload
          </a>
        </div>
      </Box>
    </div>
  );
};

export default Product;
