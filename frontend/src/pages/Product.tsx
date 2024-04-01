import { Box } from "@mui/material";
import defaultPersonImg from "../assets/pose.png";
import defaultClothingImg from "../assets/clothing.png";
import { useState, useEffect, useRef } from "react";
import defaultGeneratedImg from "../assets/mockImg.png";
import { getToken, uploadImage } from "../helpers/api-communicators";

const Product = () => {
  const [personImg, setPersonImg] = useState<string | null>(null);
  const [clothingImg, setClothingImg] = useState<string | null>(null);
  const [imageData, setImageData] = useState(defaultGeneratedImg);
  const hiddenPhotoInput = useRef<HTMLInputElement>(null);
  const hiddenClothInput = useRef<HTMLInputElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (!isModalOpen) {
          handleSubmit();
    }
    setIsModalOpen(!isModalOpen);
  };

  const handlePhotoUploadClick = () => {
    hiddenPhotoInput.current?.click();
  };

  const handleClothUploadClick = () => {
    hiddenClothInput.current?.click();
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
      const data = await getToken();
      const token = data.csrfToken;
      console.log("token", token);
      const body = {
        photo_person_name: 'person.png',
        photo_clothing_name: 'clothing.png',
        photo_person: personImg,
        photo_clothing: clothingImg
      }
      const reponseImage = await uploadImage(token, body);
      console.log(reponseImage);
      setImageData(reponseImage.photo_prediction);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    const topDownObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("top-down-show");
        } else {
          // entry.target.classList.remove("top-down-show");
        }
      });
    });

    const hiddenYElements = document.querySelectorAll(".top-down-hidden");
    hiddenYElements.forEach((element) => topDownObserver.observe(element));
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

  const ModalContent = () => (
    <div
      className="home-card-container"
      style={{
        backgroundColor: "rgb(169, 169, 169)",
        border: "5px solid rgb(105, 105, 105)",
      }}
    >
      <p className="home-card-title">Generated Image</p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={`data:image/jpeg;base64,${imageData}`} alt="Generated AI Image" width="250" height="320" />
      <button
        className="log-btn"
        type="submit"
        onClick={toggleModal}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "15%",
          marginBottom: "40px",
          backgroundColor: "black",
        }}
      >
        <i className="animation"></i>Close<i className="animation"></i>
      </button>
     </div>
    </div>
  );

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
          className="home-card-container top-down-hidden"
          style={{
            backgroundColor: "rgb(235, 241, 255)",
            border: "5px solid rgb(203, 190, 252)",
          }}
        >
          <p className="home-card-title">Photo - Yourself</p>
          {personImg ? (
            <img src={personImg} alt="Yourself" width="250" height="320" />
          ) : (
            <img
              src={defaultPersonImg}
              alt="Default pose image"
              width="250"
              height="320"
            />
          )}
          <button
            className="log-btn"
            type="submit"
            onClick={handleClothUploadClick}
          >
            <i className="animation"></i>Upload<i className="animation"></i>
          </button>
          <form>
            <input
              type="file"
              ref={hiddenClothInput}
              style={{ display: "none" }}
              onChange={(e) => handleImageUpload(e, setPersonImg)}
            />
          </form>
        </div>
        {/* photo of clothing */}

        <div
          className="home-card-container top-down-hidden"
          style={{
            backgroundColor: "rgb(203, 190, 252)",
            border: "5px solid rgb(235, 241, 255)",
          }}
        >
          <p className="home-card-title">Photo - The Clothing Item</p>
          {clothingImg ? (
            <img src={clothingImg} alt="Yourself" width="250" height="320" />
          ) : (
            <img
              src={defaultClothingImg}
              alt="Default pose image"
              width="250"
              height="320"
            />
          )}
          <button
            className="log-btn"
            type="submit"
            onClick={handlePhotoUploadClick}
          >
            <i className="animation"></i>Upload<i className="animation"></i>
          </button>
          <form>
            <input
              type="file"
              ref={hiddenPhotoInput}
              style={{ display: "none" }}
              onChange={(e) => handleImageUpload(e, setClothingImg)}
            />
          </form>
        </div>
      </Box>
      <button
        className="log-btn"
        type="submit"
        onClick={toggleModal}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "15%",
          margin: "0 auto",
          marginTop: "40px",
        }}
      >
        <i className="animation"></i>Generate<i className="animation"></i>
      </button>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "50px",
          mb: "50px",
        }}
      ></Box>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <ModalContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
