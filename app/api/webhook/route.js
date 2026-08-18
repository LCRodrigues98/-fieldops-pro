import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Webhook MP:", JSON.stringify(body));

    // Mercado Pago manda o ID do pagamento
    const paymentId = body?.data?.id || body?.data?.id || body?.id;
    
    if (!paymentId) {
      return NextResponse.json({ received: true });
    }

    // Busca detalhes do pagamento no MP
    const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
      },
    });

    const payment = await res.json();
    console.log("Status pagamento:", payment.status, payment.external_reference);

    if (payment.status === "approved") {
      // AQUI VOCÊ LIBERA O ACESSO
      // Por enquanto vamos só logar - depois você conecta com seu banco de dados
      console.log(`✅ PAGAMENTO APROVADO - Plano: ${payment.external_reference} - Email: ${payment.payer?.email} - Valor: ${payment.transaction_amount}`);
      
      // Exemplo do que fazer aqui depois:
      // - Salvar no Supabase/Firebase
      // - Enviar e-mail com acesso
      // - Criar usuário no sistema
      // - Enviar WhatsApp
    }

    return NextResponse.json({ received: true });
  } catch (e) {
    console.error("Erro webhook:", e);
    return NextResponse.json({ error: "erro" }, { status: 200 }); // sempre retorna 200 pro MP não ficar reenviando
  }
}

// Mercado Pago testa com GET também
export async function GET() {
  return NextResponse.json({ status: "webhook FieldOps Pro online ✅" });
}
