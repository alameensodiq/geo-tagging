import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const CorporateRepAnalytics = createAsyncThunk(
  "corporaterepanalytics",
  async ({ startDate2, endDate2, id }, thunkAPI) => {
    const dateObj = new Date(startDate2);

    const formattedDate = dateObj.toISOString().slice(0, 10);

    const dateObjs = new Date(endDate2);

    const formattedDated = dateObjs.toISOString().slice(0, 10);
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      let url = `${process.env.REACT_APP_BASE_URL}corporate/reps-analytics?startDate=${formattedDate}&endDate=${formattedDated}`;

      if (id) {
        url += `&id=${id}`; // Append 'id' only if it is not an empty string
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      });
      let data = await response.json();
      // if(data?.status){
      //   toast.success(data.message);
      // }
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
