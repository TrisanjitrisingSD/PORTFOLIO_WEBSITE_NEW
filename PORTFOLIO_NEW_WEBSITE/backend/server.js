const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail as the email service
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password (not regular password)
  },
});

// API route to handle form submission
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Email options
  const mailOptions = {
    from: email, // Sender's email (visitor's email)
    to: "trisanjitdas7@gmail.com", // Your email
    subject: `New Message from ${name} via Portfolio`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});