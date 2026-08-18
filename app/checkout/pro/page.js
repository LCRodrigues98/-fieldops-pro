"use client";
import { useState } from "react";
export default function Checkout(){
  const [loading,setLoading]=useState(false);
  async function pagar(){
    setLoading(true);
    const res=await fetch("/api/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({plan:"pro"})});
    const {url}=await res.json(); window.location.href=url;
  }
  return (<div className="min-h-screen flex items-center justify-center p-6 bg-white"><div className="max-w-[440px] w-full border-2 border-black rounded-[24px] p-8 shadow-xl"><div className="text-[10px] text-zinc-500">CHECKOUT SEGURO • MAIS VENDIDO</div><h1 className="text-3xl font-black mt-2">PRO</h1><div className="text-4xl font-black mt-4">R$197<span className="text-base font-normal text-zinc-500">/mês</span></div><button onClick={pagar} disabled={loading} className="w-full mt-6 bg-black text-white h-[48px] rounded-full font-bold">{loading?"Redirecionando...":"Pagar com Mercado Pago"}</button></div></div>);
}
