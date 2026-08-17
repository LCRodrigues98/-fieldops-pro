'use client'
export default function Home(){
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* NAV */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white w-8 h-8 rounded flex items-center justify-center">⊞</div>
          <div><b>FieldOps Pro</b><span className="text-[10px] block -mt-1 tracking-widest opacity-60">UNIVERSAL</span></div>
        </div>
        <div className="hidden md:flex gap-8 text-sm opacity-70">
          <span>Funcionalidades</span><span>Preços</span><span>Documentação</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-sm">Entrar</span>
          <a href="/planos" className="bg-black text-white px-5 py-2 rounded-full text-sm">Começar teste grátis</a>
        </div>
      </nav>

      {/* HERO - Igual sua foto */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 p-6 mt-10">
        <div>
          <div className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Inspirado em operações reais de campo <span className="bg-black text-white px-2 py-0.5 rounded-full">V2.4</span>
          </div>
          <h1 className="text-5xl font-black mt-6 leading-[1.1]">Sua operação de campo,<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">sob controle total.</span></h1>
          <p className="mt-6 text-gray-600">Plataforma completa para gestão de equipes externas, estoque com baixa automática, indicadores MTTR/MTBF, PMOC e certificados com QR Code. <b>Teste grátis 7 dias com tudo do Pro liberado.</b></p>
          <div className="flex gap-4 mt-8">
            <a href="/planos" className="bg-black text-white px-6 py-3 rounded-full text-sm">Começar teste grátis 7 dias →</a>
            <button className="border px-6 py-3 rounded-full text-sm flex items-center gap-2">▶ Ver demonstração</button>
          </div>
          <div className="mt-10 flex items-center gap-3 text-xs">
            <div className="flex -space-x-2"><img src="https://i.pravatar.cc/24?img=1" className="rounded-full"/><img src="https://i.pravatar.cc/24?img=2" className="rounded-full"/><img src="https://i.pravatar.cc/24?img=3" className="rounded-full"/></div>
            <div><b>+340 empresas ativas</b><br/>4.9/5 em satisfação • Sem cartão</div>
          </div>
        </div>

        {/* DASHBOARD MOCK - Igual sua foto */}
        <div className="bg-white border rounded-[20px] shadow-2xl overflow-hidden">
          <div className="bg-[#1a1f2e] text-white text-xs p-3 flex justify-between">
            <span>●●● fieldops.pro/app <span className="bg-teal-500 px-2 rounded-full text-[10px]">LIVE</span></span>
            <span className="opacity-60">8 técnicos em rota ao vivo</span>
          </div>
          <div className="p-4 grid grid-cols-3 gap-3 text-xs">
            <div className="bg-orange-50 p-3 rounded-xl"><div className="text-orange-600 font-bold">ABERTAS 12</div><div className="mt-2 border p-2 rounded bg-white">#OS-2841 Preventiva Split 24k<br/><span className="opacity-60">Torre A - 3º andar</span></div></div>
            <div className="bg-blue-50 p-3 rounded-xl"><div className="text-blue-600 font-bold">EM CAMPO 8</div><div className="mt-2 border p-2 rounded bg-white">#OS-2832 Instalação PMOC <span className="text-blue-500">AO VIVO</span></div></div>
            <div className="bg-green-50 p-3 rounded-xl"><div className="text-green-700 font-bold">CONCLUÍDAS 23</div><div className="mt-2 border p-2 rounded bg-white">#OS-2829 Limpeza bandeja</div></div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            <div className="border rounded-xl p-3"><div className="text-[10px] flex justify-between">MTTR HOJE <span className="text-green-600">↓ -18%</span></div><div className="font-bold text-xl">1h 42m <span className="text-xs font-normal opacity-60">meta 2h</span></div></div>
            <div className="bg-[#1a1f2e] text-white rounded-xl p-3 text-xs"><div className="flex justify-between">EQUIPE ATIVA <span>✎</span></div><div className="mt-2">+4 em deslocamento</div></div>
          </div>
        </div>
      </div>

      {/* PREÇOS - Com R$597 */}
      <div id="precos" className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 p-6 mt-20">
        <div className="border rounded-2xl p-6"><h3>BÁSICO</h3><div className="text-3xl font-bold mt-2">R$97/mês</div><ul className="mt-4 text-sm opacity-70"><li>✅ Até 5 técnicos</li><li>✅ OS ilimitadas</li></ul></div>
        <div className="border-2 border-black rounded-2xl p-6 relative"><span className="absolute -top-3 bg-black text-white text-xs px-3 py-1 rounded-full left-1/2 -translate-x-1/2">MAIS VENDIDO</span><h3>PRO</h3><div className="text-3xl font-bold mt-2">R$197/mês</div><ul className="mt-4 text-sm opacity-70"><li>✅ Até 15 técnicos</li><li>✅ Relatórios + QR Code</li></ul></div>
        <div className="border rounded-2xl p-6 bg-gray-50"><h3>ENTERPRISE</h3><div className="text-3xl font-bold mt-2">R$597/mês</div><p className="text-xs mt-1 text-amber-600 font-bold">+ SISTEMA DE LOCAÇÃO COMPLETO</p><ul className="mt-4 text-sm opacity-70"><li>✅ Técnicos ilimitados</li><li>✅ Locação de Equipamentos</li><li>✅ API + Filiais</li></ul></div>
      </div>
    </div>
  )
}
