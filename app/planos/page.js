'use client'
export default function Planos(){
  const planos = [
    {nome:'BÁSICO', preco:'R$ 97', por:'/mês', id:'basico', features:['Até 5 técnicos','OS ilimitadas','App do técnico','Suporte WhatsApp']},
    {nome:'PRO', preco:'R$ 197', por:'/mês', id:'pro', destaque:true, features:['Até 15 técnicos','Relatórios Financeiros','Assinatura Digital','White Label','Suporte Prioritário']},
    {nome:'ENTERPRISE', preco:'R$ 597', por:'/mês', id:'enterprise', features:['Técnicos ILIMITADOS','SISTEMA DE LOCAÇÃO','API + Filiais','Gestor de Conta','Tudo do PRO']},
  ]
  return (
    <div style={{background:'#0f1f3c', minHeight:'100vh', color:'white', padding:'40px 20px', fontFamily:'sans-serif'}}>
      <h1 style={{textAlign:'center', fontSize:'32px'}}>🚀 Seu teste gratuito encerrou!</h1>
      <p style={{textAlign:'center', opacity:.8}}>Escolha um plano para continuar</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px', maxWidth:'1000px', margin:'40px auto'}}>
        {planos.map(p=>(
          <div key={p.id} style={{background: p.destaque ? '#1a3a6b' : '#162a4d', border: p.destaque ? '2px solid #4da3ff' : '1px solid #2a4a7a', borderRadius:'16px', padding:'24px', textAlign:'center'}}>
            {p.destaque && <div style={{background:'#4da3ff', color:'black', borderRadius:'20px', padding:'4px 12px', display:'inline-block', fontSize:'12px', fontWeight:'bold', marginBottom:'10px'}}>MAIS VENDIDO</div>}
            <h2>{p.nome}</h2>
            <div style={{fontSize:'36px', fontWeight:'bold'}}>{p.preco}<span style={{fontSize:'14px', opacity:.7}}>{p.por}</span></div>
            <ul style={{textAlign:'left', margin:'20px 0', lineHeight:'2'}}>{p.features.map(f=><li key={f}>✅ {f}</li>)}</ul>
            <a href={`https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SEU_PREF_ID_${p.id.toUpperCase()}`} style={{display:'block', background:'#fff', color:'#0f1f3c', padding:'12px', borderRadius:'8px', textDecoration:'none', fontWeight:'bold'}}>Assinar {p.nome}</a>
          </div>
        ))}
      </div>
    </div>
  )
}
