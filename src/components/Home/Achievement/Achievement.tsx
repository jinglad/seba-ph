import { Box, Container, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const rewards = [
  {
    id: uuidv4(),
    title: "Professional Doctors",
    count: "359",
  },
  {
    id: uuidv4(),
    title: "Satisfied Patients",
    count: "830",
  },
  {
    id: uuidv4(),
    title: "Awards",
    count: "500",
  },
  {
    id: uuidv4(),
    title: "Patient Reviews",
    count: "82K",
  },
];

const Achievement = () => {
  return (
    <section className="py-10">
      <Container fixed>
        <Box
          sx={{
            width: "90%",
            margin: "0 auto",
            bgcolor: "white",
            px: 4,
            py: 5,
            borderRadius: "5px",
            borderColor: "#3DA7AB",
            borderWidth: "2px",
          }}
        >
          <Grid container spacing={4}>
            {rewards.map((reward) => (
              <Grid item xs={12} md={6} lg={3} key={reward.id}>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-semibold text-primary">
                    {reward.count}+
                  </h1>
                  <h4 className="text-lg mt-2">{reward.title}</h4>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Achievement;
