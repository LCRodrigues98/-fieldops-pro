 export default function Obrigado() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-[520px] w-full border border-zinc-200 rounded-[24px] p-10 text-center shadow-xl">
        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl mx-auto">✓</div>
        <h1 className="text-4xl font-black mt-6">Obrigado! 🎉</h1>
        <p className="text-zinc-600 mt-4">Seu pagamento foi recebido. Seu acesso ao FieldOps Pro será liberado em até 5 minutos no seu e-mail.</p>
        <div className="bg-zinc-50 rounded-xl p-4 mt-6 text-left text-sm">
          <div>✓ Acesso liberado</div>
          <div>✓ E-mail de confirmação enviado</div>
          <div>✓ Suporte 24h no WhatsApp</div>
        </div>
        <a href="/" className="mt-8 block h-11 leading-[44px] rounded-full bg-black text-white font-bold">Voltar para o início</a>
        <div className="text-xs text-zinc-400 mt-4">Qualquer dúvida: contato@fieldopspro.com</div>
      </div>
    </div>
  );
}
