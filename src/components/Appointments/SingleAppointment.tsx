import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { doctors } from "../../staticData/doctors";

const SingleAppointment = ({ appointment, type }: any) => {
  const { doctor, fullName, email, phone, date, time, status } = appointment;
  const currentDoctor: any = doctors.find((doc: any) => doc.id == doctor);

  // console.log("from single appointment: ", currentDoctor);

  return (
    <div
      className="p-8 rounded-lg"
      style={{
        boxShadow: "0 0 20px grey",
      }}
    >
      <div className="flex items-center">
        <div>
          {/* <h5 className="font-bold">{fullName}</h5> */}
          <Avatar
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            sx={{ width: 80, height: 80 }}
          />
        </div>
        <div className="ml-4">
          <h5 className="font-bold text-xl mb-1">{currentDoctor?.name}</h5>
          <p className="text-secondary">{currentDoctor?.department}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
          <p>Time: {appointment.time}</p>
        </div>
        <div className="">
          <p className="text-secondary">
            Status: <span className="capitalize">{status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleAppointment;
