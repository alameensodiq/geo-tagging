import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
      //   sessionStorage.setItem('firstName', data?.data?.user?.firstName);
      //   sessionStorage.setItem('role', data?.data?.user?.userRole);
        sessionStorage.setItem('token', data?.data?.token );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
      // console.log('Error', e.response.data);
      // thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
