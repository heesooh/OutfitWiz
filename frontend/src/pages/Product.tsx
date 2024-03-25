import { Box } from "@mui/material";
import defaultPersonImg from "../assets/pose.png";
import defaultClothingImg from "../assets/clothing.png";
import { useState, useEffect } from "react";
import defaultGeneratedImg from "../assets/mockImg.png";
import { getImage } from '../helpers/api-communicators';

const Product = () => {
  const [personImg, setPersonImg] = useState<string | null>(null);
  const [clothingImg, setClothingImg] = useState<string | null>(null);
  const [AIImage, setAIImage] = useState<File | null>(null);
  const [imageData, setImageData] = useState("");
  
  const setTestImage = () => {
    setImageData(defaultGeneratedImg);
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    e.preventDefault();
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
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
          {personImg ? (
            <img
              src={personImg}
              alt="Yourself"
              width="250"
              height="320"
            />
          ) : (
            <img
              src={defaultPersonImg}
              alt="Default pose image"
              width="250"
              height="320"
            />
          )}
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={(e) => handleImageUpload(e, setPersonImg)} />
          </form>
        </div>
        {/* photo of clothing */}
        <div
          className="home-card-container"
          style={{ backgroundColor: "rgb(248, 237, 232)" }}
        >
          <p className="home-card-title">Photo - The Clothing Item</p>
          {clothingImg ? (
            <img
              src={clothingImg}
              alt="Yourself"
              width="250"
              height="320"
            />
          ) : (
            <img
              src={defaultClothingImg}
              alt="Default pose image"
              width="250"
              height="320"
            />
          )}
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={(e) => handleImageUpload(e, setClothingImg)} />
          </form>
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
        onClick={handleSubmit}
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
