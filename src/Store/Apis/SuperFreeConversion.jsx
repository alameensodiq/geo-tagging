import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const SuperFreeConversion = createAsyncThunk(
  "freeconversion",
  async (
    {endDateOne, startDateOne},
    thunkAPI
  ) => {

    const dateObj = new Date(startDateOne);

    const formattedDate = dateObj.toISOString().slice(0, 10);

    const dateObjs = new Date(endDateOne);

    const formattedDated = dateObjs.toISOString().slice(0, 10);
    console.log(process.env.REACT_APP_BASE_URL);;
    const accessToken = sessionStorage.getItem("token");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/dashboard/freeTrial-conversion-filter?startDate=${formattedDate}&endDate=${formattedDated}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
        }
      );
      let data = await response.json();
    //   if(data?.status){
    //     toast.success(data.message);
    //   }
      if(!data?.status){
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
