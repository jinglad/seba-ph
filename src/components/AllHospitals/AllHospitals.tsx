import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { hospitals } from "../../staticData/hospitals";
import { places } from "../../staticData/places";
import MediaCard from "../Reused/Card";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const AllHospitals = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("default");
  const [allHospital, setAllHospitals] = useState<any>(hospitals);
  const [selectedPlace, setSelectedPlace] = useState("All");
  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event: any) => {
    setSelectedPrice(event.target.value);
    if (event.target.value === "default") {
      setAllHospitals(hospitals);
    } else if (event.target.value === "low") {
      const sortedHospitals = hospitals.sort((a: any, b: any) => {
        return a.fee - b.fee;
      });
      // console.log(sortedHospitals);
      setAllHospitals(sortedHospitals);
    } else if (event.target.value === "high") {
      const sortedHospitals = hospitals.sort((a: any, b: any) => {
        return b.fee - a.fee;
      });
      setAllHospitals(sortedHospitals);
    }
  };

  const handlePlaceChange = (event: any) => {
    console.log(event.target.value);
    setSelectedPlace(event.target.value);
    const filterHospitals = hospitals.filter(
      (hospital: any) => hospital.place === event.target.value
    );
    console.log(filterHospitals);
    if (event.target.value === "All") {
      setAllHospitals(hospitals);
    } else {
      if (filterHospitals) {
        setAllHospitals(filterHospitals);
      }
    }
  };

  const sortMethod = [
    { name: "Default", value: "default" },
    { name: "Low to High", value: "low" },
    { name: "High to Low", value: "high" },
  ];

  return (
    <div>
      <Header />
      <Container fixed sx={{ my: 10 }}>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold">All Hospitals</h1>
          <div className="w-[20%]">
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="category-label">Filter by places</InputLabel>
              <Select
                labelId="category-label"
                label="Filter by places"
                id="category-select"
                value={selectedPlace}
                defaultValue="Madina-Market"
                onChange={handlePlaceChange}
              >
                {places.map((place: any) => (
                  <MenuItem key={place.id} value={place.name}>
                    {place.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <FormControl variant="outlined" fullWidth sx={{ ml: 2 }}>
              <InputLabel id="category-label">Sort by prices</InputLabel>
              <Select
                labelId="category-label"
                label="Filter by places"
                id="category-select"
                value={selectedPrice}
                onChange={handlePriceChange}
              >
                {sortMethod?.map((method: any, i: number) => (
                  <MenuItem key={i} value={method.value}>
                    {method.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
          </div>
        </div>
        <Grid container spacing={4}>
          {allHospital?.map((hospital: any) => (
            <Grid
              item
              key={hospital.id}
              xs={12}
              md={4}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease-in-out",
                },
                // display: "flex",
                // justifyContent: "center",
              }}
              onClick={() => navigate(`/hospitals/${hospital.id}`)}
            >
              <MediaCard
                name={hospital.name}
                title={hospital.location}
                image={hospital.thumbnail}
                type="hospital"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default AllHospitals;
