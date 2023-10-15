import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { doctors } from "../../../staticData/doctors";
import MediaCard from "../../Reused/Card";
import { SampleNextArrow, SamplePrevArrow } from "./Doctors";
import { Box } from "@mui/material";

const SuggestedDoctor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [suggestedDoctors, setSuggestedDoctors] = React.useState<any>([]);
  var settings = {
    autoplay: false,
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
        breakpoint: 900,
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

  useEffect(() => {
    const suggested = doctors.filter((doctor: any) => doctor.id != id);
    setSuggestedDoctors(suggested);
  }, [id]);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl">Suggested Doctors</h1>
      <Box
        sx={{
          ".slick-dots": {
            bottom: "-40px",
          },
          mt: 2,
        }}
      >
        <Slider {...settings}>
          {suggestedDoctors?.map((doctor: any) => (
            <div
              key={doctor.id}
              className="cursor-pointer !flex justify-center "
              onClick={() => navigate(`/doctors/${doctor.id}`)}
            >
              <MediaCard
                name={doctor.name}
                title={doctor.department}
                image={doctor.image}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </div>
  );
};

export default SuggestedDoctor;
