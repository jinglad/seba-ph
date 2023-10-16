import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { doctors } from "../../../staticData/doctors";
import { setDoctorAppointment } from "../../redux/userSlice";
import Footer from "../../Reused/Footer";
import Header from "../../Reused/Header";
import SuggestedDoctor from "./SuggestedDoctor";

const DoctorDetails = () => {
  const [rating, setRating] = useState<number | null>(2);
  const navigate = useNavigate();
  const { id } = useParams();
  const [doctor, setDoctor] = useState<any>(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);
  const isAdmin = user?.role === "admin";

  useEffect(() => {
    const currentDoctor: any = doctors.find((doctor: any) => doctor.id == id);
    setDoctor(currentDoctor);
    setRating(currentDoctor.rating);
  }, [id]);

  const setAppointment = () => {
    const newAppointment = {
      doctor: doctor,
      user: user,
      type: "doctor",
    };
    dispatch(setDoctorAppointment(newAppointment));
    navigate("/doctors/book-appointment");
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto my-10">
        <div
          className="py-10 px-8"
          style={{
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className="ml-10">
                <Card
                  sx={{
                    maxWidth: "100%",
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={doctor?.image}
                    alt={doctor?.name}
                  />
                  <CardContent sx={{ bgcolor: "primary.main" }}>
                    <Typography
                      // gutterBottom
                      sx={{ textAlign: "center", color: "white" }}
                      variant="h6"
                      component="div"
                    >
                      {doctor?.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", color: "white", margin: 0 }}
                      // color="text.secondary"
                    >
                      {doctor?.department}
                    </Typography>
                    <div className="flex justify-center mt-2">
                      <Rating
                        name="simple-controlled"
                        value={rating}
                        readOnly
                      />
                    </div>
                  </CardContent>
                </Card>
                <button
                  className="border-2 border-primary rounded-full py-3 w-full text-primary mt-5 font-semibold uppercase active:translate-y-1"
                  onClick={() => {
                    setAppointment();
                  }}
                >
                  Make appointment
                </button>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className="w-[75%]">
                <div className="doctor-details-right-section-subsection">
                  <h1 className="text-5xl font-semibold text-primary">
                    {doctor?.name}
                  </h1>
                  <p className="text-2xl text-primary my-2">
                    {doctor?.department}
                  </p>
                  <p>{doctor?.degree}</p>
                </div>
                <div className="doctor-details-right-section-subsection my-2">
                  <h1 className="text-5xl font-semibold text-primary mb-1">
                    CAREER
                  </h1>
                  <p>{doctor?.about}</p>
                </div>
                <div className="doctor-details-right-section-subsection">
                  <div>
                    <p>
                      <span className="text-primary">Experience: </span>
                      <span>{doctor?.experience}</span>
                    </p>
                    <p>
                      <span className="text-primary">Fee: </span>
                      <span>BDT {doctor?.fee} Tk</span>
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        {isAdmin ? null : <SuggestedDoctor />}
      </div>
      <Footer />
    </div>
  );
};

export default DoctorDetails;
