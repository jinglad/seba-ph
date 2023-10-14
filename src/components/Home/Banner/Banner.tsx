import { Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#F5F5F5] h-[363px]">
      <Container fixed>
        <Grid container spacing={2} pt={2}>
          <Grid item xs={12} md={7}>
            <div className="flex justify-center items-center h-[350px]">
              <div>
                <h1 className="text-primary text-[50px] font-semibold leading-none">
                  WE CARE <br /> ABOUT YOUR <br /> HEALTH
                </h1>
                <p className="text-primary text-[18px] mt-2">
                  Dolor sit amet consectetur ading elitsedes eiusmod unt utlem
                </p>
                <button
                  className="rounded border-2 border-primary text-primary px-2 py-1 mt-10 hover:bg-primary hover:text-white active:translate-y-1"
                  onClick={() => {
                    navigate("/doctors/book-appointment");
                  }}
                >
                  Make a doctor appointment
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="text-center">
              <img
                src="/images/banner-image.png"
                alt="Banner Image"
                className="mt-4"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
