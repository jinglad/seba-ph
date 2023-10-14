import {
  Avatar,
  Box,
  Card,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";

const Singlereview = ({ name, review, star, image }: any) => {
  return (
    <Card
      sx={{
        maxWidth: "350px",
      }}
    >
      <Box
        sx={{
          p: 4,
          bgcolor: "white",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-18px",
            left: "45%",
            width: "0",
            height: "0",
            borderLeft: "19px solid transparent",
            borderRight: "19px solid transparent",
            borderTop: "19px solid white",
          },
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {review}
        </Typography>
      </Box>
      <CardContent
        sx={{
          bgcolor: "primary.main",
        }}
      >
        <div className="flex justify-center items-center py-4">
          <div className="mr-4">
            <Avatar
              src={image}
              sx={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <Rating name="read-only" value={star} readOnly />
            <h3 className="text-white">{name}</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Singlereview;
