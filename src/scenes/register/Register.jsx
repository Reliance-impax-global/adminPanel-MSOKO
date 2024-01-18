import React, { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { UserAuthContext } from "../../AuthContext/AuthProvider";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  Link as MuiLink,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";

const Register = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
    } = useForm();
  
    const { SignUp, userGoogleLogin, setLoader } = useContext(UserAuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [signupError, setSignupError] = useState("");
  
    const handleRegister = (data) => {
      if (data.password !== data.confirmPassword) {
        setSignupError("Passwords do not match");
        return;
      }
  
      SignUp(data.email, data.password)
        .then((result) => {
          const user = result.user;
          toast.success("Registration Successful");
          navigate("/");
          console.log(user);
        })
        .catch((e) => {
          console.log(e);
          setSignupError(e.message);
        });
    };
  
    const handleGoogleLogin = () => {
      userGoogleLogin(googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          if (user?.uid) {
            toast.success("Registration Done");
            navigate("/dashboard");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
    return (
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            margin: 3,
            padding: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
  
          <form
            onSubmit={handleSubmit(handleRegister)}
            style={{ width: "100%", marginTop: "1rem" }}
          >
            <TextField color="info" 
              {...register("name", { required: "Name is Required" })}
              label="Name" 
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
  
            <TextField color="info" 
              {...register("email", { required: "Email Address is Required" })}
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
  
            <TextField color="info" 
              {...register("password", {
                required: "Password Required",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters",
                },
              })}
              type="password"
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
  
            <TextField color="info" 
              {...register("confirmPassword", {
                required: "Confirm Password Required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              type="password"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
  
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: 2, marginBottom: 1 }}
            >
              Register
            </Button>
            {signupError && <Typography color="error">{signupError}</Typography>}
          </form>
  
          <div style={{ marginTop: "1rem", width: "100%", textAlign: "center" }}>
            <Button
              onClick={handleGoogleLogin}
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{ borderColor: "#4cceac", color: "#4cceac" }}
            >
              Register with Google
            </Button>
          </div>
  
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "1rem" }}
          >
            <Grid item>
              <MuiLink
                component={RouterLink}
                to="/"
                variant="body2"
                style={{ color: "#4cceac" }}
              >
                Already have an account? Log in
              </MuiLink>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  };
  
  export default Register;

