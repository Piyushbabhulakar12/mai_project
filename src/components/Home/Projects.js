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
import proj from "../../assets/proj.png";

const Projects = () => {
  const data = [
    {
      img: proj,
      title: "Home Renovation",
      des: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
      budge: "100",
    },
    {
      img: proj,
      title: "Home Renovation",
      des: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
      budge: "100",
    },
    {
      img: proj,
      title: "Home Renovation",
      des: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
      budge: "100",
    },
    {
      img: proj,
      title: "Home Renovation",
      des: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
      budge: "100",
    },
    {
      img: proj,
      title: "Home Renovation",
      des: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
      budge: "100",
    },
    {
      img: proj,
      title: "Home Renovation",
      des: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
      budge: "100",
    },
    {
      img: proj,
      title: "Home Renovation",
      des: "Project initiation - The beginning of the project that includes the hiring of construction and design teams, defining the scope of the work, creating a budget.....",
      budge: "100",
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
          PROJECTS
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
                    <Typography variant="body2" color="text.secondary">
                      {project.des}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Box>
                        <Typography>Budget - {project.budge}</Typography>
                      </Box>
                      <Box>
                        <Button variant="contained">View</Button>
                      </Box>
                    </Box>
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
export default Projects;
