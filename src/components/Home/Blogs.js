import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import blog from "../../assets/blog.png";

const Blogs = () => {
  const data = [
    {
      img: blog,
      des: "Safe measures can refer to a wide range of precautions",
    },
    {
      img: blog,
      des: "Safe measures can refer to a wide range of precautions",
    },
    {
      img: blog,
      des: "Safe measures can refer to a wide range of precautions",
    },
    {
      img: blog,
      des: "Safe measures can refer to a wide range of precautions",
    },
    {
      img: blog,
      des: "Safe measures can refer to a wide range of precautions",
    },
    {
      img: blog,
      des: "Safe measures can refer to a wide range of precautions",
    },
    {
      img: blog,
      des: "Safe measures can refer to a wide range of precautions",
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
      <Box sx={{ marginLeft: "20px", marginTop: "30px" }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "700" }}>
          Blog
        </Typography>
      </Box>
      <Box sx={{ mt: 5, px: 3 }}>
        <Slider {...settings}>
          {data.map((project, index) => (
            <Box key={index}>
              <Box key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140, borderRadius: "10px" }}
                    image={project.img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      color="text.secondary"
                    >
                      {project.des}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box display={"flex"} justifyContent={"end"}>
        <Button>View All</Button>
      </Box>
    </>
  );
};
export default Blogs;
