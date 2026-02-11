import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Configurar transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true para puerto 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Contenido del correo
    const mailOptions = {
      from: `"Ideas Inteligentes Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #c41e3a; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 30%;">Nombre:</td>
              <td style="padding: 10px; background: #fafafa;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email:</td>
              <td style="padding: 10px; background: #fafafa;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Asunto:</td>
              <td style="padding: 10px; background: #fafafa;">${asunto}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #1e3a5f;">Mensaje:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #c41e3a; white-space: pre-wrap;">
              ${mensaje}
            </div>
          </div>
          
          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de ideasinteligentesturismo.com.mx
          </p>
        </div>
      `,
      text: `
Nuevo mensaje de contacto

Nombre: ${nombre}
Email: ${email}
Asunto: ${asunto}

Mensaje:
${mensaje}

---
Enviado desde ideasinteligentesturismo.com.mx
      `,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
