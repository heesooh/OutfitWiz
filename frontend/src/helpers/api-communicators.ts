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

export const uploadImage = async (image1: object, image2: object) => {
  const response = await axios.post("/image/upload", {image1, image2});
  if (response.status !== 200) {
    throw new Error("Failed to upload images!");
  }
  const data = response.data;
  return data;
};

export const getImage = async () => {
  const response = await axios.get("/image/get");
  if (response.status !== 200) {
    throw new Error("Failed to generate AI Image!");
  }
  const data = response.data;
  return data;
};