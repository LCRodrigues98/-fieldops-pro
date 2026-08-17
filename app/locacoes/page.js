export default function Locacoes(){
  return (
    <div style={{background:'#0f1f3c', minHeight:'100vh', color:'white', padding:'20px'}}>
      <h1>🏗️ Controle de Locação - Enterprise R$597</h1>
      <p>Este módulo só aparece para assinantes ENTERPRISE</p>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px', marginTop:'20px'}}>
        <div style={{background:'#162a4d', padding:'20px', borderRadius:'12px'}}>📦 Equipamentos Disponíveis: 12</div>
        <div style={{background:'#162a4d', padding:'20px', borderRadius:'12px'}}>📅 Locações Ativas: 4</div>
      </div>
      <button style={{marginTop:'20px', padding:'12px 24px', background:'#4da3ff', border:'none', borderRadius:'8px', fontWeight:'bold'}}>+ Nova Locação</button>
    </div>
  )
}
