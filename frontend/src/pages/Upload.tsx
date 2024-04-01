import { Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import exampleImage from "../assets/pose.png";
import Loading from "../components/shared/Loading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Upload = () => {
  const navigate = useNavigate();
  const [defaultImage, setDefaultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const hiddenPhotoInput = useRef<HTMLInputElement>(null);

  const handlePhotoUploadClick = () => {
    hiddenPhotoInput.current?.click();
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    e.preventDefault();
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const topDownObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("top-down-show");
        }
      });
    });
    const hiddenYElements = document.querySelectorAll(".top-down-hidden");
    hiddenYElements.forEach((element) => topDownObserver.observe(element));
  }, []);


  const handleSubmit = async () => {
    try {
      // Upload image
      if (defaultImage === null) {
        toast.error("Please Upload Your Image!", { id: "upload" });
      } else {
        toast.loading("Uploading...", { id: "upload" });
        setLoading(true);
        console.log("Uploading Image...");
        setTimeout(() => {
          toast.success("Upload Success!", { id: "upload" });
          setLoading(false);
          navigate("/product");
        }, 2000);
      }
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
      {loading ? <Loading /> : <></>}
      <span
        style={{
          fontSize: "50px",
          fontWeight: "700",
          display: "block",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Upload Image of Yourself
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
        <div
          className="home-card-container top-down-hidden"
          style={{ backgroundColor: "rgb(248, 237, 232)" }}
        >
          <p className="home-card-title">Photo - Yourself</p>
          {defaultImage ? (
            <img src={defaultImage} alt="Yourself" width="250" height="320" />
          ) : (
            <img
              src={exampleImage}
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
              onChange={(e) => handleImageUpload(e, setDefaultImage)}
            />
          </form>
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "15%",
          margin: "0 auto",
          marginTop: "40px",
        }}
      >
        <button className="log-btn" type="submit" onClick={handleSubmit}>
          <i className="animation"></i>NEXT<i className="animation"></i>
        </button>
      </div>
    </div>
  );
};

export default Upload;
