import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../../assets/img1.png";

const LiveProject = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Project A",
      location: "England",
      description: "Description of Project A",
      image: img1,
    },
    {
      title: "Project B",
      location: "England",
      description: "Description of Project B",
      image: img1,
    },
    {
      title: "Project C",
      location: "England",
      description: "Description of Project C",
      image: img1,
    },
    {
      title: "Project D",
      location: "England",
      description: "Description of Project D",
      image: img1,
    },
    {
      title: "Project E",
      location: "England",
      description: "Description of Project E",
      image: img1,
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
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
            mt: 3,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "700" }}>
            LIVE PROJECT
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField label="Search Project" variant="outlined" size="small" />
            <TextField
              label="Search Location"
              variant="outlined"
              size="small"
            />
          </Box>
        </Box>
      </Container>

      <Box sx={{ mt: 5, px: 3 }}>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <Box key={index}>
              <Card
                key={index}
                sx={{
                  width: 320,
                  borderRadius: "24px",
                  position: "relative",
                  overflow: "hidden",
                  aspectRatio: "0.8",
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt="Project visualization"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    width: "100%",
                    px: 2,
                    mt: 2,
                    zIndex: 2,
                  }}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <LocationOnIcon sx={{ color: "#003F6B", fontSize: 30 }} />
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "#003F6B" }}
                    >
                      {project?.location}
                    </Typography>
                  </Box>

                  <Avatar
                    src={project.profileImage}
                    sx={{
                      width: 45,
                      height: 45,
                      border: "2px solid white",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#fff",
                    px: 3,
                    py: 2,
                  }}
                >
                  <Typography
                    sx={{ color: "blue", fontSize: "1rem", textAlign: "right" }}
                  >
                    {project.status}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#083D77" }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>

      <Box display={"flex"} justifyContent={"end"}>
        <Button onClick={() => navigate("/project")}>View All</Button>
      </Box>
    </>
  );
};

export default LiveProject;
