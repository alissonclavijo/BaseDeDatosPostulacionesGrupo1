const express = require("express");
const router = express.Router();
const transporter = require("../controllers/mailer.controller"); // Ruta a tu archivo de configuración de Nodemailer
const crypto = require("crypto"); // Módulo para generación de claves aleatorias

router.post("/enviar-correo", async (req, res) => {
  const { destinatario } = req.body;

  try {
    // Generar una clave aleatoria de 6 caracteres
    const claveAleatoria = crypto.randomBytes(3).toString("hex");

    // Modificar el contenido del correo para incluir el código de verificación
    const contenido = `Su código de verificación es: ${claveAleatoria}`;

    const info = await transporter.sendMail({
      from: process.env.MAIL,
      to: destinatario,
      subject: "Correo de verificación",
      text: contenido,
    });

    console.log("Correo enviado:", info);
    res.status(200).json({ message: "Correo enviado exitosamente.", codigoVerificacion: claveAleatoria });
  } catch (error) {
    console.error("Error al enviar el correo: ", error);
    res.status(500).json({ message: "Error al enviar el correo." });
  }
});

module.exports = router;
