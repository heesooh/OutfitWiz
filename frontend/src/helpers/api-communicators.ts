import axios from "axios";

export const signupUser = async (username: string, password: string, email: string, first_name: string, last_name: string) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);
    formData.append('first_name', first_name);
    formData.append('last_name', last_name);
    const response = await axios.post("http://localhost:8000/api/signup", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to Signup");
    }
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error);
  }
};

export const loginUser = async (username: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    const response = await axios.post("http://localhost:8000/api/login", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to Login");
    }
    return response.data;
  } catch (error) {
    console.error('Login Error:', error);
  }
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

export const uploadImage = async (data:any) => {
  try {
    const formData = new FormData();
    formData.append('photo_person_name', data.photo_person_name);
    formData.append('photo_clothing_name', data.photo_clothing_name);
    formData.append('photo_person', data.photo_person);
    formData.append('photo_clothing', data.photo_clothing);
    const response = await axios.post("http://localhost:8000/api/make-prediction", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'X-CSRF-Token': "xxx"
      },
    });
    if (response.status !== 200) {
      throw new Error("Failed to Signup");
    }
    return response.data;
  } catch (error) {
    console.error('Signup Error:', error);
  }
};

// TODO: Implement backend Token
// export const getToken = async () => {
//   const response = await axios.get("/get-cookie");
//   if (response.status !== 200) {
//     throw new Error("Failed to get cookie");
//   }
//   axios.defaults.headers.post['X-CSRF-Token'] = response.data.csrfToken;
// };