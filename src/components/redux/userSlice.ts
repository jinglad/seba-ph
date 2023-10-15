import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../Admin/Users";

const initialState = {
  user: {},
  users: [] as any,
  admin: [],
  email: "",
  doctorAppointment: {},
  token: "",
  appointmentID: "",
  hospitalAppointment: {},
  profileData: {},
};

const userSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setDoctorAppointment: (state, action) => {
      state.doctorAppointment = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAppointmentId: (state, action) => {
      state.appointmentID = action.payload;
    },
    setHospitalAppointment: (state, action) => {
      state.hospitalAppointment = action.payload;
    },
    setProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    makeAdmin: (state, action) => {
      state.users = state?.users?.map((user: any) => {
        if (user._id === action.payload?.id) {
          return { ...user, role: "admin" };
        } else return user;
      });
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const {
  setUser,
  setAdmin,
  setEmail,
  setDoctorAppointment,
  setToken,
  setAppointmentId,
  setHospitalAppointment,
  setProfileData,
  makeAdmin,
  setUsers,
} = userSlice.actions;

export default userSlice.reducer;
