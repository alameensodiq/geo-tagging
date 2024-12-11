import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const CompletePayment = createAsyncThunk(
  "completepayment",
  async ({ ref }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");
    const projectId =
      sessionStorage.getItem("projectId") ||
      sessionStorage.getItem("activeprojectId") ||
      sessionStorage.getItem("addactivebusinesses");
    const repdetails = sessionStorage.getItem("repdetails");
    const repdetailsReal = JSON.parse(repdetails);

    // Wrap the details in the expected format
    const requestBody = {
      data: repdetailsReal // Assuming repdetailsReal is an array of user/location objects
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}user/project/verify?transactionId=${ref}&projectId=${projectId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
          // // Convert the requestBody to JSON string
          // body: JSON.stringify(requestBody)
        }
      );

      let data = await response.json();
      if (data?.status) {
        // toast.success(data.message);
      } else {
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
