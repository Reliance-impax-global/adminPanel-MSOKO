import React, { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, Grid,useTheme } from "@mui/material";

const BusinessInsights = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const theme = useTheme();

  // Simulated demo data
 const demoData = [
   {
     id: 1,
     category: "Recommendations",
     title: "Increase User Engagement",
     description:
       "Engagement is a key factor for user retention. Implement gamification features to increase user engagement.",
     recommendation: "Consider adding a points system and badges.",
   },
   {
     id: 2,
     category: "Recommendations",
     title: "Reduce Bounce Rate",
     description:
       "High bounce rates can negatively impact SEO. Improve page load times and provide relevant content.",
     recommendation: "Optimize website performance and content.",
   },
   {
     id: 3,
     category: "Suggestions",
     title: "Enhance Mobile Experience",
     description:
       "Mobile users make up a significant portion of your audience. Ensure a responsive design for mobile devices.",
     recommendation: "Implement a mobile-first design strategy.",
   },
   {
     id: 4,
     category: "Suggestions",
     title: "Improve Onboarding Process",
     description:
       "A smooth onboarding process can lead to better user retention. Simplify and streamline the onboarding experience.",
     recommendation: "Offer guided tours and tutorials for new users.",
   },
   {
     id: 5,
     category: "Recommendations",
     title: "Personalized Content",
     description:
       "Tailored content can engage users. Use data analytics to personalize content recommendations.",
     recommendation:
       "Implement a recommendation engine based on user preferences.",
   },
   {
     id: 6,
     category: "Suggestions",
     title: "Feedback Collection",
     description:
       "Collect user feedback to understand pain points and improve the user experience.",
     recommendation: "Add feedback forms and surveys at key touchpoints.",
   },
 ];


  useEffect(() => {
    // Filter insights into recommendations and suggestions
    const recommendationsData = demoData.filter(
      (insight) => insight.category === "Recommendations"
    );
    const suggestionsData = demoData.filter(
      (insight) => insight.category === "Suggestions"
    );

    // Set the data for recommendations and suggestions
    setRecommendations(recommendationsData);
    setSuggestions(suggestionsData);
  }, []);

  const renderInsights = (insights) => {
    return insights.map((insight) => (
      <Grid item xs={12} md={4} key={insight.id}>
       <Card
      sx={{
        height: {
          xs: "100%", // Default height for extra-small devices
          md: "200px", // Height for medium devices
          lg: "100%", // Height for large devices
          xl: "100%", // Height for extra-large devices
        },
        marginBottom: theme.spacing(1), // Vertical margin using theme.spacing
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: theme.spacing(1) }} // Vertical margin for title
        >
          {insight.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {insight.description}
        </Typography>
        <Typography variant="body2" color="primary">
          {insight.recommendation}
        </Typography>
      </CardContent>
    </Card>
      </Grid>
    ));
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Data-driven Insights and Recommendations
      </Typography>
      <Typography variant="h3" sx={{ mt:'25px' }} gutterBottom>
        Recommendations
      </Typography>
      <Grid container   spacing={3}>
        {renderInsights(recommendations)}
      </Grid>
      <Typography variant="h3" sx={{ mt:'25px' }} gutterBottom>
        Suggestions
      </Typography>
      <Grid container spacing={3}>
        {renderInsights(suggestions)}
      </Grid>
    </Container>
  );
};

export default BusinessInsights;
