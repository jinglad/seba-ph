import { Link, useLocation } from "react-router-dom";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state: any) => state.user.user);
  const isAdmin = user?.role === "admin";
  return (
    <>
      <Header />
      <main className="min-h-[55vh] container mx-auto my-10">
        {isAdmin ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="grid grid-cols-2 gap-4 w-full">
              <Link
                to="/admin/users"
                className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
              >
                <div className="dashboard-icon mr-5 duration-300">
                  <img src="/images/User-avatar.png" alt="avatar" />
                </div>

                <div className="text-base text-center font-semibold">Users</div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/admin/doctors"
                className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
              >
                <div className="dashboard-icon mr-5 duration-300">
                  <img src="/images/files.png" alt="avatar" />
                </div>

                <div className="text-base text-center font-semibold">
                  Doctors
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/admin/doctors-bookings"
                className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
              >
                <div className="dashboard-icon mr-5 duration-300">
                  <img src="/images/files.png" alt="avatar" />
                </div>

                <div className="text-base text-center font-semibold">
                  Doctor's Bookings
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/admin/hospitals"
                className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
              >
                <div className="dashboard-icon mr-5 duration-300">
                  <img src="/images/promos.png" alt="avatar" />
                </div>

                <div className="text-base text-center font-semibold">
                  Hospital's
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                to="/admin/hospitals-bookings"
                className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
              >
                <div className="dashboard-icon mr-5 duration-300">
                  <img src="/images/promos.png" alt="avatar" />
                </div>

                <div className="text-base text-center font-semibold">
                  Hospital's Bookings
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                <Link
                  to="/profile"
                  className="p-5 m-2 min-w-[160px] w-[450px] min-h-[100px] bg-white rounded-lg drop-shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer text-black flex items-center dashboard-icon-container"
                >
                  <div className="dashboard-icon mr-5 duration-300">
                    <img src="/images/User-avatar.png" alt="avatar" />
                  </div>

                  <div className="text-base text-center font-semibold">
                    Profile
                  </div>
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
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;

export const DashboardMenus = () => {
  const location = useLocation();
  const user = useSelector((state: any) => state.user.user);
  const isAdmin = user?.role === "admin";
  return (
    <div className="px-5 shadow-md w-80 h-80">
      {isAdmin ? (
        <>
          <Link
            to="/admin/users"
            style={{
              color: location.pathname === "/admin/users" ? "#3DA7AB" : "",
            }}
          >
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Users
            </p>
          </Link>
          <Link
            to="/admin/doctors"
            style={{
              color: location.pathname === "/admin/doctors" ? "#3DA7AB" : "",
            }}
          >
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Doctors
            </p>
          </Link>
          <Link
            to="/admin/doctors-bookings"
            style={{
              color:
                location.pathname === "/admin/doctors-bookings"
                  ? "#3DA7AB"
                  : "",
            }}
          >
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Doctor's Bookings
            </p>
          </Link>
          <Link
            to="/admin/hospitals"
            style={{
              color: location.pathname === "/admin/hospitals" ? "#3DA7AB" : "",
            }}
          >
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Hospitals
            </p>
          </Link>
          <Link
            to="/admin/hospitals-bookings"
            style={{
              color:
                location.pathname === "/admin/hospitals-bookings"
                  ? "#3DA7AB"
                  : "",
            }}
          >
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Hospital's Bookings
            </p>
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/profile"
            style={{
              color: location.pathname === "/profile" ? "#3DA7AB" : "",
            }}
          >
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Profile
            </p>
          </Link>
          <Link
            to="/my-appointments/doctors"
            style={{
              color:
                location.pathname === "/my-appointments/doctors"
                  ? "#3DA7AB"
                  : "",
            }}
          >
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Doctor's Appointment
            </p>
          </Link>
          <Link
            to="/my-appointments/hospitals"
            style={{
              color:
                location.pathname === "/my-appointments/hospitals"
                  ? "#3DA7AB"
                  : "",
            }}
          >
            <p className="my-3 hover:underline hover:cursor-pointer hover:text-primary">
              Hospital's Appointment
            </p>
          </Link>
        </>
      )}
    </div>
  );
};
