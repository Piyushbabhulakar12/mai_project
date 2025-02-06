import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import enquiry from "../../assets/project_img.png";

const Main = () => {
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [budgetType, setBudgetType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalDays, setTotalDays] = useState(0);

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleSubcategoryChange = (event) => setSubcategory(event.target.value);
  const handleBudgetChange = (event) => setBudgetType(event.target.value);

  const handleDateChange = (e, type) => {
    if (type === "start") setStartDate(e.target.value);
    if (type === "end") setEndDate(e.target.value);

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(e.target.value);
      const diffTime = Math.abs(end - start);
      setTotalDays(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    }
  };

  return (
    <Container>
      <Grid container spacing={3} mt={3}>
        <Grid item xs={6}>
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

        <Grid item xs={6}>
          <Box
            sx={{
              background: "#DBE7F1",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h5"
              color="primary"
              align="center"
              sx={{ fontWeight: 600, marginBottom: "10px" }}
            >
              Note
            </Typography>
            <Typography variant="body1" align="center">
              Precision is key! Customers who provide clear descriptions get
              optimal proposals for easy project completion. To make it better,
              we suggest you upload relevant (pictures, documents,
              specifications, etc) for clarity.
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#DBE7F1",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <Typography
              variant="h5"
              color="primary"
              align="center"
              sx={{ fontWeight: 700 }}
            >
              Post a Project
            </Typography>
          </Box>
          <Typography variant="body1" mt={2}>
            Select a relevant category so that can find your project
          </Typography>

          <Box
            sx={{
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select value={category} onChange={handleCategoryChange}>
                <MenuItem value="Web Development">Web Development</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Subcategory</InputLabel>
              <Select value={subcategory} onChange={handleSubcategoryChange}>
                <MenuItem value="Frontend">Frontend</MenuItem>
                <MenuItem value="Backend">Backend</MenuItem>
                <MenuItem value="UI/UX">UI/UX</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Project Title"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Project Description"
              multiline
              rows={3}
              margin="normal"
              required
            />

            <Button variant="contained" component="label" fullWidth>
              Upload Files
              <input type="file" hidden multiple />
            </Button>

            <FormControl fullWidth margin="normal">
              <InputLabel>Budget Type</InputLabel>
              <Select value={budgetType} onChange={handleBudgetChange}>
                <MenuItem value="Fixed">Fixed</MenuItem>
                <MenuItem value="Range">Range</MenuItem>
                <MenuItem value="No Idea">No Idea</MenuItem>
              </Select>
            </FormControl>

            <TextField fullWidth label="Project Location" margin="normal" />
            <TextField fullWidth label="Postcode" margin="normal" />

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Start Date"
                  InputLabelProps={{ shrink: true }}
                  value={startDate}
                  onChange={(e) => handleDateChange(e, "start")}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="End Date"
                  InputLabelProps={{ shrink: true }}
                  value={endDate}
                  onChange={(e) => handleDateChange(e, "end")}
                />
              </Grid>
            </Grid>

            <Typography variant="body1" sx={{ mt: 2 }}>
              Total Duration: <strong>{totalDays} days</strong>
            </Typography>

            <FormControlLabel
              control={<Checkbox />}
              label="I agree to the terms and conditions"
            />

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6}>
                <Button variant="contained" color="primary" fullWidth>
                  Post a Project
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined" color="secondary" fullWidth>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
