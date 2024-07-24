// api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, reason, message } = req.body;

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Puedes usar otro servicio de correo
      auth: {
        user: 'tu_correo@gmail.com', // Tu correo electrónico
        pass: 'tu_contraseña' // Tu contraseña o un token de aplicación
      }
    });

    const mailOptions = {
      from: email,
      to: 'tu_correo@gmail.com', // Tu correo electrónico
      subject: `Nuevo mensaje de ${name}: ${reason}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMotivo: ${reason}\nMensaje: ${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Mensaje enviado' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al enviar el mensaje' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}