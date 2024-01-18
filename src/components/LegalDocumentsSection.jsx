import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Divider,
} from "@mui/material";
import { DescriptionOutlined } from "@mui/icons-material";

const LegalDocumentsSection = () => {
  const legalDocuments = [
    {
      id: 1,
      title: "Terms and Conditions",
    },
    {
      id: 2,
      title: "Privacy Policy",
    },
    // Add more legal documents here
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Legal Documents Management
      </Typography>
      <List>
        {legalDocuments.map((document) => (
          <div key={document.id}>
            <ListItem>
              <ListItemIcon>
                <DescriptionOutlined />
              </ListItemIcon>
              <ListItemText primary={document.title} />
              <Button size="small" variant="outlined" color="secondary">
                Edit Document
              </Button>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default LegalDocumentsSection;
