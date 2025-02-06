import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import intern from "../../assets/intern.png";

const AvailableIntern = () => {
  const data = [
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
    },
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
    },
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
    },
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
    },
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
    },
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
    },
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
    },
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
    },
    {
      img: intern,
      name: "Hery Macson",
      role: "Intern",
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
          AVAILABLE INTERN
        </Typography>
      </Box>
      <Box sx={{ mt: 5, px: 3 }}>
        <Slider {...settings}>
          {data.map((project, index) => (
            <Box key={index}>
              <Box key={index}>
                <Card
                  sx={{
                    width: 280,
                    textAlign: "center",
                    borderRadius: 3,
                    overflow: "hidden",
                    backgroundColor: "#fff",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      height: 90,
                      background: "#003F6B",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 70,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      border: "4px solid white",
                    }}
                  >
                    <Avatar
                      src={project.img}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </Box>

                  <CardContent sx={{ pt: 6 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      Name: {project.name}
                    </Typography>
                    <Typography variant="body2">
                      Role: {project.role}
                    </Typography>
                  </CardContent>

                  <Button fullWidth variant="outlined">
                    View Profile
                  </Button>
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
export default AvailableIntern;
