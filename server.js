const express = require('express');
require("dotenv").config();
const nodemailer = require("nodemailer");
const { createClient } = require('@supabase/supabase-js');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  secure: process.env.EMAIL_SECURE === "true", // true para 465 (SSL), false para STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const app = express();
app.use(express.json());
app.use(express.static('.'));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


app.post('/api/contact', async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'adrian.n@hotmail.es',
      subject: 'Nuevo contacto',
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor iniciado en puerto', PORT));
