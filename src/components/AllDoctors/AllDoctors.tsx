import { Container } from "@mui/system";
import React, { useState } from "react";
import Header from "../Reused/Header";
import { v4 as uuidv4 } from "uuid";
import MediaCard from "../Reused/Card";
import Footer from "../Reused/Footer";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { doctors } from "../../staticData/doctors";
import { doctorsCategory } from "../../staticData/doctors-category";
import { places } from "../../staticData/places";

const AllDoctors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPlace, setSelectedPlace] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("default");
  const [allDoctors, setAllDoctors] = useState<any>(doctors?.slice(0, 5));
  const navigate = useNavigate();
  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
    const filterDoctors = doctors.filter(
      (doctor: any) => doctor.department === event.target.value
    );
    if (event.target.value === "All") {
      setAllDoctors(doctors);
    } else {
      if (filterDoctors) {
        setAllDoctors(filterDoctors);
      }
    }

    // console.log(event.target.value);
  };

  const handlePlaceChange = (event: any) => {
    setSelectedPlace(event.target.value);
    const filterDoctors = doctors.filter(
      (doctor: any) => doctor.place === event.target.value
    );
    if (event.target.value === "All") {
      setAllDoctors(doctors);
    } else {
      if (filterDoctors) {
        setAllDoctors(filterDoctors);
      }
    }
  };

  // sorting based on price
  const handlePriceChange = (event: any) => {
    setSelectedPrice(event.target.value);
    if (event.target.value === "default") {
      setAllDoctors(doctors?.slice(0, 5));
    } else if (event.target.value === "low") {
      console.log(allDoctors);
      const sortedDoctors = allDoctors.sort((a: any, b: any) => {
        return a.fee - b.fee;
      });
      setAllDoctors(sortedDoctors);
    } else if (event.target.value === "high") {
      const sortedDoctors = allDoctors.sort((a: any, b: any) => {
        return b.fee - a.fee;
      });
      setAllDoctors(sortedDoctors);
    }
  };

  const sortMethod = [
    { name: "Default", value: "default" },
    { name: "Low to High", value: "low" },
    { name: "High to Low", value: "high" },
  ];

  const handlePagination = (page: number) => {
    const pageSize = 5;
    const startIndex = (page - 1) * pageSize;
    const selectedDoctors = doctors?.slice(startIndex, startIndex + pageSize);
    setAllDoctors(selectedDoctors);
  };

  return (
    <div>
      <Header />
      <Container fixed sx={{ my: 10, minHeight: "50vh" }}>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold">All Doctors</h1>
          <div className="w-[80%] flex">
            <FormControl variant="outlined" fullWidth sx={{ mr: 2 }}>
              <InputLabel id="category-label">Filter by category</InputLabel>
              <Select
                labelId="category-label"
                label="Filter by category"
                id="category-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {doctorsCategory?.map((category: any) => (
                  <MenuItem key={category.id} value={category.category}>
                    {category.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="category-label">Filter by places</InputLabel>
              <Select
                labelId="category-label"
                label="Filter by places"
                id="category-select"
                value={selectedPlace}
                onChange={handlePlaceChange}
                placeholder="Filter by places"
              >
                <MenuItem value="All">All</MenuItem>
                {places?.map((category: any) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth sx={{ ml: 2 }}>
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
            </FormControl>
          </div>
        </div>
        <Grid container spacing={4}>
          {allDoctors?.map((doctor: any) => (
            <Grid
              item
              key={doctor.id}
              xs={12}
              md={4}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all 0.3s ease-in-out",
                },
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => navigate(`/doctors/${doctor.id}`)}
            >
              <MediaCard
                name={doctor.name}
                title={doctor.department}
                image={doctor.image}
                type="doctor"
              />
            </Grid>
          ))}
        </Grid>
        {allDoctors?.length === 0 && (
          <div className="text-center w-full mt-10">
            <h1 className="text-2xl font-semibold">No doctors found</h1>
          </div>
        )}
        {doctors?.length > 5 && (
          <Stack spacing={2} mt={5}>
            <Pagination
              onChange={(e, page) => handlePagination(page)}
              count={Math.ceil(doctors?.length / 5)}
            />
          </Stack>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default AllDoctors;
