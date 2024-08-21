import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const EditFreeTrial = createAsyncThunk(
  "editfreetrial",
  async (
    {
      minCountOfBusinessReps,
      numberOfBusinessReps,
      numberOfLocations,
      daysEligible
    },
    thunkAPI
  ) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");

    try {
      // Build the body object dynamically
      const body = {};
      if ((minCountOfBusinessReps !== undefined) | "")
        body.minCountOfBusinessReps = minCountOfBusinessReps;
      if ((numberOfBusinessReps !== undefined) | "")
        body.numberOfBusinessReps = numberOfBusinessReps;
      if ((numberOfLocations !== undefined) | "")
        body.numberOfLocations = numberOfLocations;
      if ((daysEligible !== undefined) | null) body.daysEligible = daysEligible;

      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}admin/edit-free-trial`,
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
      toast.success(data.message);
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: "Failed to establish connection."
      });
    }
  }
);
