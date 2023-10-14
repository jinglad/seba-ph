import { Box, Container, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import MediaCard from "../../Reused/Card";
import Slider from "react-slick";
import { doctors } from "../../../staticData/doctors";
import { Link } from "react-router-dom";

export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      // style={{ ...style,}}
      sx={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "#3DA7AB",
        color: "white",
        fontSize: "1.5rem",
        p: "1rem",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "#3DA7AB",
        },
      }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Box
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      sx={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: "#3DA7AB",
        color: "white",
        fontSize: "1.5rem",
        p: "1rem",
        borderRadius: "10px",
        "&:hover": {
          backgroundColor: "#3DA7AB",
        },
      }}
      onClick={onClick}
    />
  );
}

export const settings = {
  autoplay: true,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  // cssEase: "linear",
  // centerMode: true,
  // centerPadding: "50px",
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // initialSlide: 2,
        // arrows: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
      },
    },
  ],
};

const Doctors = () => {
  return (
    <section className="py-10 bg-gray-200">
      <Container fixed>
        <div>
          <h1 className="text-4xl font-semibold text-center text-primary uppercase">
            MEET OUR TEAM OF SPECIALISTS
          </h1>
          <Box component="hr" className="my-5 w-20 mx-auto h-1 bg-primary" />
          <p className="text-center">
            We make sure that your Life are in Good Hands.
          </p>
        </div>
        <div className="mt-5">
          <Slider {...settings}>
            {doctors.map((doctor) => (
              <div key={doctor.id} className="ml-5 cursor-pointer">
                <Link to={"/doctors/" + doctor.id}>
                  <MediaCard
                    name={doctor.name}
                    title={doctor.department}
                    image={doctor.image}
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Doctors;
