import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const SuperSubCounts = createAsyncThunk(
  "supersubcount",
  async ({  year }, thunkAPI) => {

    console.log("year:", year); // Debugging

    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/dashboard/subscriptions-counts-filter?year=${year}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
        //   body: JSON.stringify({
        //     month: monthNumber,
        //     year: year
        //   })
        }
      );
      const data = await response.json();
      if(data?.status){
        toast.success(data.message);
      }
      if(!data?.status){
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
