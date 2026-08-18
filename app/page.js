export default function Page() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
        <div className="mx-auto max-w-[1240px] px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">F</div>
            <span className="font-black text-[17px]">FieldOps Pro</span>
            <span className="text-[10px] font-semibold tracking-[0.18em] text-zinc-400">UNIVERSAL</span>
          </div>
          <nav className="hidden lg:flex gap-7 text-[13.5px] text-zinc-600">
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#precos">Preços</a>
            <a href="#locacoes">Locação</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="/login" className="text-[13.5px] font-medium">Entrar</a>
            <a href="/checkout/pro" className="rounded-full bg-black text-white text-[13.5px] font-semibold px-5 h-9 flex items-center">Começar teste grátis</a>
          </div>
        </div>
      </header>

      <section id="precos" className="mx-auto max-w-[1240px] px-6 py-20">
        <h2 className="text-4xl font-black tracking-tight text-center">Planos que escalam com você</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="border border-zinc-200 rounded-[24px] p-7">
            <div className="text-xs tracking-widest text-zinc-500">BÁSICO</div>
            <div className="text-4xl font-black mt-3">R$97<span className="text-base font-normal text-zinc-500">/mês</span></div>
            <ul className="mt-6 text-sm text-zinc-600 space-y-2">
              <li>✓ Até 5 técnicos</li><li>✓ OS ilimitadas</li><li>✓ Chat interno</li><li>✓ Suporte 24h</li>
            </ul>
            <a href="/checkout/basico" className="mt-8 block text-center h-11 leading-[44px] rounded-full border border-zinc-900 font-bold text-sm">Começar no Básico</a>
          </div>

          <div className="border-2 border-black rounded-[24px] p-7 relative shadow-xl">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-3 py-1 rounded-full">MAIS VENDIDO</div>
            <div className="text-xs tracking-widest text-zinc-500">PRO</div>
            <div className="text-4xl font-black mt-3">R$197<span className="text-base font-normal text-zinc-500">/mês</span></div>
            <ul className="mt-6 text-sm text-zinc-600 space-y-2">
              <li>✓ <b>Técnicos ilimitados</b></li><li>✓ Controle de estoque</li><li>✓ Indicadores MTTR/MTBF</li><li>✓ Relatórios PDF</li>
            </ul>
            <a href="/checkout/pro" className="mt-8 block text-center h-11 leading-[44px] rounded-full bg-black text-white font-bold text-sm">Começar no PRO</a>
          </div>

          <div className="border border-zinc-200 rounded-[24px] p-7 bg-zinc-50/50">
            <div className="text-xs tracking-widest text-zinc-500">ENTERPRISE + LOCAÇÃO</div>
            <div className="text-4xl font-black mt-3">R$597<span className="text-base font-normal text-zinc-500">/mês</span></div>
            <ul className="mt-6 text-sm text-zinc-600 space-y-2">
              <li>✓ Tudo do PRO</li><li>✓ <b>Módulo Locação de Equipamentos</b></li><li>✓ API + Webhooks</li><li>✓ NF-e + Multi-filial</li>
            </ul>
            <a href="/checkout/enterprise" className="mt-8 block text-center h-11 leading-[44px] rounded-full bg-[#009EE3] text-white font-bold text-sm">Quero Enterprise</a>
          </div>

        </div>
        <div className="text-center text-xs text-zinc-400 mt-6">Checkout 100% seguro com Mercado Pago • 12x no cartão • 7 dias grátis</div>
      </section>
    </div>
  );
}
