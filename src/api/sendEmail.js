import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, reason, message } = req.body;

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Puedes usar otro servicio de correo
      auth: {
        user: process.env.EMAIL_USER, // Usa la variable de entorno
        pass: process.env.EMAIL_PASS, // Usa la variable de entorno
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Usa la variable de entorno
      subject: `Nuevo mensaje de ${name}: ${reason}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMotivo: ${reason}\nMensaje: ${message}`,
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