import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useBlogDetails } from "../../hooks/useBlogDetails";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, isError } = useBlogDetails(id);

  return (
    <div>
      <Header />
      {isLoading ? (
        <div className="flex justify-center items-center h-[32rem]">
          <CircularProgress />
        </div>
      ) : isError ? (
        <div className="flex justify-center items-center h-[32rem]">
          <p className="text-2xl font-semibold">
            Something occured while fetching blogs. Please try again later.
          </p>
        </div>
      ) : (
        <Container
          fixed
          sx={{
            pb: 15,
            mt: 10,
            a: {
              color: "#4287f5",
            },
            p: {
              fontFamily: "'Poppins', sans-serif!important",
            },
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
            {data?.title?.rendered}
          </Typography>
          <Box
            sx={{
              h3: {
                fontFamily: "'Poppins', sans-serif!important",
                fontSize: "1.2rem",
                mt: 2,
                mb: 1,
                fontWeight: 600,
              },
              h2: {
                fontFamily: "'Poppins', sans-serif!important",
                fontSize: "1.2rem",
                mt: 2,
                mb: 1,
                fontWeight: 600,
              },
              figcaption: {
                fontFamily: "'Poppins', sans-serif!important",
                fontSize: "1rem",
                fontWeight: 600,
              },
              img: {
                mb: 4,
              },
            }}
            dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
          />
        </Container>
      )}
      <Footer />
    </div>
  );
};

export default BlogDetails;
