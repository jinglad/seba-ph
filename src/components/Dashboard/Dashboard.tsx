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
        <div>main</div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
