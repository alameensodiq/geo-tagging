import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const SuperCorporate = createAsyncThunk(
  "supercorporate",
  async ({ searcher, currentPage, statuses }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      // Start with the base URL and common parameters
      let url = `${process.env.REACT_APP_BASE_URL}admin/corporate?search=${searcher}&page=${currentPage}`;

      // Conditionally add the isActive parameter
      if (statuses !== undefined) {
        url += `&isActive=${statuses}`;
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
