import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const EditAdminDetails = createAsyncThunk(
  "editadmindetails",
  async ({ name, value, id }, thunkAPI) => {
    console.log(process.env.REACT_APP_BASE_URL);
    const accessToken = sessionStorage.getItem("token");
    const queryParams = new URLSearchParams();
    console.log(value);
    if (id) queryParams.append("subAdminId", id);
    if (name) queryParams.append("name", name);
    if (value !== undefined) {
      queryParams.append("value", value.toString());
    }

    try {
      const response = await fetch(
        `${
          process.env.REACT_APP_BASE_URL
        }admin/edit-admin-status?${queryParams.toString()}`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
          //   body: JSON.stringify({
          //     name,
          //     description,
          //     startDate,
          //     stopDate,
          //     startTime,
          //     stopTime,
          //     duration,
          //     dailyPay,
          //     locations,
          //     weekdays
          //   })
        }
      );
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
