import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export const CorporateSignUser = createAsyncThunk(
  "login",
  async ({ email, password }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}auth/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );
      let data = await response.json();
      toast.success(data.message);
      console.log(data);
      sessionStorage.setItem("token", data?.data?.token);

      // Decode the token using jwt-decode
      const token = data?.data?.token;
      const decodedToken = jwtDecode(token);
      sessionStorage.setItem("role", decodedToken?.role);
      console.log(decodedToken);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
    }
  }
);
