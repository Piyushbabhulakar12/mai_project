import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import enquiry from "../../assets/enquiry.png";

const EnquiryNow = () => {
  return (
    <Box mx={2} mt={3}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
        Enquiry Now
      </Typography>

      <Grid container spacing={3} alignItems="center">
        <Grid item xs={5}>
          <Box
            sx={{
              backgroundImage: `url(${enquiry})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: 700,
              borderRadius: "8px",
            }}
          ></Box>
        </Grid>
        <Grid item xs={7}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              p: 10,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "#E6E6E6",
              height: 700,
            }}
          >
            <TextField label="Name" variant="outlined" fullWidth required />
            <TextField
              label="Mobile Number"
              variant="outlined"
              fullWidth
              required
            />
            <TextField label="Email ID" variant="outlined" fullWidth required />
            <TextField
              label="Site Location"
              variant="outlined"
              fullWidth
              required
            />
            <Button variant="contained" color="primary" size="large">
              Get a Quote
            </Button>

            <Typography align="center">We ll get back to you</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnquiryNow;
