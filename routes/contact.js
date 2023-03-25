const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  const contentHTML = `
    <h1>Contacto Portafolio 📱</h1>
    <ul>
      <li><b>Correo</b>: ${email}</li>
      <li><b>Mensaje</b>: ${message}</li>
    </ul>
  `;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'kalivargas.11@gmail.com',
      pass: 'dxovqsbzgcxifquj',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: 'New message from Portafolio',
    to: 'kalivargas.11@gmail.com',
    subject: 'Portafolio Personal 🌼',
    html: contentHTML,
  });

  console.log('Mensaje enviado', info.messageId);
  res.redirect('/');
});

module.exports = router;
