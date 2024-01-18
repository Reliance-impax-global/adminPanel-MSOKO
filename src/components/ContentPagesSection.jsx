import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const ContentPagesSection = () => {
  const contentPages = [
    {
      id: 1,
      title: "About Us",
      content: "Content for About Us page...",
    },
    {
      id: 2,
      title: "FAQs",
      content: "Content for FAQs page...",
    },
    // Add more content pages here
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Content Pages Management
      </Typography>
      <Grid container spacing={3}>
        {contentPages.map((page) => (
          <Grid item xs={12} key={page.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{page.title}</Typography>
                <Typography>{page.content}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Edit Page
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContentPagesSection;
