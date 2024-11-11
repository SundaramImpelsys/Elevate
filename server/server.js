const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'r.sundaram2015@gmail.com',
    pass: 'ljep zwxo xfrh miaw'
  }
});

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  const mailOptions = {
    from: 'r.sundaram2015@gmail.com',
    to: email,
    subject: 'Thank you for subscribing!',
    text: 'Thank you for subscribing to our newsletter!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Email sent successfully', info: info.response });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
