import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


export default function MediaCard({ name, title, image, type }: any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="220" image={image} alt={name} />
      <CardContent sx={{ bgcolor: "primary.main" }}>
        <Typography
          gutterBottom
          sx={{ textAlign: "center", color: "white" }}
          variant="h6"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "white" }}
          color="text.secondary"
        >
          <span className="mr-1">{type === "hospital" ? <AddLocationAltIcon sx={{fontSize: "18px"}} /> : null}</span>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
