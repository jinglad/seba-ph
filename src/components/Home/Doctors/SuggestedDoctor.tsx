import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { doctors } from "../../../staticData/doctors";
import MediaCard from "../../Reused/Card";
import { SampleNextArrow, SamplePrevArrow } from "./Doctors";

const SuggestedDoctor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [suggestedDoctors, setSuggestedDoctors] = React.useState<any>([]);
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

  useEffect(() => {
    const suggested = doctors.filter((doctor: any) => doctor.id != id);
    setSuggestedDoctors(suggested);
  }, [id]);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl">Suggested Doctors</h1>
      <div className="mt-4">
        <Slider {...settings}>
          {suggestedDoctors?.map((doctor: any) => (
            <div
              key={doctor.id}
              className="ml-3 cursor-pointer active:scale-95 transition duration-150"
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
      </div>
    </div>
  );
};

export default SuggestedDoctor;
