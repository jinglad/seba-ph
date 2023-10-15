import { Container } from "@mui/material";
import React from "react";
import { useHospitalAppointment } from "../../hooks/useHospitalAppointment";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import Loader from "../Reused/Loader";
import SingleAppointment from "./SingleAppointment";
import { DashboardMenus } from "../Dashboard/Dashboard";

const MyHospitalAppointment = () => {
  const { data: appointments, isLoading, isError } = useHospitalAppointment();

  return (
    <div>
      <Header />
      <div className="container mx-auto my-10 min-h-[43vh]">
        <div className="flex gap-4">
          <DashboardMenus />

          <div>
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <h1 className="text-3xl font-semibold text-center mt-10">
                An error occured. Please Try agein in a few minutes.
              </h1>
            ) : appointments?.hospitalAppointment?.length === 0 ? (
              <h1 className="text-3xl font-semibold text-center mt-10">
                You have no appointments yet.
              </h1>
            ) : (
              <div>
                <h1 className="text-3xl font-semibold my-5">
                  Hospital Appointments
                </h1>
                <section className="grid grid-cols-2 gap-6">
                  {appointments?.hospitalAppointment?.map(
                    (appointment: any) => (
                      <SingleAppointment
                        key={appointment.id}
                        appointment={appointment}
                        type="hospital"
                      />
                    )
                  )}
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

export default MyHospitalAppointment;
