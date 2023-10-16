import React from "react";
import Header from "../Reused/Header";
import Footer from "../Reused/Footer";
import { Button, TextField } from "@mui/material";

const HealthCheck = () => {
  const [height, setHeight] = React.useState<number>();
  const [weight, setWeight] = React.useState<number>();
  const [bmi, setBmi] = React.useState(0);

  const calculateBMI = (height: number, weight: number) => {
    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);
    return bmi;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    const bmi = calculateBMI(height as number, weight as number);
    setBmi(bmi);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto my-10 min-h-[50vh] flex justify-center items-center">
        <div className="w-[500px] rounded shadow-lg p-10">
          <h1 className="mb-4 font-semibold text-center text-2xl">
            Check Your BMI
          </h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Height"
              variant="outlined"
              fullWidth
              sx={{
                mb: 4,
              }}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              placeholder="Enter your height in cm"
            />
            <TextField
              label="Weight"
              variant="outlined"
              fullWidth
              sx={{
                mb: 4,
              }}
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              placeholder="Enter your weight in kg"
            />
            <Button variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
          <h1 className="text-center text-2xl mt-4">
            Your BMI is: {bmi.toFixed(2)}
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HealthCheck;
