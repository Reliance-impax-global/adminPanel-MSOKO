import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import PrivacyPolicyModal from "../../components/PrivacyPolicyModal";

const SecurityAndPrivacy = () => {
  const [email, setEmail] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isRecoveryInProgress, setIsRecoveryInProgress] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false); // State for Privacy Policy modal

  const handleSendRecoveryCode = () => {
    // Check if the entered email is in a valid format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailFormatValid = emailPattern.test(email);

    if (isEmailFormatValid) {
      // Simulated recovery code generation and email sending
      // In a real application, you would send an email with a recovery code to the user's email address
      const generatedRecoveryCode = generateRandomRecoveryCode();
      console.log(`Recovery code sent to ${email}: ${generatedRecoveryCode}`);
      setIsRecoveryInProgress(true);
      setIsEmailValid(true); // Reset email validation status
    } else {
      // Invalid email format
      setIsEmailValid(false);
    }
  };

  const handleResetPassword = () => {
    // Simulated password reset
    // In a real application, you would verify the recovery code and update the password
    console.log(`Password reset for ${email}`);
    setIsPasswordReset(true);
  };

  const generateRandomRecoveryCode = () => {
    // Generate a random 6-digit recovery code (simplified for demo purposes)
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Security and Privacy
      </Typography>
      <Typography variant="body1" gutterBottom>
        We take data security and privacy seriously. Your personal information
        is protected in accordance with privacy regulations.
      </Typography>
      <Typography variant="body1" gutterBottom>
        To ensure the security of your account and data, please follow these
        guidelines:
      </Typography>
      <ul>
        <li>
          Keep your login credentials, including passwords and recovery codes,
          confidential.
        </li>
        <li>
          Regularly update your password and use a combination of letters,
          numbers, and symbols for better security.
        </li>
        <li>
          Be cautious of phishing attempts and only use official channels for
          account recovery.
        </li>
      </ul>
      <Typography variant="body1" gutterBottom>
        We prioritize data security and compliance with privacy regulations to
        protect your personal information.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our commitment to privacy includes compliance with relevant regulations,
        such as:
      </Typography>
      <ul>
        <li>General Data Protection Regulation (GDPR)</li>
        <li>California Consumer Privacy Act (CCPA)</li>
        <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
        {/* Add more privacy regulations as needed */}
      </ul>
      <Typography variant="body1" gutterBottom>
        To learn more about how we handle your data and ensure compliance with
        these regulations, please review our{" "}
        <Link onClick={() => setIsPrivacyPolicyOpen(true)}>
          Privacy Policy
        </Link>
        .
      </Typography>
      {/* Rest of the code... */}

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        open={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
      {isPasswordReset ? (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Password Reset Successful
            </Typography>
            <Typography variant="body2">
              Your password has been successfully reset.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <>
          {isRecoveryInProgress ? (
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Reset Password
                </Typography>
                <TextField
                  label="Recovery Code"
                  variant="outlined"
                  color="info"
                  fullWidth
                  value={recoveryCode}
                  onChange={(e) => setRecoveryCode(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="New Password"
                  type="password"
                  variant="outlined"
                  color="info"
                  fullWidth
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleResetPassword}
                >
                  Reset Password
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Account Recovery
                </Typography>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  color="info"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  error={!isEmailValid} // Highlight input if email is invalid
                  helperText={isEmailValid ? "" : "Invalid email format"}
                />
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleSendRecoveryCode}
                >
                  Send Recovery Code
                </Button>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </Container>
  );
};

export default SecurityAndPrivacy;
