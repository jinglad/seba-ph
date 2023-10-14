import { Box, Container, Grid } from "@mui/material";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const servicesItems: {
  id: string;
  title: string;
  icon: JSX.Element;
  route: string;
}[] = [
  {
    id: uuidv4(),
    title: "Hostpital",
    icon: (
      <LocalHospitalIcon
        sx={{
          fontSize: "50px",
        }}
      />
    ),
    route: "/hospitals",
  },
  {
    id: uuidv4(),
    title: "Doctors",
    icon: (
      <PermIdentityIcon
        sx={{
          fontSize: "50px",
        }}
      />
    ),
    route: "/doctors",
  },
  // {
  //   id: uuidv4(),
  //   title: "Medicine",
  //   icon: (
  //     <MedicalServicesIcon
  //       sx={{
  //         fontSize: "50px",
  //       }}
  //     />
  //   ),
  // },
  // {
  //   id: uuidv4(),
  //   title: "Accessories",
  //   icon: (
  //     <BusinessCenterIcon
  //       sx={{
  //         fontSize: "50px",
  //       }}
  //     />
  //   ),
  // },
  {
    id: uuidv4(),
    title: "Health Check",
    icon: (
      <MonitorHeartIcon
        sx={{
          fontSize: "50px",
        }}
      />
    ),
    route: "/health-check",
  },
  // {
  //   id: uuidv4(),
  //   title: "Instructions",
  //   icon: (
  //     <IntegrationInstructionsIcon
  //       sx={{
  //         fontSize: "50px",
  //       }}
  //     />
  //   ),
  // },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10">
      <Container fixed>
        <Grid container spacing={2} pt={2}>
          {servicesItems.map((item) => {
            return (
              <Grid item xs={12} md={4} key={item.id}>
                <div
                  onClick={() => navigate(item.route)}
                  className="text-white bg-primary w-60 h-60 rounded relative mx-auto mb-10 hover:scale-110 transition-all duration-300 ease cursor-pointer"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="text-center">
                      <Box>{item.icon}</Box>
                      <h3 className="text-[18px] font-semibold leading-none mt-2">
                        {item.title}
                      </h3>
                    </div>
                  </Box>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
