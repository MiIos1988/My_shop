import axios from "axios";

type SendContactMail = {
  email: string;
  subject: string;
  message: string;
};

export const sendContactMail = (body: SendContactMail) =>
  axios.post("/mail/send-contact", body);
