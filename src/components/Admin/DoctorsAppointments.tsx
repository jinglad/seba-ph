import { DashboardMenus } from "../Dashboard/Dashboard";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const DoctorsAppointments = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto min-h-[50vh] my-10 flex gap-4">
        <DashboardMenus />
        <div className="w-full">
          <h1 className="text-2xl font-bold">Doctor's Appointments</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DoctorsAppointments;
