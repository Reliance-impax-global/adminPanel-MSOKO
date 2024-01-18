import React, { useState } from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  TextField,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email"; // Import EmailIcon

const EmailMarketingOptions = ({
  open,
  anchorEl,
  onClose,
  handleOptionClick,
}) => {
  const [emailContent, setEmailContent] = useState(""); // State to store email content
  const [subject, setSubject] = useState(""); // State to store email subject
  const [recipient, setRecipient] = useState(""); // State to store recipient email address

  const handleContentChange = (event) => {
    setEmailContent(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission of email content
    // You can implement your logic to send the email here
    // For demonstration purposes, we'll log the content to the console
    console.log("Subject:", subject);
    console.log("Recipient:", recipient);
    console.log("Email Content:", emailContent);
    // Close the popover
    onClose();
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      
    >
      <List>
        <ListItem>
          <ListItemText primary="Create Email Marketing Content" />
        </ListItem>
        <ListItem>
          <TextField
            label="Subject"
            fullWidth
            color="info"
            variant="outlined"
            value={subject}
            onChange={handleSubjectChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Recipient"
            color="info"
            fullWidth
            variant="outlined"
            value={recipient}
            onChange={handleRecipientChange}
          />
        </ListItem>
        <ListItem>
          <TextField
            label="Email Content"
            color="info"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={emailContent}
            onChange={handleContentChange}
          />
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="warning"
            onClick={handleSubmit}
            fullWidth
          >
            Send Email
          </Button>
        </ListItem>
      </List>
    </Popover>
  );
};

export default EmailMarketingOptions;
