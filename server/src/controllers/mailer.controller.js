const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.MAIL,
      pass: process.env.PASSWORD_MAIL,
    }
  });

 module.exports = transporter;