// server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db"); // Import the database connection module
const Port = 7000;

app.use(cors()); // Enable CORS to allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON request bodies

const formSchema = new db.Schema({
  name: String,
  email: String,
  message: String,
});

const FormModel = db.model("Form", formSchema);

app.post("/submit-form", async (req, res) => {
  // Access the submitted form data from the request body
  const { name, email, message } = req.body;

  // Check if any of the form fields are empty
  if (!name || !email || !message) {
    // If any field is missing, respond with a 400 Bad Request status code
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create a new document using the Form model and save it to the database
    const formEntry = new FormModel({
      name,
      email,
      message,
    });
    await formEntry.save();

    // Send a response back to the frontend with a 200 OK status code
    res.status(200).json({ message: "Form submitted and saved to the database successfully" });
  } catch (error) {
    // If there's an error saving to the database, respond with a 500 Internal Server Error status code
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the server
app.listen(Port, () => {
  console.log(`Server started at Port: ${Port}`);
});
