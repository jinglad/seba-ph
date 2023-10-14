import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogList = ({ blog }: any) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 3, border: "1px solid lightgray", mb: 2 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Poppins', sans-serif!important",
          fontSize: "28px",
          mb: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          "@media(max-width: 767px)": { fontSize: "20px" },
          "@media(max-width: 500px)": { fontSize: "16px" },
        }}
      >
        {blog?.title?.rendered}
      </Typography>
      <Typography
        dangerouslySetInnerHTML={{ __html: `${blog?.excerpt?.rendered}` }}
        sx={{
          fontSize: "16px",
          color: "gray",
          mb: 0,
          "@media(max-width: 767px)": { fontSize: "14px" },
          "@media(max-width: 500px)": { fontSize: "12px" },
        }}
      />

      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          justifyContent: "end",
        }}
      >
        <Box sx={{ mt: { sm: 1, xs: 0 } }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/blogs/${blog.id}`);
            }}
            sx={{
              mt: 2,
              color: "white",
              bgcolor: "primary.main",
              borderColor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Read Blog
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogList;
