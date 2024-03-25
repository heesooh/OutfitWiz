import { Box } from "@mui/material";
import pose_img from "../assets/pose.png";
import clothing_img from "../assets/clothing.png";
import defaultGeneratedImg from "../assets/mockImg.png";
import { useState } from "react";
import { getImage } from '../helpers/api-communicators';

const Product = () => {
  const [imageData, setImageData] = useState("");

  const setTestImage = () => {
    // const testImageUrl = '/Users/hanna/Desktop/IMG_7977.JPG'; 
    setImageData(defaultGeneratedImg);
  };

  const handleGenerate = async () => {
    try {
      //const data = await getImage();
      //setImageData(data);
      setTestImage();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

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
      <a
        className="home-card-subscribe-button"
        href="#"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "15%",
          margin: "0 auto",
          marginTop: "40px",
        }}
        onClick={handleGenerate}
      >
        Generate
      </a>
      <Box sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "50px",
        mb: "50px",
      }}>
        {imageData && <img src={imageData} alt="Generated AI Image" />}
      </Box>
      
    </div>
  );
};

export default Product;
