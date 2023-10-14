import { Box, Container, Grid } from "@mui/material";
import { useBlogs } from "../../../hooks/useBlogs";
import SingleBlog from "./SingleBlog";

// const blogs = [
//   {
//     id: uuidv4(),
//     author: "Thomas Henry",
//     image: "/images/blogs/blog-1.jpg",
//     abstruct:
//       "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tableAd vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table",
//     view: 16,
//   },
//   {
//     id: uuidv4(),
//     author: "Thomas Henry",
//     image: "/images/blogs/blog-2.jpg",
//     abstruct:
//       "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-tableAd vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table",
//     view: 16,
//   },
// ];

const RecentBlog = () => {
  const { data: blogs, isLoading, isError } = useBlogs();
  return (
    <section className="py-10 bg-gray-200 -mt-5">
      <Container fixed>
        <div>
          <h1 className="text-4xl font-semibold text-center text-primary uppercase">
            RECENT ARTICLES AND NEWS
          </h1>
          <Box component="hr" className="my-5 w-20 mx-auto h-1 bg-primary" />
          <p className="text-center">
            Lorem ipsum was dolor sit amet, consectetur adipiscing elit. Sed
            imperdiet libero id nisi euismod.
          </p>
        </div>
        <Grid container spacing={4} mt={3}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {blogs?.slice(0, 2)?.map((blog: any) => (
                <Grid item xs={12} md={6} key={blog.id}>
                  <Box sx={{ ml: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <SingleBlog
                        title={blog.title.rendered}
                        image={
                          blog?.better_featured_image?.media_details.sizes
                            .medium.source_url
                        }
                        // title={blog.title.rendered}
                        abstruct={blog.excerpt.rendered}
                        id={blog.id}
                      />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Container>
    </section>
  );
};

export default RecentBlog;
