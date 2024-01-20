// import React, { useContext, useState } from "react";
// import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { GoogleAuthProvider } from "firebase/auth";
// import toast from "react-hot-toast";
// import { UserAuthContext } from "../../AuthContext/AuthProvider";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Paper,
//   Grid,
//   Link as MuiLink, // Import Link as MuiLink
//   IconButton,
// } from "@mui/material";
// import {
//   LockOutlined as LockOutlinedIcon,
//   Google as GoogleIcon,
// } from "@mui/icons-material";

// const Welcome = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { userLogin, userGoogleLogin, setLoader } = useContext(UserAuthContext);
//   const googleProvider = new GoogleAuthProvider();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";
//   const [signinError, setSigninError] = useState("");

//   const handleUserLogin = (data) => {
//     userLogin(data.email, data.password)
//       .then((result) => {
//         const user = result.user;
//         toast.success("Login Successfully");
//         navigate('/dashboard');
//         console.log(user);
//       })
//       .catch((e) => {
//         console.log(e);
//         setSigninError(e.message);
//       });
//   };

//   const handleGoogleLogin = () => {
//     userGoogleLogin(googleProvider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         if (user?.uid) {
//           toast.success("Login Done");
//           navigate("/dashboard");
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper
//         elevation={3}
//         sx={{
//           margin: 3,
//           padding: 3,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Log In
//         </Typography>

//         <form
//           onSubmit={handleSubmit(handleUserLogin)}
//           style={{ width: "100%", marginTop: "1rem" }}
//         >
//           <TextField color="info" 
//             {...register("email", { required: "Email Address is Required" })}
//             label="Email"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             error={!!errors.email}
//             helperText={errors.email?.message}
//           />

//           <TextField color="info" 
//             {...register("password", {
//               required: "Password Required",
//               minLength: {
//                 value: 8,
//                 message: "Password must be 8 characters",
//               },
//             })}
//             type="password"
//             label="Password"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             error={!!errors.password}
//             helperText={errors.password?.message}
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ marginTop: 2, marginBottom: 1 }}
//           >
//             Log In
//           </Button>
//           {signinError && <Typography color="error">{signinError}</Typography>}
//         </form>

//         <div style={{ marginTop: "1rem", width: "100%", textAlign: "center" }}>
//           <Button
//             onClick={handleGoogleLogin}
//             variant="outlined"
//             fullWidth
//             startIcon={<GoogleIcon />}
//             sx={{ borderColor: "#4cceac", color: "#4cceac"  }}
//           >
//             Log in with Google
//           </Button>
//         </div>

//         <Grid
//           container
//           justifyContent="center"
//           alignItems="center"
//           style={{ marginTop: "1rem" , }}
//         >
//           <Grid item>
//             {/* Use MuiLink for the customized link */}
//             <MuiLink 
//               component={RouterLink}
//               to="#"
         
//               variant="body2"
//               style={{ color: "#4cceac" }} // Set your desired link color
//             >
//               Forget Password?
//             </MuiLink>
//           </Grid>
//           <Grid item>
//             <span style={{ margin: "0 0.5rem" }}>|</span>
//           </Grid>
//           <Grid item>
//             {/* Use MuiLink for the customized link */}
//             <MuiLink
//               component={RouterLink}
//               to="/register"
//               variant="body2"
//               style={{ color: "#4cceac",fontWeight:'medium' }} // Set your desired link color
//             >
//               Create An Account
//             </MuiLink>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default Welcome;
// Welcome.js
import React, { useContext, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
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
import {
  Google as GoogleIcon,
} from "@mui/icons-material";

const Welcome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { userLogin, userGoogleLogin, setLoader } = useContext(UserAuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signinError, setSigninError] = useState("");

  const handleUserLogin = (data) => {
    userLogin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        navigate('/dashboard');
        console.log(user);
      })
      .catch((e) => {
        console.log(e);
        setSigninError(e.message);
      });
  };

  const handleGoogleLogin = () => {
    userGoogleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user?.uid) {
          toast.success("Login Done");
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
          Log In
        </Typography>

        <form
          onSubmit={handleSubmit(handleUserLogin)}
          style={{ width: "100%", marginTop: "1rem" }}
        >
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ marginTop: 2, marginBottom: 1 }}
          >
            Log In
          </Button>
          {signinError && <Typography color="error">{signinError}</Typography>}
        </form>

        <div style={{ marginTop: "1rem", width: "100%", textAlign: "center" }}>
          <Button
            onClick={handleGoogleLogin}
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{ borderColor: "#4cceac", color: "#4cceac"  }}
          >
            Log in with Google
          </Button>
        </div>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: "1rem" , }}
        >
          <Grid item>
            <MuiLink 
              component={RouterLink}
              to="#"
         
              variant="body2"
              style={{ color: "#4cceac" }}
            >
              Forget Password?
            </MuiLink>
          </Grid>
          <Grid item>
            <span style={{ margin: "0 0.5rem" }}>|</span>
          </Grid>
          <Grid item>
            <MuiLink
              component={RouterLink}
              to="/register"
              variant="body2"
              style={{ color: "#4cceac",fontWeight:'medium' }}
            >
              Create An Account
            </MuiLink>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Welcome;
