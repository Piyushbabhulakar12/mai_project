import ShareIcon from "@mui/icons-material/Share";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../../assets/img1.png";

const RecentProjectPost = () => {
  const data = [
    {
      name: " Bedroom Renovaion",
      img: img1,
      title: "Kitchen Worktop",
      bristol: "Bristol",
      salb: "Marble",
      duration: "Completed",
    },
    {
      name: " Bedroom Renovaion",
      img: img1,
      title: "Kitchen Worktop",
      bristol: "Bristol",
      salb: "Marble",
      duration: "Completed",
    },
    {
      name: " Bedroom Renovaion",
      img: img1,
      title: "Kitchen Worktop",
      bristol: "Bristol",
      salb: "Marble",
      duration: "Completed",
    },
    {
      name: " Bedroom Renovaion",
      img: img1,
      title: "Kitchen Worktop",
      bristol: "Bristol",
      salb: "Marble",
      duration: "Completed",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    swipeToSlide: true,
  };

  return (
    <>
      <Box sx={{ marginLeft: "20px" }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "700" }}>
          Recent Project Post
        </Typography>
      </Box>
      <Box sx={{ mt: 5, px: 3 }}>
        <Slider {...settings}>
          {data.map((project, index) => (
            <Box key={index}>
              <Box key={index}>
                <Card sx={{ maxWidth: 340, borderRadius: "20px" }}>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ mb: "12px", fontWeight: "600" }}
                  >
                    {project.name}
                  </Typography>

                  <CardMedia
                    sx={{ height: 230 }}
                    image={project.img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Box display={"flex"} gap={12}>
                      <Box>
                        <Typography gutterBottom variant="h6" component="div">
                          {project.title}
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Bristol - {project.bristol}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Salb - {project.salb}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Duration - {project.duration}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="outlined" fullWidth>
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};
export default RecentProjectPost;
