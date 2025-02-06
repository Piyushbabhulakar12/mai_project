import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box mt={10}>
        <Box
          sx={{
            backgroundColor: "#E6E6E6",
            py: 2,
            px: { xs: 2, md: 6 },
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
                  Privacy Policy
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, cursor: "pointer" }}>
                  Terms & Conditions
                </Typography>
                <Typography variant="body2" sx={{ cursor: "pointer" }}>
                  Contact Us
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                color="primary"
                variant="body2"
                align="center"
                sx={{ fontWeight: "600" }}
              >
                All copyrights Reserved © MAI
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                gap: 2,
              }}
            >
              <FacebookIcon sx={{ cursor: "pointer" }} />
              <TwitterIcon sx={{ cursor: "pointer" }} />
              <InstagramIcon sx={{ cursor: "pointer" }} />
              <LinkedInIcon sx={{ cursor: "pointer" }} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
