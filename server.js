const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const keys = require("./config/keys");

// Get email and password variables

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Hey dude don't call me dude`);
});

app.post("/send", (req, res) => {
  const output = `
  <p>You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.email}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: keys.username, // generated ethereal user
      pass: keys.password // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: `"Portfolio Contact" <${keys.username}>`, // sender address
    to: `${keys.username}`, // list of receivers
    subject: "Portfolio Contact Request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send({ status: 1001 });
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.status(200).redirect(keys.siteUrl);
    res.send({
      message:
        "Thank you for contacting me. I will get back to you as soon as I can (usually within 24 hours"
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
