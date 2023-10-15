import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDoctorAppointment } from "../../hooks/useDoctorAppointment";
import { doctors } from "../../staticData/doctors";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import Loader from "../Reused/Loader";
import SingleAppointment from "./SingleAppointment";
import { DashboardMenus } from "../Dashboard/Dashboard";

const MyDoctorAppointments = () => {
  const { data: appointments, isLoading, isError } = useDoctorAppointment();
  const [doctor, setDoctor] = useState<any>({});

  // console.log("from my doctor appointments: ", appointments);

  return (
    <div>
      <Header />
      <div className="container mx-auto my-10 min-h-[43vh]">
        <div className="flex gap-4">
          <DashboardMenus />

          <div className="">
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <h1 className="text-3xl font-semibold text-center mt-10">
                An error occured. Please Try agein in a few minutes.
              </h1>
            ) : appointments?.doctorAppointment?.length === 0 ? (
              <h1 className="text-3xl font-semibold text-center mt-10">
                You have no appointments yet.
              </h1>
            ) : (
              <div>
                <h1 className="text-3xl font-semibold my-5">
                  Doctor Appointments
                </h1>
                <section className="grid grid-cols-2 gap-6">
                  {appointments?.doctorAppointment?.map((appointment: any) => (
                    <SingleAppointment
                      key={appointment.id}
                      appointment={appointment}
                    />
                  ))}
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyDoctorAppointments;
