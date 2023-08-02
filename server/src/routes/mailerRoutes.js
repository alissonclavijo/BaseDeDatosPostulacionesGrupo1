const express = require("express");
const router = express.Router();
const transporter = require("../controllers/mailer"); // Ruta a tu archivo de configuración de Nodemailer

router.post("/enviar-correo", async (req, res) => {
  const { destinatario, asunto, contenido } = req.body;

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: destinatario,
      subject: asunto,
      text: contenido,
    });

    console.log("Correo enviado:", info);
    res.status(200).json({ message: "Correo enviado exitosamente." });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "Error al enviar el correo." });
  }
});

module.exports = router;
