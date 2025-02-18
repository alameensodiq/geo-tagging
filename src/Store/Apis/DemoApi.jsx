import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const DemoApi = createAsyncThunk(
  "demoapi",
  async (
    { firstName, lastName, email, phoneNumber, businessRepCount },
    thunkAPI
  ) => {
    try {
      const response = await fetch(
        `https://geo-tagging-api.tm30.net/api/v1/admin/corporate/book-demo?firstName=${firstName}&lastName=${lastName}&email=${email}&phoneNumber=${phoneNumber}&businessRepCount=${businessRepCount}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            // Authorization: `Bearer ${accessToken}`
          }
          //   body: JSON.stringify({
          //     data: repreal
          //   })
        }
      );
      let data = await response.json();
      if (data?.status) {
        // toast.success(data.message);
      }
      if (!data?.status) {
        toast.error(data.message);
      }
      console.log(data);
      //   sessionStorage.setItem('firstName', data?.data?.user?.firstName);
      //   sessionStorage.setItem('role', data?.data?.user?.userRole);
      // sessionStorage.setItem('token', data?.data?.token );
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
