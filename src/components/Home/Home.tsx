import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import Achievement from "./Achievement/Achievement";
import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";
import Doctors from "./Doctors/Doctors";
import Hospitals from "./Hospitals/Hospitals";
import HowWeWork from "./HowWeWork/HowWeWork";
import RecentBlog from "./RecentBlog/RecentBlog";
import Services from "./Services/Services";
import WhatAreWe from "./WhatAreWe/WhatAreWe";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <CallToAction />
      <Doctors />
      <Hospitals />
      <WhatAreWe />
      <RecentBlog />
      <HowWeWork />
      <Achievement />
      <Footer />
    </>
  );
};

export default Home;
