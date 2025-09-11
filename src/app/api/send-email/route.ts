import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { to, subject, text, email } = await req.json();

    if (!to || !subject || !text || !email) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT!, 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, 
      },
    });
    
    const info = await transporter.sendMail({
      from: `"Site WO" <${email}>`,
      to: 'contato@wonetwork.com.br',
      subject: subject,
      text: text, 
    });

    return NextResponse.json({ message: 'Email enviado com sucesso!', info });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ message: 'Erro ao enviar e-mail', error }, { status: 500 });
  }
}