import { Link } from "react-router-dom";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="min-h-[55vh] container mx-auto my-10 flex gap-4">
        <div className="px-5 shadow-md">
          <Link to="/profile">
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Profile
            </p>
          </Link>
          <Link to="/my-appointments/doctors">
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Doctor's Appointment
            </p>
          </Link>
          <Link to="/my-appointments/hospitals">
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Hospital's Appointment
            </p>
          </Link>
        </div>

        <div className="flex gap-4">
          <Link to="/profile">
            <div className="p-5 shadow min-w-[10rem]">
              <p>Profile</p>
            </div>
          </Link>
          <Link to="/my-appointments/doctors">
            <div className="p-5 shadow">
              <p>Doctor's Appointment</p>
            </div>
          </Link>
          <Link to="/my-appointments/hospitals">
            <div className="p-5 shadow">
              <p>Hospital's Appointment</p>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
