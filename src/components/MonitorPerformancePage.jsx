// import React from "react";
// import { Container, Grid, makeStyles, Typography } from "@mui/material";
// // import PerformanceMetric from "./PerformanceMetric";

// const useStyles = makeStyles((theme) => ({
//   header: {
//     marginBottom: theme.spacing(3),
//   },
//   metricContainer: {
//     display: "flex",
//     justifyContent: "center",
//   },
// }));

// const performanceMetrics = [
//   { title: "CPU Usage", value: "75%", icon: "🖥️" },
//   { title: "Memory Usage", value: "60%", icon: "💾" },
//   // Add more performance metrics
// ];

// const MonitorPerformancePage = () => {
//   const classes = useStyles();

//   return (
//     <Container>
//       <Typography variant="h4" className={classes.header}>
//         Performance Monitoring
//       </Typography>
//       <Grid container spacing={3}>
//         {performanceMetrics.map((metric) => (
//           <Grid
//             key={metric.title}
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             className={classes.metricContainer}
//           >
//             {/* <PerformanceMetric
//               title={metric.title}
//               value={metric.value}
//               icon={metric.icon}
//             /> */}
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default MonitorPerformancePage;
