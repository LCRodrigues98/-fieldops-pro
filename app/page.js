export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
        <div className="mx-auto max-w-[1240px] px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[8px] bg-black text-white flex items-center justify-center font-bold">⊞</div>
            <span className="font-black text-[17px]">FieldOps Pro</span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-zinc-400">UNIVERSAL</span>
          </div>
          <nav className="hidden lg:flex gap-7 text-[13.5px] text-zinc-600">
            <a href="#">Funcionalidades</a><a href="#precos">Preços</a><a href="#">Documentação</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="text-[13.5px] font-medium">Entrar</a>
            <a href="#precos" className="rounded-full bg-black text-white text-[13.5px] font-semibold px-5 h-9 flex items-center">Começar teste grátis</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1240px] px-6 pt-16 pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> <span className="text-[12px]">Inspirado em operações reais de campo</span> <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-bold">V2.4</span>
          </div>
          <h1 className="mt-6 text-[56px] font-black tracking-[-0.05em] leading-[0.9]">Sua operação de campo,<br/><span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">sob controle total.</span></h1>
          <p className="mt-5 text-[15.5px] text-zinc-500 max-w-[480px]">Plataforma completa para gestão de equipes externas, estoque com baixa automática, indicadores MTTR/MTBF, PMOC e QR Code. <span className="font-semibold text-zinc-900">Teste grátis 7 dias com tudo do Pro liberado.</span></p>
          <div className="mt-7 flex gap-3">
            <a href="#precos" className="rounded-full bg-black text-white px-6 h-11 flex items-center gap-2 text-[14px] font-semibold">Começar teste grátis 7 dias →</a>
            <button className="rounded-full border border-zinc-200 px-5 h-11 text-[14px] font-semibold">▶ Ver demonstração</button>
          </div>
          <div className="mt-8 flex items-center gap-4 text-[12.5px]">
            <div className="flex -space-x-2"><div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white"/><div className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-white"/><div className="w-8 h-8 rounded-full bg-zinc-500 border-2 border-white"/></div>
            <div><div className="font-semibold">+340 empresas ativas</div><div className="text-zinc-500">4.9/5 em satisfação • Sem cartão</div></div>
          </div>
        </div>
        <div className="rounded-[20px] bg-white border border-zinc-200 shadow-[0_24px_80px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="h-[52px] bg-[#111113] px-5 flex items-center justify-between"><span className="text-[12px] font-mono text-zinc-300">fieldops.pro/app LIVE • 8 técnicos</span></div>
          <div className="p-4 grid grid-cols-3 gap-3">
            <div className="bg-orange-50 p-3 rounded-xl"><div className="text-orange-700 font-bold text-xs">ABERTAS 12</div><div className="mt-2 bg-white border rounded-lg p-2 text-xs">#OS-2841 Preventiva Split</div></div>
            <div className="bg-blue-50 p-3 rounded-xl"><div className="text-blue-700 font-bold text-xs">EM CAMPO 8</div><div className="mt-2 bg-white border rounded-lg p-2 text-xs">#OS-2832 PMOC AO VIVO</div></div>
            <div className="bg-green-50 p-3 rounded-xl"><div className="text-green-700 font-bold text-xs">CONCLUÍDAS 23</div><div className="mt-2 bg-white border rounded-lg p-2 text-xs">#OS-2829 Limpeza</div></div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            <div className="border rounded-xl p-3"><div className="text-[10px]">MTTR HOJE</div><div className="font-bold text-xl">1h 42m</div><div className="h-1 bg-zinc-100 rounded mt-2"><div className="h-1 bg-black w-[75%] rounded"></div></div></div>
            <div className="bg-[#1a1f2e] text-white rounded-xl p-3 text-xs">EQUIPE ATIVA<br/>+4 em deslocamento</div>
          </div>
        </div>
      </section>

      <section id="precos" className="bg-zinc-50 py-20 border-t">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center"><h2 className="text-3xl font-black">Planos para cada operação</h2><p className="text-zinc-500 mt-2">Comece grátis 7 dias, sem cartão. Cancele em 1 clique.</p></div>
          <div className="mt-10 grid lg:grid-cols-3 gap-6 max-w-[1040px] mx-auto">
            <div className="rounded-[20px] bg-white border p-7"><span className="text-[11px] font-bold tracking-widest text-zinc-500">BÁSICO</span><div className="mt-5 text-[42px] font-black">R$97<span className="text-sm font-normal text-zinc-500">/mês</span></div><div className="mt-6 text-[13px]">✅ Até 5 técnicos<br/>✅ OS ilimitadas</div></div>
            <div className="rounded-[20px] bg-white border-[1.5px] border-zinc-900 p-7 shadow-xl relative"><div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full">MAIS VENDIDO</div><span className="text-[11px] font-bold">PRO</span><div className="mt-5 text-[42px] font-black">R$197<span className="text-sm font-normal">/mês</span></div><div className="mt-6 text-[13px] font-medium">✅ 15 técnicos<br/>✅ MTTR/MTBF + QR Code<br/>✅ WhatsApp + GPS</div><a href="/locacoes" className="mt-8 block w-full rounded-full bg-black text-white h-11 flex items-center justify-center text-[13px] font-semibold">Começar teste grátis</a></div>
            <div className="rounded-[20px] bg-white border border-amber-200 p-7"><span className="text-[11px] font-bold text-amber-700">ENTERPRISE</span><span className="ml-2 bg-amber-100 text-amber-800 text-[9px] px-2 py-1 rounded-full font-bold">LOCAÇÃO COMPLETO</span><div className="mt-5 text-[42px] font-black">R$597<span className="text-sm font-normal">/mês</span></div><div className="mt-6 text-[13px]">✅ Tudo do PRO<br/>✅ <b>Locação de Equipamentos</b><br/>✅ API + Filiais<br/>✅ NF-e + Financeiro</div><a href="/locacoes" className="mt-8 block w-full rounded-full bg-amber-100 border border-amber-300 h-11 flex items-center justify-center text-[13px] font-semibold text-amber-900">Ver Módulo Locação →</a></div>
          </div>
        </div>
      </section>
    </div>
  )
}
