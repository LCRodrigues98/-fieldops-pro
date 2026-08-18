import { NextResponse } from "next/server";

export async function POST(req) {
  const { plan } = await req.json();
  const plans = {
    basico: { title: "FieldOps Pro Basico", price: 97 },
    pro: { title: "FieldOps Pro PRO", price: 197 },
    enterprise: { title: "FieldOps Pro Enterprise Locacao", price: 597 },
  };
  const selected = plans[plan] || plans.basico;
  const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      items: [{ title: selected.title, quantity: 1, unit_price: selected.price, currency_id: "BRL" }],
      back_urls: {
        success: "https://fieldops-pro-five.vercel.app/obrigado",
        failure: "https://fieldops-pro-five.vercel.app/",
        pending: "https://fieldops-pro-five.vercel.app/",
      },
      auto_return: "approved",
    }),
  });
  const data = await response.json();
  return NextResponse.json({ url: data.init_point });
}
