import { Button, Container, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/banner.png";
import users from "../../assets/users.png";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "35vh",
          color: "white",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography
                variant="h1"
                sx={{ fontSize: "60px", fontWeight: "600" }}
              >
                Manage your <br />
                Project Faster
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: "20px",
                  background: "#0D99FF",
                  padding: "15px 30px 15px 30px",
                }}
              >
                Explore Your Project
              </Button>
            </div>

            <div>
              <img
                src={users}
                alt="User"
                style={{ height: "300px", width: "auto", paddingTop: "10px" }}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Banner;
