import { Container, Grid } from "@mui/material";

const CallToAction = () => {
  return (
    <section className="py-10 bg-gray-200">
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <div className="mx-auto w-3/4">
              <img
                src="/images/callToAction.png"
                alt="Call To Action"
                className="w-full"
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <h1 className="text-primary text-[60px] font-semibold leading-none">
                Improving <br /> Lives <br /> Together
              </h1>
              <p className="text-[20px] mt-2 mb-5">
                Give us a chance to prove that we care
              </p>
              <button className="rounded-full px-5 py-1 text-white bg-primary text-xl active:translate-y-1">
                Read More
              </button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default CallToAction;
