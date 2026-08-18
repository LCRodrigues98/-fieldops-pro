export default function Obrigado() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-[520px] w-full text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-3xl">✓</div>
        <h1 className="text-4xl font-black mt-6 tracking-tight">Pagamento aprovado!</h1>
        <p className="text-zinc-600 mt-3">Seu FieldOps Pro foi liberado. Em 5 minutos você recebe o acesso no e-mail.</p>
        <div className="mt-8 p-4 bg-zinc-50 border rounded-xl text-left text-sm">
          <b>O que acontece agora:</b><br/>
          1. Recebe e-mail do Mercado Pago<br/>
          2. Nosso sistema libera seu login<br/>
          3. Você acessa fieldops-pro-five.vercel.app/login
        </div>
        <a href="/" className="inline-block mt-8 bg-black text-white px-8 h-12 rounded-full font-bold leading-[48px]">Voltar para home</a>
      </div>
    </div>
  );
}
