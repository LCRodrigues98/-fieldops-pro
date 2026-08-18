"use client";
import { useState } from "react";

export default function Checkout({ params }) {
  const plan = params.plan;
  const plans = {
    basico: { name: "Básico", price: "R$97", desc: "Até 5 técnicos • OS ilimitadas • Suporte 24h" },
    pro: { name: "PRO", price: "R$197", desc: "Técnicos ilimitados • Estoque • MTTR/MTBF • Mais vendido" },
    enterprise: { name: "ENTERPRISE + LOCAÇÃO", price: "R$597", desc: "Tudo do PRO + Locação de Equipamentos + API + NF-e + Filiais" },
  };
  const p = plans[plan] || plans.basico;
  const [loading, setLoading] = useState(false);

  async function pagar() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const { url } = await res.json();
      window.location.href = url;
    } catch(e) {
      alert("Erro ao conectar Mercado Pago");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-[440px] w-full border border-zinc-200 rounded-[24px] p-8 shadow-xl">
        <div className="text-[10px] tracking-[0.2em] text-zinc-500">CHECKOUT SEGURO • MERCADO PAGO</div>
        <h1 className="text-3xl font-black mt-2 tracking-tight">{p.name}</h1>
        <div className="text-4xl font-black mt-4">{p.price}<span className="text-base font-normal text-zinc-500">/mês</span></div>
        <p className="text-zinc-600 mt-3 text-[13px] leading-relaxed">{p.desc}</p>
        <div className="mt-6 p-3 bg-zinc-50 border border-zinc-100 rounded-xl text-[12px]">✓ 7 dias grátis • Cancele em 1 clique • 12x no cartão • Nota fiscal</div>
        <button onClick={pagar} disabled={loading} className="w-full mt-6 bg-[#009EE3] hover:bg-[#0084c0] text-white h-[48px] rounded-full font-bold text-sm">
          {loading? "Redirecionando..." : "Pagar com Mercado Pago"}
        </button>
        <div className="text-center text-[11px] text-zinc-400 mt-4">Pagamento 100% seguro • fieldops-pro-five.vercel.app</div>
        <a href="/" className="block text-center text-xs text-zinc-500 mt-4 underline">Voltar</a>
      </div>
    </div>
  );
}
