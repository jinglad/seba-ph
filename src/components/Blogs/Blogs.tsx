import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useBlogs } from "../../hooks/useBlogs";
import Footer from "../Reused/Footer";
import Header from "../Reused/Header";
import BlogList from "./BlogList";

const Blogs = () => {
  const { data: blogs, isLoading, isError } = useBlogs();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ width: "85%", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mt: 13 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Oswald',sans-serif",
              fontWeight: 500,
              fontSize: {
                xl: "45px",
                lg: "38px",
                md: "30px",
                sm: "24px",
                xs: "20px",
              },
            }}
          >
            Welcome to Our Blog Site
          </Typography>
          <Typography
            // variant="body2"
            sx={{
              mt: 3,
              width: "40%",
              mx: "auto",
              fontSize: "1rem",
              "@media(max-width: 992px)": { width: "60%" },
              "@media(max-width: 400px)": { width: "80%" },
            }}
          >
            Discover the latest news, tips and user research insights from Seba.
          </Typography>
        </Box>
        {/* <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
    <SelectCategory />
  </Box> */}
        <div>
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
            <Box>
              <Box
                sx={{
                  width: "60%",
                  mx: "auto",
                  my: 3,
                  "@media(max-width: 1200px)": { width: "70%" },
                  "@media(max-width: 992px)": { width: "90%" },
                  "@media(max-width: 400px)": { width: "100%" },
                }}
              >
                {blogs?.length > 0 ? (
                  <>
                    {blogs?.map((blog: any) => (
                      <BlogList key={blog.id} blog={blog} />
                    ))}
                  </>
                ) : (
                  <Box sx={{ height: "300px" }}>
                    <Typography
                      variant="h4"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "80%",
                      }}
                    >
                      No Blogs available in this category.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default Blogs;
