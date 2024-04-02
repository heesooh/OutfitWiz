import { Box, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signupUser } from "../helpers/api-communicators";

const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const username = formData.get("username") as string;
      const password = formData.get("password") as string;
      const email = formData.get("email") as string;
      const firstName = formData.get("firstName") as string;
      const lastName = formData.get("lastName") as string;
      try {
        toast.loading("Signing In...", {id: "signin"});
        const data = await signupUser(username, password, email, firstName, lastName);
        toast.success("Signin Success!", {id: "signin"});
        navigate("/upload");
      } catch (err) {
        console.error(err);
        toast.error("Failed to Signin!", {id: "signin"});
      }
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
          <div className="e-card playing" style={{  width: "550px", height: "630px"}}>
            <div className="wave"></div>
            <div className="wave"style={{
              width: "700px",
              height: "700px"
            }}></div>
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
                  SIGNUP
                </Typography>
                <CustomizedInput type="text" name="firstName" label="Fist Name" />
                <CustomizedInput type="text" name="lastName" label="Last Name" />
                <CustomizedInput type="email" name="email" label="Email" />
                <CustomizedInput type="text" name="username" label="Username" />
                <CustomizedInput
                  type="password"
                  name="password"
                  label="Password"
                />
                <button className="log-btn" type="submit">
                  <i className="animation"></i>Register<i className="animation"></i>
                </button>
              </Box>
            </form>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
