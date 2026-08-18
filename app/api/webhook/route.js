import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({ status: "webhook FieldOps Pro online ✅" });
}

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Webhook recebido:", body);

    const paymentId = body.data?.id;

    if (!paymentId) {
      return NextResponse.json({ received: true });
    }

    // Busca detalhes do pagamento no Mercado Pago
    const mpResponse = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.MP_ACCESS_TOKEN}`
      }
    });

    const payment = await mpResponse.json();
    console.log("Pagamento:", payment.status, payment.payer?.email);

    if (payment.status === 'approved') {
      const emailCliente = payment.payer?.email;
      const nomeCliente = payment.payer?.first_name || "Cliente";

      // ENVIA E-MAIL DE ACESSO
      await resend.emails.send({
        from: 'FieldOps Pro <onboarding@resend.dev>',
        to: emailCliente, // No teste grátis, só funciona se for seu e-mail do Resend
        subject: '🚀 Seu acesso ao FieldOps Pro foi liberado!',
        html: `
          <div style="font-family: Arial; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 10px;">
            <h1 style="color: #000;">Parabéns, ${nomeCliente}! 🎉</h1>
            <p>Seu pagamento foi aprovado!</p>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Seu acesso:</h3>
              <p><strong>Link:</strong> https://fieldops-pro-five.vercel.app/login</p>
              <p><strong>Login:</strong> ${emailCliente}</p>
              <p><strong>Senha:</strong> fieldops2025</p>
              <p style="font-size: 12px; color: #666;">Troque sua senha após o primeiro acesso.</p>
            </div>
            <a href="https://fieldops-pro-five.vercel.app/login" style="background: black; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">ACESSAR AGORA</a>
            <p style="margin-top: 30px; font-size: 12px; color: #999;">Qualquer dúvida: contato@fieldopspro.com.br</p>
          </div>
        `
      });

      console.log("E-mail enviado para:", emailCliente);
    }

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error("Erro webhook:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
