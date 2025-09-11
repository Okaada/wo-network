import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { to, subject, text, email } = await req.json();

    if (!to || !subject || !text || !email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.AWS_SES_SMTP_HOST || 'email-smtp.us-east-1.amazonaws.com',
      port: parseInt(process.env.AWS_SES_SMTP_PORT || '587', 10),
      secure: false, // true para 465, false para outros ports
      auth: {
        user: process.env.AWS_SES_SMTP_USERNAME,
        pass: process.env.AWS_SES_SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    const info = await transporter.sendMail({
      from: process.env.AWS_SES_FROM_EMAIL || 'contato@wonetwork.com.br',
      to: 'contato@wonetwork.com.br',
      replyTo: email, // Email do usuário para resposta
      subject: subject,
      text: `Email enviado por: ${email}\n\n${text}`, 
    });

    return NextResponse.json({ message: 'Email enviado com sucesso!', info });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ message: 'Erro ao enviar e-mail', error }, { status: 500 });
  }
}