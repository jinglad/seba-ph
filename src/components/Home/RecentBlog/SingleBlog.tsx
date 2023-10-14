import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

export default function SingleBlog({ title, image, abstruct, view, id }: any) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: "300px",
        }}
      />
      <CardContent>
        {/* <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: "20px",
            // overflow: "hidden",
            // textOverflow: "ellipsis",
            // whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography> */}
        <h3 className="truncate text-xl font-semibold w-96 mb-3">{title}</h3>
        <Typography
          variant="body2"
          color="text.secondary"
          dangerouslySetInnerHTML={{ __html: abstruct }}
        />
      </CardContent>
      <CardActions sx={{ pb: 2 }}>
        <button
          onClick={() => navigate(`/blogs/${id}`)}
          className="rounded-full px-5 py-1 text-white bg-primary text-base active:translate-y-1"
        >
          Read More <KeyboardDoubleArrowRightIcon />
        </button>
      </CardActions>
    </Card>
  );
}
