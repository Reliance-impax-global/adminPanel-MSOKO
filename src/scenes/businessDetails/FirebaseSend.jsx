// Import the necessary functions from Firebase
import { getDatabase, ref, push } from "firebase/database";
import app from "../../firebase/firebaseConfig";
 // Import your Firebase configuration

const sendFormDataToFirebase = (formData) => {
  // Get a reference to the database
  const database = getDatabase(app);

  // Reference to the "businessDetails" node in the database
  const businessDetailsRef = ref(database, "businessDetails");

  // Push the form data to the database
  push(businessDetailsRef, formData)
    .then((e) => {
      console.log(e,"Form data sent to Firebase successfully");
    })
    .catch((error) => {
      console.error("Error sending form data to Firebase: ", error);
    });
};

export default sendFormDataToFirebase;
