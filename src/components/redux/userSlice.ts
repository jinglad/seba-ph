import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  admin: [],
  email: "",
  doctorAppointment: {},
  token: "",
  appointmentID: "",
  hospitalAppointment: {},
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
} = userSlice.actions;

export default userSlice.reducer;
