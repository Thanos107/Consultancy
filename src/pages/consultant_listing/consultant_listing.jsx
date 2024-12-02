import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Container,
  Rating,
} from "@mui/material";

const consultants = [
  {
    id: 1,
    name: "John Doe",
    title: "Financial Consultant",
    location: "New York, USA",
    specialization: "Investment & Tax",
    description: "Expert in financial planning and tax management.",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Business Consultant",
    location: "London, UK",
    specialization: "Business Strategy",
    description: "Helps companies grow through strategic insights.",
    imageUrl: "https://via.placeholder.com/150",
    rating: 4.0,
  },
  // Add more consultants here
];

const ConsultantListing = () => {
  const [search, setSearch] = React.useState("");

  const filteredConsultants = consultants.filter((consultant) =>
    consultant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Our Consultants
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        label="Search Consultants"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginBottom: "20px" }}
      />

      {/* Consultants Grid */}
      <Grid container spacing={3}>
        {filteredConsultants.map((consultant) => (
          <Grid item xs={12} key={consultant.id}>
            <Card sx={{ display: "flex", alignItems: "center", padding: 2 }}>
              {/* Image Section */}
              <CardMedia
                component="img"
                sx={{ width: 150, height: 150, borderRadius: "8px" }}
                image={consultant.imageUrl}
                alt={consultant.name}
              />

              {/* Details Section */}
              <CardContent sx={{ flex: 1, paddingLeft: 3 }}>
                <Typography variant="h6" component="div">
                  {consultant.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {consultant.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {consultant.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Specialization: {consultant.specialization}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {consultant.description}
                </Typography>

                {/* Rating */}
                <Rating
                  value={consultant.rating}
                  precision={0.5}
                  readOnly
                  sx={{ marginTop: 1 }}
                />

                {/* Book a Call Button */}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: 2 }}
                >
                  Book a Call
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ConsultantListing;
