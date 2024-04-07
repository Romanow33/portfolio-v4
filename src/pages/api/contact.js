import nodemailer from 'nodemailer';

const token = process.env.NEXT_PUBLIC_MAIL_PASS

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'romanowignacio1@gmail.com',
    pass: token,
  },
});

const enviarCorreo = (data) => {
  const mailOptions = {
    from: data.email,
    to: 'romanowignacio1@gmail.com',
    subject: `PORTFOLIO REQUEST - ${data.nombre}`,
    text: `${data.mensaje} from ${data.email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
    } else {
      console.log('Correo enviado:', info.response);
    }
  });
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body)
    enviarCorreo(data)
    res.status(200).json({ message: 'Solicitud POST recibida correctamente.' });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}