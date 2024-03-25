import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "animate.css";

const Home = () => {
  const navigate = useNavigate();
  const handleGetStarted = async () => {
    navigate("/product");
  };

  return (
    <div>
      <div className="animate__animated animate__backInDown home-top">
        <div className="home-top-text">
          <span style={{ fontSize: "100px", fontWeight: "700" }}>
            OutfitWiz
          </span>
          <span style={{ fontSize: "30px", fontWeight: "600" }}>
            AI powered virtual wardrobe!
          </span>
          <div className="home-top-btn-scene" style={{ marginTop: "50px" }}>
            <div className="home-top-btn-cube">
              <span
                className="home-top-btn-side top"
                onClick={handleGetStarted}
              >
                Let's Start
              </span>
              <span className="home-top-btn-side front">Hover Here</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-center">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: 5,
            my: 10,
            ml: "50px",
          }}
        >
          <span style={{ fontSize: "50px", fontWeight: "700" }}>
            Pricing Models:
          </span>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 20,
            my: 10,
          }}
        >
          {/* Free Plan */}
          <div className="home-card-container">
            <p className="home-card-title">Free Plan</p>
            <p className="home-card-price">
              $0.00<span>/month</span>
            </p>
            <p className="home-card-description">
              Access to limited number of AI image generation.
            </p>
            <b className="home-card-offer">Start your free fitting today!</b>
            <a className="home-card-subscribe-button" href="#">
              Try Now
            </a>
            <div className="home-card-ribbon-wrap">
              <div className="home-card-ribbon">Beginner's Choice</div>
            </div>
          </div>
          {/* Premium Plan */}
          <div className="home-card-container">
            <p className="home-card-title">Premium Plan</p>
            <p className="home-card-price">
              $4.99<span>/month</span>
            </p>
            <p className="home-card-description">
              Best value plan. Access to unlimited virtual fitting. Faster response speed and
              flexible customization!
            </p>
            <b className="home-card-offer">
              Act fast! Offer ends on October 20th, 2024.
            </b>
            <a className="home-card-subscribe-button" href="#">
              Upgrade
            </a>
            <div className="home-card-ribbon-wrap">
              <div className="home-card-ribbon">Best Value</div>
            </div>
          </div>
          {/* Business Plan */}
          <div className="home-card-container">
            <p className="home-card-title">Business Plan</p>
            <p className="home-card-price">
              $159.99<span>/month</span>
            </p>
            <p className="home-card-description">
              Business oriented. Unlimited virtual fitting and additional features!
            </p>
            <b className="home-card-offer">
              Act fast! Offer ends on October 20th, 2024.
            </b>
            <a className="home-card-subscribe-button" href="#">
              Upgrade
            </a>
            <div className="home-card-ribbon-wrap">
              <div className="home-card-ribbon">Best Performance</div>
            </div>
          </div>
        </Box>
      </div>
      <div className="home-bottom"></div>
      <div className="home-profile"></div>
    </div>
  );
};

export default Home;
