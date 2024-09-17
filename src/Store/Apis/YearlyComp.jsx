import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const YearlyComp = createAsyncThunk(
  "yearlycomp",
  async ({ year }, thunkAPI) => {
    console.log("year:", year); // Debugging

    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}corporate/year-filter?year=${year}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      const data = await response.json();
      //   if(data?.status){
      //     toast.success(data.message);
      //   }
      if (!data?.status) {
        toast.error(data.message);
      }
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed! To establish connection."
      });
    }
  }
);
