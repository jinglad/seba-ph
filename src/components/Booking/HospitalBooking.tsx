import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createHospitalAppointment } from "../../requests/createHospitalAppointment";
import { getHospitalById } from "../../utils/utils";
import { setHospitalAppointment } from "../redux/userSlice";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const HospitalBooking = () => {
  const dispatch = useDispatch();
  const { hospitalAppointment, user, token } = useSelector(
    (state: any) => state.user
  );
  const [appointment, setAppointment] = useState({
    name: user?.name,
    email: user?.email,
    phone: "",
    dob: "",
    gender: "female",
    hospital: hospitalAppointment?.hospital,
    test: hospitalAppointment?.test?.name,
    date: "",
    time: "",
    age: null,
    user: user?._id,
    price: hospitalAppointment?.test?.price,
  });
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    createHospitalAppointment(token, appointment).then((res) => {
      console.log(res);
      if (res.status === 201) {
        toast.success("Appointment created successfully");
        dispatch(setHospitalAppointment({}));
        setAppointment({
          name: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          hospital: "",
          test: "",
          date: "",
          time: "",
          age: null,
          user: "",
          price: "",
        });
        setLoader(false);
        navigate("/hospital-booking/make-payment");
      } else {
        toast.error("Something went wrong. Try again later.");
        setLoader(false);
      }
    });
  };

  return (
    <div>
      <Header />
      <Box
        sx={{
          height: "38rem",
          pt: "1rem",
          background:
            "url('/images/booking_header.png') no-repeat center center/cover",
        }}
      >
        <div className="container mx-auto">
          <div className="flex justify-end items-center h-[38rem]">
            <div>
              <h1 className="text-6xl font-semibold">Book Appointment</h1>
              <div className="w-[500px] mt-7 ml-10">
                <ul className="list-disc">
                  <li>Easily schedule appointments</li>
                  <li>Find and book the right test for you</li>
                  <li>
                    Convenient online booking for medical test appointments
                  </li>
                  <li>Get the care you need, when you need it</li>
                  <li>
                    Quick and easy appointment booking for all your healthcare
                    needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <div className="container mx-auto my-10">
        <div></div>

        <div className="w-[75%] mx-auto p-8 rounded-lg bg-light-primary">
          <form onSubmit={onSubmit}>
            <h3>Your Information</h3>
            <div className="flex justify-between">
              <div className="w-full mr-5">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{ my: 2, backgroundColor: "white" }}
                  type="text"
                  value={appointment.name}
                  onChange={(e: any) =>
                    setAppointment({ ...appointment, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ my: 2, backgroundColor: "white" }}
                  type="email"
                  value={appointment.email}
                  onChange={(e: any) =>
                    setAppointment({ ...appointment, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full mr-5">
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  sx={{ my: 2, backgroundColor: "white" }}
                  type="tel"
                  value={appointment.phone}
                  onChange={(e: any) =>
                    setAppointment({ ...appointment, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <TextField
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  fullWidth
                  sx={{ my: 2, backgroundColor: "white" }}
                  type="text"
                  value={appointment.age}
                  onChange={(e: any) =>
                    setAppointment({ ...appointment, age: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div>
              <FormControl required>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  value={appointment.gender}
                  onChange={(e: any) =>
                    setAppointment({ ...appointment, gender: e.target.value })
                  }
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Select Hospital"
                variant="outlined"
                fullWidth
                sx={{ my: 2, backgroundColor: "white" }}
                value={
                  appointment.hospital
                    ? getHospitalById(appointment.hospital)?.name
                    : ""
                }
                required
              ></TextField>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Select Tests"
                variant="outlined"
                fullWidth
                sx={{
                  my: 2,
                  backgroundColor: "white",
                  textTransform: "capitalize",
                }}
                value={appointment.test}
                required
              ></TextField>
            </div>
            <div className="flex justify-between">
              <div className="w-full mr-2">
                <TextField
                  id="outlined-basic"
                  label="Select Date"
                  variant="outlined"
                  fullWidth
                  sx={{ my: 2, backgroundColor: "white" }}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={appointment?.date}
                  onChange={(e: any) =>
                    setAppointment({ ...appointment, date: e.target.value })
                  }
                  required
                />
              </div>
              <div className="w-full">
                <TextField
                  id="time"
                  label="time"
                  type="time"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  sx={{ my: 2, backgroundColor: "white" }}
                  value={appointment?.time}
                  onChange={(e: any) =>
                    setAppointment({ ...appointment, time: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg w-full active:translate-y-1 mt-5"
              type="submit"
              disabled={loader}
              style={{
                opacity: loader ? 0.5 : 1,
                cursor: loader ? "not-allowed" : "pointer",
              }}
            >
              <span>
                {loader ? "Loading.." : "Book Appointment & Make Payment"}
                {/* Book Appointment & Make Payment */}
              </span>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HospitalBooking;
