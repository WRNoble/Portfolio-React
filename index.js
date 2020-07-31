const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const password = require("./password.env");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/api/email", (req, res) => {
  res.send("Welcome emails");
});

app.post("/api/email", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "AOL",
    port: 465,
    auth: {
      user: "wrnoble.dev@aol.com",
      pass: password,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "wrnoblejr.dev@aol.com",
    subject: `Message from ${data.name} from Portfolio.`,
    html: `
      
      <h2>Contact Information</h2>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
        </ul>
        
        <h3>Message</h3>
        <p>${data.message}</p>
        `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      response.send(error);
    } else {
      response.send("Thank you, your message has been sent!");
    }
  });

  smtpTransport.close();
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
