import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const EditSubing = createAsyncThunk(
  "editsub",
  async (
    { minRepCount, maxRepCount, maxLocationCount, amount, id },
    thunkAPI
  ) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      // Build the body object dynamically
      const body = {};
      if ((minRepCount !== undefined) | "") body.minRepCount = minRepCount;
      if ((maxRepCount !== undefined) | "") body.maxRepCount = maxRepCount;
      if ((maxLocationCount !== undefined) | "")
        body.maxLocationCount = maxLocationCount;
      if ((amount !== undefined) | null) body.amount = amount;

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/subscription/${id}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          },
          body: JSON.stringify(body)
        }
      );

      let data = await response.json();
      if (data?.status) {
        toast.success(data.message);
      }
      if (!data?.status) {
        toast.error(data.message);
      }
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed to establish connection."
      });
    }
  }
);
