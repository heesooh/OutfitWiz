import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "animate.css";
import PriceCard from "../components/shared/PriceCard/PriceCard";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/login");
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          // entry.target.classList.remove("show");
        }
      });
    });

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

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));

    const hiddenYElements = document.querySelectorAll(".top-down-hidden");
    hiddenYElements.forEach((element) => topDownObserver.observe(element));

    // Cleanup function
    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

  return (
    <div>
      <div className="home-top">
        <div className="home-top-text">
          <div className="home-top-text-title">
            <div
              className="animate__animated animate__fadeInLeft"
              style={{ color: "black" }}
            >
              Outfit
            </div>
            <div
              className="animate__animated animate__fadeInRight"
              style={{ color: "white" }}
            >
              Wiz
            </div>
          </div>
          <span
            className="animate__animated animate__fadeInUp"
            style={{ fontSize: "30px", fontWeight: "600" }}
          >
            AI Powered Virtual Wardrobe
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
        <div className="home-top-background">
          <img
            src="home/background.webp"
            alt="Home Background"
            className="home-top-background-image"
          />
        </div>
      </div>
      <div className="home-center">
        <Box
          sx={{
            width: "100%",
            minHeight: "calc(100vh - 100px)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              marginBottom: "50px",
            }}
            className="top-down-hidden"
          >
            <span
              style={{
                fontSize: "50px",
                fontWeight: "700",
                marginLeft: "50px",
              }}
            >
              IMPROVE ONLINE SHOPPING
            </span>
          </div>
          <Box
            sx={{
              width: "100%",
              minHeight: "calc(100vh - 200px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { md: "row", xs: "column", sm: "column" },
              gap: 15,
            }}
          >
            <div
              className="home-center-image hidden"
              style={{ transitionDelay: "300ms" }}
            >
              <img src="home/element2.png" alt="Online Shopping" />
            </div>
            <div
              className="home-center-text hidden"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="home-center-text-inner">
                <div className="home-center-text-inner-content">
                  <p>Every day, millions of users browse clothing online.</p>
                  <p>But uncertainty lingers:</p>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Ordering</span> – Can
                      be daunting.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Shipping</span> –
                      Time-consuming.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Try-On</span> –
                      Awaiting delivery.
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>Return</span> – A
                      hassle.
                    </li>
                  </ul>
                  <p>Time and money often go to waste.</p>
                </div>
              </div>
            </div>
          </Box>
        </Box>
        {/* <div className="home-divider"/> */}
        <Box
          sx={{
            width: "100%",
            minHeight: "calc(100vh - 100px)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              marginBottom: "50px",
            }}
            className="top-down-hidden"
          >
            <span
              style={{
                fontSize: "50px",
                fontWeight: "700",
                marginLeft: "50px",
              }}
            >
              VIRTUAL TRY-ON BEFORE PURCHASE
            </span>
          </div>
          <Box
            sx={{
              width: "100%",
              minHeight: "calc(100vh - 200px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: { md: "row", xs: "column", sm: "column" },
              gap: 15,
            }}
          >
            <div
              className="home-center-text hidden"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="home-center-text-inner">
                <div className="home-center-text-inner-content">
                  <p>Introducing a solution:</p>
                  <p>Virtual Try-On.</p>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      Using{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Your Personal Image
                      </span>
                      .
                    </li>
                    <li>
                      With{" "}
                      <span style={{ fontWeight: "bold" }}>
                        Any Online Clothing Image
                      </span>
                      .
                    </li>
                  </ul>
                  <p>Visualize yourself in any outfit.</p>
                  <ul style={{ listStyleType: "none" }}>
                    <li>Boost Confidence.</li>
                    <li>Make Informed Decisions.</li>
                    <li>Enhance Your Shopping Experience.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="home-center-image hidden"
              style={{ transitionDelay: "100ms" }}
            >
              <img src="home/element1.png" alt="Online Shopping" />
            </div>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            minHeight: "calc(100vh - 300px)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "150px",
              marginBottom: "50px",
              display: "flex",
              alignItems: "end",
              justifyContent: "left",
            }}
            className="top-down-hidden"
          >
            <span
              style={{
                fontSize: "50px",
                fontWeight: "700",
                marginLeft: "50px",
              }}
            >
              PRICING MODELS:
            </span>
          </div>
          <div className="home-price-card">
            <Box
              sx={{
                width: "100%",
                minHeight: "calc(100vh - 450px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: { md: "row", xs: "column", sm: "column" },
                gap: 15,
              }}
            >
              <div className="home-price-card top-down-hidden">
                <PriceCard
                  pricing="0"
                  title="Free Plan"
                  info="Begin Your Free Virtual Wardrobe Now!"
                  feature1="No cost charged"
                  feature2="Unlimited image generation"
                  feature3="Try on any clothing"
                  buttonText="Try Now"
                />
              </div>
              <div className="home-price-card top-down-hidden">
                <PriceCard
                  pricing="4.99"
                  title="Premium Plan"
                  info="Best Valued Plan"
                  feature1="Faster Response Time"
                  feature2="Improved A.I. Model"
                  feature3="Chrome Extension"
                  buttonText="Try Now"
                />
              </div>
              <div className="home-price-card top-down-hidden">
                <PriceCard
                  pricing="159.99"
                  title="Business Plan"
                  info="Best Plan For Business Owners"
                  feature1="Batch Image Process"
                  feature2="Highest Quality Image"
                  feature3="Easy Integration to Website"
                  buttonText="Try Now"
                />
              </div>
            </Box>
          </div>
        </Box>
      </div>
      <div className="home-footer" />
    </div>
  );
};

export default Home;
