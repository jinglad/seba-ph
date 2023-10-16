import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
// @ts-ignore
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import { wrapper } from "./components/redux/store";
import { CookiesProvider } from "react-cookie";
import AllHospitals from "./components/AllHospitals/AllHospitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import DoctorDetails from "./components/Home/Doctors/DoctorDetails";
import BookAppointment from "./components/Booking/BookAppointment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Payment from "./components/Payment/Payment";
import HealthCheck from "./components/HealthCheck/HealthCheck";
import Blogs from "./components/Blogs/Blogs";
import NoRoute from "./components/NoRoute/NoRoute";
import BlogDetails from "./components/Blogs/BlogDetails";
import MakePayment from "./components/Payment/MakePayment";
import About from "./components/About/About";
import MyDoctorAppointments from "./components/Appointments/MyDoctorAppointments";
import SingleHospital from "./components/AllHospitals/SingleHospital";
import HospitalBooking from "./components/Booking/HospitalBooking";
import MakeHospitalPayment from "./components/Payment/MakeHospitalPayment";
import PaymentHospital from "./components/Payment/PaymentHospital";
import MyHospitalAppointment from "./components/Appointments/MyHospitalAppointment";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import AdminRoute from "./components/PrivateRoute/AdminRoute";
import Users from "./components/Admin/Users";
import Doctors from "./components/Admin/Doctors";
import Hospitals from "./components/Admin/Hospitals";
import DoctorsAppointments from "./components/Admin/DoctorsAppointments";
import HospitalsAppointment from "./components/Admin/HospitalsAppointment";

function App() {
  const store = useStore();
  const queryClient = new QueryClient();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* @ts-ignore */}
      <PersistGate loading={null} persistor={store.__persistor}>
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/hospitals" element={<AllHospitals />} />
                <Route path="/doctors" element={<AllDoctors />} />
                <Route path="/doctors/:id" element={<DoctorDetails />} />
                <Route
                  path="/doctors/book-appointment"
                  element={
                    <PrivateRoute>
                      <BookAppointment />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/hospitals/:id"
                  element={
                    <PrivateRoute>
                      <SingleHospital />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/payment"
                  element={
                    <PrivateRoute>
                      <Payment />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/payment/hospital"
                  element={
                    <PrivateRoute>
                      <PaymentHospital />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/make-payment"
                  element={
                    <PrivateRoute>
                      <MakePayment />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/hospital-booking"
                  element={
                    <PrivateRoute>
                      <HospitalBooking />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/hospital-booking/make-payment"
                  element={
                    <PrivateRoute>
                      <MakeHospitalPayment />
                    </PrivateRoute>
                  }
                />

                <Route path="/health-check" element={<HealthCheck />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogDetails />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/my-appointments/doctors"
                  element={
                    <PrivateRoute>
                      <MyDoctorAppointments />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/my-appointments/hospitals"
                  element={
                    <PrivateRoute>
                      <MyHospitalAppointment />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <AdminRoute>
                      <Users />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/admin/doctors"
                  element={
                    <AdminRoute>
                      <Doctors />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/admin/hospitals"
                  element={
                    <AdminRoute>
                      <Hospitals />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/admin/doctors-bookings"
                  element={
                    <AdminRoute>
                      <DoctorsAppointments />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/admin/hospitals-bookings"
                  element={
                    <AdminRoute>
                      <HospitalsAppointment />
                    </AdminRoute>
                  }
                />
                <Route path="*" element={<NoRoute />} />
              </Routes>
            </BrowserRouter>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </CookiesProvider>
      </PersistGate>
    </LocalizationProvider>
  );
}

export default wrapper.withRedux(App);
