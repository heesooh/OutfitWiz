import { Box, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;
    navigate("/product");
  };

  return (
    <div className="slide-top">
      <Box width={"100%"} height={"100%"}>
        <Box
          display={"flex"}
          flex={{ xs: 1, md: 0.5 }}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
          ml={"auto"}
          mt={40}
        >
          <div className="e-card playing" style={{  width: "550px", height: "450px"}}>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <form
              onSubmit={handleSubmit}
              style={{
                position: "absolute",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h4"
                  textAlign="center"
                  padding={2}
                  fontWeight={600}
                >
                  LOGIN
                </Typography>
                <CustomizedInput type="email" name="email" label="Email" />
                <CustomizedInput
                  type="password"
                  name="password"
                  label="Password"
                />
                <button className="log-btn" type="submit">
                  <i className="animation"></i>BUTTON<i className="animation"></i>
                </button>
              </Box>
            </form>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
