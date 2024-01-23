import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vojvoda19881@gmail.com",
    pass: "tzuhspkfqkzbsbes",
  },
});
const sendMail = function (
  from: string,
  to: string,
  subject: string,
  html: string
) {
  let mailOptions = {
    from: `"Shop" ${from}`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    html: html, // html body
  };
  return transporter.sendMail(mailOptions);
};

export default sendMail;
