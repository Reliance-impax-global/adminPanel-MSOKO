import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const PrivacyPolicyModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Privacy Policy</DialogTitle>
      <DialogContent>
        <p>
          This is a sample Privacy Policy for demonstration purposes. Please
          note that this is not a legally binding document. You should consult
          with legal experts to create an official Privacy Policy that complies
          with applicable laws and regulations.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          and contact details when you register for our services.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use your information to provide and improve our services,
          communicate with you, and ensure compliance with legal requirements.
        </p>

        <h2>Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties unless
          required by law or with your consent.
        </p>

        <h2>Security Measures</h2>
        <p>
          We take data security seriously and implement measures to protect your
          information from unauthorized access.
        </p>

        <h2>Access and Control</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. If you have any questions or requests, please contact us.
        </p>

        <h2>Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices
          or for legal reasons. We will notify you of any significant changes.
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
