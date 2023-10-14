import { Box, Container, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import MediaCard from "../../Reused/Card";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const hospitals = [
  {
    id: "1",
    name: "Mount Adora",
    title: "Nayasarak Rd, Sylhet 3100",
    image: "/images/hospitals/hospital-1.png",
  },
  {
    id: "2",
    name: "Ibna Sina Hospital",
    title: "Mirabazar-Subhanighat Rd, Sylhet 3100",
    image: "/images/hospitals/hospital-2.png",
  },
  {
    id: "3",
    name: "Al Haramain",
    title: "N206, Sylhet, Sylhet Division, Sylhet 3100",
    image: "/images/hospitals/hospital-3.png",
  },
  {
    id: "4",
    name: "Mount Adora",
    title: "Nayasarak Rd, Sylhet 3100",
    image: "/images/hospitals/hospital-1.png",
  },
  {
    id: "5",
    name: "Ibna Sina Hospital",
    title: "Mirabazar-Subhanighat Rd, Sylhet 3100",
    image: "/images/hospitals/hospital-2.png",
  },
  {
    id: "6",
    name: "Al Haramain",
    title: "N206, Sylhet, Sylhet Division, Sylhet 3100",
    image: "/images/hospitals/hospital-3.png",
  },
];

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

const Hospitals = () => {
  var settings = {
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

  return (
    <section className="py-10 bg-gray-200">
      <Container fixed>
        <div>
          <h1 className="text-4xl font-semibold text-center text-primary uppercase">
            FIND THE BEST HOSPITALS HERE
          </h1>
          <Box component="hr" className="my-5 w-20 mx-auto h-1 bg-primary" />
          <p className="text-center">
            The right choice for your health care needs.
          </p>
        </div>
        <div className="mt-5">
          <Slider {...settings}>
            {hospitals.map((hospital) => (
              <div key={hospital.id} className="ml-5 cursor-pointer">
                <Link to={"/hospitals/" + hospital.id}>
                  <MediaCard
                    name={hospital.name}
                    title={hospital.title}
                    image={hospital.image}
                    type="hospital"
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

export default Hospitals;
