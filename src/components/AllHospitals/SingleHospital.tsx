import { Container, Grid, Rating } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hospitals } from "../../staticData/hospitals";
import { setHospitalAppointment } from "../redux/userSlice";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const SingleHospital = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hospital, setHospital] = React.useState<any>(null);

  useEffect(() => {
    setHospital(hospitals.find((hospital: any) => hospital.id == id));
  }, []);

  const handleBookAppointment = (test: any) => {
    dispatch(setHospitalAppointment({ hospital: hospital?.id, test }));
    // console.log(hospital?.id, test);
    navigate("/hospital-booking");
  };

  return (
    <div>
      <Header />
      <main className="">
        <section>
          <div
            style={{
              background: `url("/images/hospitalDetailsBanner.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "45rem",
            }}
          >
            <div className="bg-teal-600 bg-opacity-60 h-full">
              <div className="flex justify-start items-center h-full">
                <div className="text-center text-white px-6 md:px-12">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-12 ml-16 w-3/4 text-justify">
                    Feel better about finding <br />{" "}
                    <span>your solution here</span>
                  </h1>
                  <p className="text-white justify-start ml-16 text-justify w-3/4">
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Container fixed sx={{ my: 10 }}>
          <Grid container>
            <Grid
              item
              lg={5}
              sx={{
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              }}
            >
              <div>
                <img
                  src="/images/hospitals/hospital-1.png"
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="py-5">
                <h1 className="font-bold text-2xl text-center">
                  {hospital?.name}
                </h1>
                <p className="text-center">{hospital?.location}</p>
                <div className="flex justify-center">
                  <Rating name="read-only" value={4} /> <span>4.0</span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              lg={7}
              sx={{
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-center">
                  About
                </h3>
                <p className="text-xl ml-8">{hospital?.about}</p>
              </div>
            </Grid>
          </Grid>

          <div className="mt-10">
            <h3 className="text-4xl">You may be looking for</h3>
            <hr
              style={{
                width: "200px",
                height: "5px",
                background: "#00BFA6",
                border: "none",
                marginTop: "10px",
              }}
            />
            <div className="mt-8 grid grid-cols-3 gap-4">
              {hospital?.tests?.map((test: any) => (
                <div
                  className="flex items-center p-3 cursor-pointer active:translate-y-1"
                  style={{
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                  }}
                  onClick={() => handleBookAppointment(test)}
                >
                  <img src="/images/icon_bones.png" className="w-20 h-20" />
                  <div className="ml-3">
                    <h3 className="text-2xl font-semibold capitalize">
                      {test?.name}
                    </h3>
                    {/* <p>Bones, muscles, joints, tendons, ligaments</p> */}
                    <h2 className="text-primary mt-2 text-xl">
                      FEE: {test?.price}Tk
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default SingleHospital;
