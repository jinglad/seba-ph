import { Box, Container } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Singlereview from "./Singlereview";
import Slider from "react-slick";
import { settings } from "../Doctors/Doctors";

const reviews = [
  {
    id: uuidv4(),
    name: "Richard Ford",
    image: "/images/clients/client-1.png",
    review:
      "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tableAd vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table",
    star: 5,
  },
  {
    id: uuidv4(),
    name: "Richard Ford",
    image: "/images/clients/client-1.png",
    review:
      "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tableAd vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table",
    star: 5,
  },
  {
    id: uuidv4(),
    name: "Richard Ford",
    image: "/images/clients/client-1.png",
    review:
      "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tableAd vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table",
    star: 5,
  },
  {
    id: uuidv4(),
    name: "Richard Ford",
    image: "/images/clients/client-1.png",
    review:
      "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tableAd vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table",
    star: 5,
  },
];

const HowWeWork = () => {
  return (
    <section className="py-10 bg-gray-200">
      <Container fixed>
        <div>
          <h4 className="text-xl font-semibold mx-auto text-center py-1 rounded-full text-white bg-primary w-48">
            How We Work
          </h4>
          <h1 className="uppercase text-primary text-center mt-3 text-2xl">
            Patient Reviews
          </h1>
          <Box
            component="hr"
            className="mb-5 mt-2 w-20 mx-auto h-1 bg-primary"
          />
        </div>

        <Slider {...settings}>
          {reviews.map((review) => (
            <Box
              sx={{
                ml: {
                  lg: 2,
                },
                display: {
                  xs: "flex !important",
                  lg: "block !important",
                },
                justifyContent: "center",
              }}
            >
              <Singlereview {...review} />
            </Box>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HowWeWork;
