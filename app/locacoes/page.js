export default function Locacoes() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* NAV igual do home */}
      <header className="border-b border-zinc-100">
        <div className="mx-auto max-w-[1240px] px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[8px] bg-black text-white flex items-center justify-center font-bold">⊞</div>
            <span className="font-black">FieldOps Pro</span>
            <span className="ml-4 text-xs bg-black text-white px-3 py-1 rounded-full">ENTERPRISE • R$597/mês</span>
          </div>
          <a href="/" className="text-sm">← Voltar</a>
        </div>
      </header>

      <div className="mx-auto max-w-[1240px] px-6 py-10">
        <h1 className="text-[40px] font-black tracking-tight">Controle de Locação</h1>
        <p className="text-zinc-500 mt-2">Gestão completa exclusiva Enterprise - equipamentos, contratos e faturamento</p>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="rounded-2xl border p-5"><div className="text-[11px] tracking-widest text-zinc-500">DISPONÍVEIS</div><div className="text-3xl font-black mt-2">12</div><div className="text-xs text-emerald-600 mt-1">+2 esta semana</div></div>
          <div className="rounded-2xl bg-black text-white p-5"><div className="text-[11px] tracking-widest opacity-60">LOCAÇÕES ATIVAS</div><div className="text-3xl font-black mt-2">4</div><div className="text-xs opacity-80 mt-1">R$ 8.430/mês</div></div>
          <div className="rounded-2xl border p-5"><div className="text-[11px] tracking-widest text-zinc-500">OCUPAÇÃO</div><div className="text-3xl font-black mt-2">78%</div><div className="h-1 bg-zinc-100 rounded mt-2"><div className="h-1 bg-black w-[78%] rounded"/></div></div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><div className="text-[11px] tracking-widest text-amber-700">DEVOLUÇÕES HOJE</div><div className="text-3xl font-black mt-2">3</div><div className="text-xs text-amber-700 mt-1">Atenção necessária</div></div>
        </div>

        <div className="mt-8 rounded-2xl border overflow-hidden">
          <div className="p-4 flex justify-between items-center border-b bg-zinc-50/50">
            <input placeholder="Buscar equipamento, código..." className="border rounded-full px-4 py-2 text-sm w-[320px] bg-white" />
            <div className="flex gap-2"><span className="px-3 py-1 rounded-full bg-black text-white text-xs">Todos</span><span className="px-3 py-1 rounded-full border text-xs">Disponível</span><span className="px-3 py-1 rounded-full border text-xs">Locado</span></div>
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">+ Nova Locação</button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-[11px] tracking-widest text-zinc-500 bg-zinc-50"><tr><td className="p-4">EQUIPAMENTO</td><td>CÓDIGO</td><td>DIÁRIA</td><td>STATUS</td><td>AÇÃO</td></tr></thead>
            <tbody>
              <tr className="border-t"><td className="p-4 font-medium">Betoneira 400L CSM</td><td className="font-mono text-xs">BT-400</td><td>R$ 85,00</td><td><span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium">Disponível</span></td><td><button className="border rounded-full px-3 py-1 text-xs">Ver</button></td></tr>
              <tr className="border-t"><td className="p-4 font-medium">Andaime Fachadeiro 1.5m</td><td className="font-mono text-xs">AN-150</td><td>R$ 45,00</td><td><span className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium">Locado</span></td><td><button className="border rounded-full px-3 py-1 text-xs">Ver</button></td></tr>
              <tr className="border-t"><td className="p-4 font-medium">Placa Vibratória 20kN</td><td className="font-mono text-xs">PV-20</td><td>R$ 120,00</td><td><span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-medium">Disponível</span></td><td><button className="border rounded-full px-3 py-1 text-xs">Ver</button></td></tr>
              <tr className="border-t"><td className="p-4 font-medium">Compressor 20 Pés</td><td className="font-mono text-xs">CP-20</td><td>R$ 250,00</td><td><span className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-medium">Manutenção</span></td><td><button className="border rounded-full px-3 py-1 text-xs">Ver</button></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
