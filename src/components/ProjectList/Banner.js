import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import project_1 from "../../assets/project_1.png";
import banner from "../../assets/project_banner.png";

const Banner = () => {
  const data = [
    {
      img: project_1,
      title: "Kitchen Worktop",
      postedon: "07/08/24",
      interns: 0,
      projectId: "MAID123",
      bristol: "England",
      duration: "completed",
      price: "Fixed",
      expiryDate: "Marbie",
      project_status: "Active",
      last_update: "2024-08-12",
      proposal: 23,
      desc: "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
    },
    {
      img: project_1,
      title: "Kitchen Worktop",
      postedon: "07/08/24",
      interns: 0,
      projectId: "MAID123",
      bristol: "England",
      duration: "completed",
      price: "Fixed",
      expiryDate: "Marbie",
      project_status: "Active",
      last_update: "2024-08-12",
      proposal: 23,
      desc: "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
    },
    {
      img: project_1,
      title: "Kitchen Worktop",
      postedon: "07/08/24",
      interns: 0,
      projectId: "MAID123",
      bristol: "England",
      duration: "completed",
      price: "Fixed",
      expiryDate: "Marbie",
      project_status: "Active",
      last_update: "2024-08-12",
      proposal: 23,
      desc: "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
    },
    {
      img: project_1,
      title: "Kitchen Worktop",
      postedon: "07/08/24",
      interns: 0,
      projectId: "MAID123",
      bristol: "England",
      duration: "completed",
      price: "Fixed",
      expiryDate: "Marbie",
      project_status: "Active",
      last_update: "2024-08-12",
      proposal: 23,
      desc: "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
    },
    {
      img: project_1,
      title: "Kitchen Worktop",
      postedon: "07/08/24",
      interns: 0,
      projectId: "MAID123",
      bristol: "England",
      duration: "completed",
      price: "Fixed",
      expiryDate: "Marbie",
      project_status: "Active",
      last_update: "2024-08-12",
      proposal: 23,
      desc: "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
    },
    {
      img: project_1,
      title: "Kitchen Worktop",
      postedon: "07/08/24",
      interns: 0,
      projectId: "MAID123",
      bristol: "England",
      duration: "completed",
      price: "Fixed",
      expiryDate: "Marbie",
      project_status: "Active",
      last_update: "2024-08-12",
      proposal: 23,
      desc: "Durable, heat-resistant, and available in various colors and patterns. Engineered stone, highly durable, non-porous, and low maintenance. The visible.....",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "45vh",
          color: "white",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            background: "#00000075",
            padding: "30px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "120px",
          }}
        >
          <div>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", lineHeight: "1.6" }}
            >
              Post your projects with specifications and details explaining the{" "}
              <br />
              depth of the project, materials needed, time limit to be taken,
              and budget
            </Typography>
          </div>
        </div>
      </div>
      <div style={{ padding: "30px" }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Project List
          </Typography>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
            sx={{ width: "600px" }}
          />

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel id="filter-label">Sort By</InputLabel>
            <Select labelId="filter-label" id="filter-select" label="Filter">
              <MenuItem value="latest">Latest</MenuItem>
              <MenuItem value="popular">Popular</MenuItem>
              <MenuItem value="budget">Budget</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {data.map((data, index) => (
          <Box mt={4}>
            <Card sx={{ background: "#ebebeb" }}>
              <Grid container>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      backgroundImage: `url(${project_1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 440,
                    }}
                  ></Box>
                </Grid>
                <Grid item xs={8}>
                  <Box p={3}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600 }}
                        color="primary"
                      >
                        {data.title}
                      </Typography>
                      <Typography variant="body1">
                        Posted : {data.postedon}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "5px" }}>
                      <Chip
                        label="Kitchen"
                        size="small"
                        sx={{ borderRadius: "5px", background: "#fff" }}
                      />
                      <Chip
                        label="SplashBack"
                        size="small"
                        sx={{ borderRadius: "5px", background: "#fff" }}
                      />
                    </Box>
                    <Box mt={2}>
                      <Grid container>
                        <Grid item xs="3">
                          <Typography>Project ID: {data.projectId}</Typography>
                          <Typography mt={1}>
                            Bristol: {data.bristol}
                          </Typography>
                          <Typography mt={1}>
                            Duration: {data.duration}
                          </Typography>
                        </Grid>
                        <Grid item xs="3">
                          <Typography mt={1}>Price: {data.price}</Typography>
                          <Typography mt={1}>
                            Expiry Date: {data.expiryDate}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box sx={{ marginTop: "15px" }}>
                      <Divider />
                    </Box>

                    <Box
                      mt={2}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: "600" }}
                      >
                        Project Status: {data.project_status}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: "600" }}
                      >
                        Last Update: {data.last_update}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: "600" }}
                      >
                        Propsal: {data.proposal}
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography
                        variant="h6"
                        color="primary"
                        sx={{ fontWeight: "600" }}
                      >
                        Description
                      </Typography>
                      <Typography variant="body1">{data.desc}</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", gap: "10px", marginTop: "20px" }}
                    >
                      <Button variant="contained">View</Button>
                      <Button variant="contained">Send a Propsal</Button>
                      <Button variant="contained">Apply Intership</Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        ))}
      </div>
    </>
  );
};
export default Banner;
