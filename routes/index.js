const {Router}= require('express');
const router = Router();
const nodemailer = require('nodemailer')


router.post('/send-email',async(req,res)=>{
    const {email,message} = req.body;

    contentHTML = `
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
        auth:{
            user: 'kalivargas.11@gmail.com',
            pass: 'dxovqsbzgcxifquj'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info= await transporter.sendMail({
        from: "New menssage from Portafolio",
        to: 'kalivargas.11@gmail.com',
        subject: "Portafolio Personal 🌼",
        html: contentHTML
    });

    console.log('Mensaje enviado', info.messageId);
    res.redirect('/')
});

module.exports= router;