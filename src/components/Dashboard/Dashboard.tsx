import { Link } from "react-router-dom";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="min-h-[55vh] container mx-auto my-10 flex gap-4">
        <div className="flex items-center justify-center w-full h-full">
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/profile"
              className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
            >
              <div className="dashboard-icon mr-5 duration-300">
                <img src="/images/User-avatar.png" alt="avatar" />
              </div>

              <div className="text-base text-center font-semibold">Profile</div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/my-appointments/doctors"
              className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
            >
              <div className="dashboard-icon mr-5 duration-300">
                <img src="/images/files.png" alt="avatar" />
              </div>

              <div className="text-base text-center font-semibold">
                Doctor's Appointment
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/my-appointments/hospitals"
              className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
            >
              <div className="dashboard-icon mr-5 duration-300">
                <img src="/images/promos.png" alt="avatar" />
              </div>

              <div className="text-base text-center font-semibold">
                Hospital's Appointment
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;

export const DashboardMenus = () => {
  return (
    <div className="px-5 shadow-md w-80 h-80">
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
  );
};
