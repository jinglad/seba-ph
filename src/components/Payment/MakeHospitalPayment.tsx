import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecentDoctorAppointment } from "../../hooks/useRecentDoctorAppointment";
import { useRecentHospitalAppointment } from "../../hooks/useRecentHospitalAppointment";
import { doctors } from "../../staticData/doctors";
import { getHospitalById } from "../../utils/utils";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const MakeHospitalPayment = () => {
  const navigate = useNavigate();

  const {
    data: appointment,
    isLoading,
    isError,
  } = useRecentHospitalAppointment();

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Grid
          container
          spacing={4}
          sx={{
            my: 10,
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              boxShadow: 1,
            }}
          >
            <div className="pb-5">
              <h1>
                <strong>Name:</strong> {appointment?.fullName}
              </h1>
              <h1>
                <strong>Phone:</strong> {appointment?.phone}
              </h1>
              <h1>
                <strong>Email:</strong> {appointment?.email}
              </h1>
              <h1>
                <strong>Gender:</strong> {appointment?.gender}
              </h1>
              <h1>
                <strong>Age:</strong> {appointment?.age}
              </h1>
              <h1>
                <strong>Doctor:</strong>{" "}
                {getHospitalById(appointment?.hospital)?.name}
              </h1>
              <h1>
                <strong>Test:</strong> {appointment?.test}
              </h1>
              <h1>
                <strong>Date:</strong>{" "}
                {new Date(appointment?.date).toDateString()}
              </h1>
              <h1>
                <strong>Time:</strong> {appointment?.time}
              </h1>
              <h1>
                <strong>Status: </strong> {appointment?.status}
              </h1>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              boxShadow: 1,
            }}
          >
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-2xl text-center">
                Make Payment fee <strong>{appointment?.price} TK</strong> for{" "}
                <strong>{getHospitalById(appointment?.hospital)?.name}</strong>{" "}
                appointment
              </h1>
              <div
                className="mt-2 flex justify-center"
                onClick={() => {
                  navigate("/payment/hospital");
                }}
              >
                <button className="rounded-lg text-3xl font-semibold bg-yellow-500 px-3 py-2 active:translate-y-1">
                  Make Payment
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default MakeHospitalPayment;
