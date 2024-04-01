import axios from "axios";

export const signupUser = async (name: string, email: string, password: string) => {
  const response = await axios.post("/user/signup", { name, email, password });
  if (response.status !== 201) {
    throw new Error("Failed to singup");
  }
  const data = response.data;
  return data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post("/user/login", { email, password });
  if (response.status !== 201) {
    throw new Error("Failed to login");
  }
  const data = response.data;
  return data;
};

export const logoutUser = async () => {
  const response = await axios.get("/user/logout");
  if (response.status !== 200) {
    throw new Error("Failed to logout!");
  }
  const data = response.data;
  return data;
};

export const checkAuthStatus = async () => {
  const response = await axios.get("/user/auth-status");
  if (response.status !== 200) {
    throw new Error("Failed to get authentication status!");
  }
  const data = response.data;
  return data;
};

export const uploadImage = async (token:String, data:any) => {
  const response = await axios.post("/make-prediction", {
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token
    },
  data
  });
  if (response.status !== 200) {
    throw new Error("Failed to upload images!");
  }
  const responseData = response.data;
  return responseData;
};

export const getToken = async () => {
  const response = await axios.get("/get-cookie");
  if (response.status !== 200) {
    throw new Error("Failed to get cookie");
  }
  const data = response.data;
  return data;
};