const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Ruta para enviar correos desde formulario
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("Faltan campos requeridos.");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `\ud83d\udce9 Nuevo mensaje de contacto de ${name}`,
      html: `
        <h3>Mensaje recibido en Valbix:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Correo enviado correctamente.");
  } catch (error) {
    console.error("Error al enviar email:", error);
    res.status(500).send("Error al enviar el mensaje.");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend iniciado en puerto ${PORT}`);
});
