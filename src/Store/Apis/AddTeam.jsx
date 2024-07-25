import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const AddTeam = createAsyncThunk(
  "addteam",
  async ({ name,
    rcNumber,
    address,
    phone,
    email,
    avatar,
    permissions }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}team`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          name,
          rcNumber,
          address,
          phone,
          email,
          avatar,
          permissions
        })
      });
      let data = await response.json();
      toast.success(data.message);
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
