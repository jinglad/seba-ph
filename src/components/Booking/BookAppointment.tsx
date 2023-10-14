import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doctors } from "../../staticData/doctors";
import { doctorsCategory } from "../../staticData/doctors-category";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-toastify";
import { setAppointmentId, setDoctorAppointment } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const { doctorAppointment, user } = useSelector((state: any) => state.user);
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState(
    doctorAppointment?.user?.email || ""
  );
  const [name, setName] = React.useState(doctorAppointment?.user?.name || "");
  const [gender, setGender] = React.useState("female");
  const [age, setAge] = React.useState("");
  const [doctor, setDoctor] = React.useState(
    doctorAppointment?.doctor?.id || ""
  );
  const [department, setDepartment] = React.useState(
    doctorAppointment?.doctor?.department || ""
  );
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [file, setFile] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(false);
  const error: any = useRef(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("fullName", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("department", department);
    formData.append("doctor", doctor);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("file", file);
    formData.append("user", user?._id);
    formData.append("price", doctorAppointment?.doctor?.fee);

    fetch(`${process.env.REACT_APP_BASE_URL}/api/doctor-appointment`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          toast.success(
            "Your appointment has been booked successfully & in pending status."
          );
        } else if (res.status === 400) {
          toast.error(
            "Please fill all the fields. Make sure you have selected a file"
          );
          error.current = true;
        } else if (res.status === 500) {
          toast.error("Something went wrong. Please try again later.");
          error.current = true;
        }
        return res.json();
      })
      .then((data) => {
        console.log("success ", data);
        setLoading(false);
        setEmail("");
        setName("");
        setPhone("");
        setAge("");
        setDate("");
        setTime("");
        setFile(null);
        setDepartment("");
        setDoctor("");
        dispatch(setDoctorAppointment(null));
        dispatch(setAppointmentId(data._id));
        if (!error.current) navigate("/make-payment");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      });
  };

  const handleFileChange = (e: any) => {
    const newFile = e.target.files[0];
    console.log(newFile);
    setFile(newFile);
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
        <Container fixed>
          <div className="flex justify-end items-center h-[38rem]">
            <div>
              <h1 className="text-6xl font-semibold">Book Appointment</h1>
              <div className="w-[400px] mt-7 ml-10">
                <ul className="list-disc">
                  <li>Easily schedule appointments with top doctors</li>
                  <li>Find and book the right doctor for you</li>
                  <li>Convenient online booking for medical appointments</li>
                  <li>Get the care you need, when you need it</li>
                  <li>
                    Quick and easy appointment booking for all your healthcare
                    needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Box>
      <Container
        fixed
        sx={{
          my: 10,
        }}
      >
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
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e: any) => setPhone(e.target.value)}
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
                  value={age}
                  onChange={(e: any) => setAge(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <FormControl required>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  row
                  value={gender}
                  onChange={(e: any) => setGender(e.target.value)}
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
                label="Select Department"
                variant="outlined"
                fullWidth
                sx={{ my: 2, backgroundColor: "white" }}
                select
                value={department}
                onChange={(e: any) => setDepartment(e.target.value)}
                required
              >
                {doctorsCategory?.map((category) => (
                  <MenuItem key={category.id} value={category.category}>
                    {category.category}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Select Doctor"
                variant="outlined"
                fullWidth
                sx={{ my: 2, backgroundColor: "white" }}
                select
                value={doctor}
                onChange={(e: any) => setDoctor(e.target.value)}
                required
              >
                {doctors?.map((doctor) => (
                  <MenuItem key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </MenuItem>
                ))}
              </TextField>
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
                  value={date}
                  onChange={(e: any) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="w-full">
                <TextField
                  id="time"
                  label="Time"
                  type="time"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  sx={{ my: 2, backgroundColor: "white" }}
                  value={time}
                  onChange={(e: any) => setTime(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex items-center">
              <Button
                variant="contained"
                component="label"
                sx={{
                  mt: 2,
                  backgroundColor: "white",
                  height: "4rem",
                  ":hover": {
                    color: "white",
                  },
                }}
                fullWidth
                startIcon={
                  <CloudUploadIcon style={{ fontSize: 40, marginBottom: 2 }} />
                }
              >
                Upload Necessary Report
                <input hidden type="file" onChange={handleFileChange} />
              </Button>
            </div>
            {file && (
              <div className="mt-2">
                <p className="text-xl m-0 font-semibold text-center">
                  {file.name}
                </p>
              </div>
            )}
            <button
              className="bg-primary text-white py-2 px-4 rounded-lg w-full active:translate-y-1 mt-5"
              type="submit"
              disabled={loading}
              style={{
                opacity: loading ? 0.5 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              <span>
                {loading ? "Loading.." : "Book Appointment & Make Payment"}
              </span>
            </button>
          </form>
        </div>
        {/* <div className="flex justify-center">
          <button
            onClick={() => {
              navigate("/payment");
            }}
            className="text-2xl font-bold bg-yellow-500 rounded-md py-2 px-4 mt-5"
          >
            Make Payment
          </button>
        </div> */}
      </Container>
      <Footer />
    </div>
  );
};

export default BookAppointment;
