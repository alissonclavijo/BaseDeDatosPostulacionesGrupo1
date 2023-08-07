const express = require("express");
const router = express.Router();
const transporter = require("../controllers/mailer.controller"); // Ruta a tu archivo de configuración de Nodemailer
const crypto = require("crypto"); // Módulo para generación de claves aleatorias

// Crea una variable global para almacenar los códigos de verificación asociados con los correos electrónicos
const codigosVerificacion = {};
router.post("/enviar-correo", async (req, res) => {
  const { destinatario } = req.body;

  try {
    // Generar una clave aleatoria de 6 caracteres
    const claveAleatoria = crypto.randomBytes(3).toString("hex");

    // Modificar el contenido del correo para incluir el código de verificación
    const contenido = `<div style="font-size: 24px; text-align: center;">
    <p>Su código de verificación es:</p>
    <h1 style="font-size: 48px;">${claveAleatoria}</h1>
    <img src="https://cdn.glitch.global/934ab745-2e5a-4075-81a2-abc26b94ccc3/Logo.jpeg?v=1691383441541" alt="Imagen de verificación" style="display: block; margin: 0 auto; width: 200px;">
  </div>`;

    const info = await transporter.sendMail({
      from: process.env.MAIL,
      to: destinatario,
      subject: "Correo de verificación",
      html: contenido,
    });
    console.log(claveAleatoria);

    // Almacenar el código generado junto con el correo electrónico
    codigosVerificacion[destinatario] = claveAleatoria;

    console.log("Correo enviado:", info);
    res
      .status(200)
      .json({ message: "Correo enviado exitosamente.", codigoVerificacion: claveAleatoria });
  } catch (error) {
    console.error("Error al enviar el correo: ", error);
    res.status(500).json({ message: "Error al enviar el correo." });
  }
});
// Agrega una nueva ruta para verificar el código de verificación
router.post("/verificar-codigo", (req, res) => {
  const { correo, codigo } = req.body;

  // Verifica si el código ingresado por el usuario coincide con el código almacenado para el correo electrónico
  if (codigosVerificacion[correo] === codigo) {
    // Si el código coincide, elimina el código almacenado para que no se pueda volver a utilizar
    delete codigosVerificacion[correo];
    res.status(200).json({ message: "Código de verificación válido." });
  } else {
    res.status(400).json({ message: "Código de verificación inválido." });
  }
});

module.exports = router;
