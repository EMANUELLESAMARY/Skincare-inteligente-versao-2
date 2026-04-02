/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CheckCircle2, 
  Smartphone, 
  Laptop, 
  Microscope, 
  ClipboardList, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Users, 
  Star,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Thermometer,
  Hourglass,
  Gift,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Reusable UI Components ---

const CTAButton = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 0, 128, 0.5)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={cn(
      "bg-gradient-to-r from-[#FF0080] to-[#7000FF] hover:from-[#E60073] hover:to-[#6000E6] text-white font-black py-5 px-10 rounded-full shadow-2xl transition-all duration-300 uppercase tracking-widest text-sm md:text-lg border-b-4 border-black/20",
      className
    )}
  >
    {children}
  </motion.button>
);

const SectionHeading = ({ children, className, light = false }: { children: React.ReactNode, className?: string, light?: boolean }) => (
  <h2 className={cn(
    "text-3xl md:text-4xl font-bold mb-6 tracking-tight",
    light ? "text-white" : "text-slate-900",
    className
  )}>
    {children}
  </h2>
);

// --- Page Sections ---

const Hero = () => (
  <section className="relative bg-[#0F051D] pt-24 pb-40 px-6 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF0080] rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#7000FF] rounded-full blur-[130px] animate-pulse" />
    </div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block mb-8">
          <span className="bg-gradient-to-r from-[#FF0080] to-[#7000FF] text-white text-sm font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(255,0,128,0.4)]">
            SKINCARE INTELIGENTE
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
          O primeiro sistema de prescrição <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7000FF]">100% personalizado</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-lg leading-relaxed">
          Crie sua rotina completa com produtos reais, ordem correta e previsão clínica de resultados. Chega de tentativa e erro.
        </p>
        <div className="space-y-5 mb-12">
          <div className="flex items-center gap-4 text-slate-100 text-lg">
            <div className="bg-[#FF0080] rounded-full p-1">
              <CheckCircle2 className="text-white w-5 h-5" />
            </div>
            <span className="font-medium">Baseado em protocolos médicos reais</span>
          </div>
          <div className="flex items-center gap-4 text-slate-100 text-lg">
            <div className="bg-[#7000FF] rounded-full p-1">
              <CheckCircle2 className="text-white w-5 h-5" />
            </div>
            <span className="font-medium">Inteligência Artificial treinada por especialista</span>
          </div>
        </div>
        <CTAButton className="w-full md:w-auto">
          Quero me inscrever agora
        </CTAButton>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfad450216?q=80&w=1000&auto=format&fit=crop" 
            alt="Skincare Concept" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-2 rounded-full">
              <Users className="text-green-600 w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">+50.000 Alunas</p>
              <p className="text-xs text-slate-500">Transformadas pelo método</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Mockup = () => (
  <section className="py-32 px-6 bg-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF0080]/5 rounded-full blur-3xl" />
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <div className="relative">
            <div className="bg-slate-900 rounded-[2.5rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-slate-800">
              <div className="bg-white rounded-[1.5rem] overflow-hidden relative">
                <img 
                  src="https://i.postimg.cc/cJ4jQCyy/squo_2.jpg" 
                  alt="Interface do Sistema" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF0080]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7000FF]/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FF0080] font-black tracking-widest text-sm uppercase">Tecnologia Exclusiva</span>
          </div>
          <SectionHeading className="text-4xl md:text-5xl">O que é o <span className="text-[#FF0080]">SKINCARE INTELIGENTE</span>?</SectionHeading>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Não é apenas um PDF estático. É um ecossistema inteligente que utiliza algoritmos treinados com milhares de casos clínicos reais para diagnosticar e prescrever sua rotina ideal.
          </p>
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-[#FF0080]/10 p-2 rounded-lg text-[#FF0080]">
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Acompanhamento constante e ajustes em tempo real conforme sua pele evolui.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#7000FF]/10 p-2 rounded-lg text-[#7000FF]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-slate-700 font-medium leading-relaxed">Segurança de um método desenvolvido por médica especialista.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#FF0080] font-black text-lg uppercase tracking-tighter">
            <Sparkles className="w-6 h-6" />
            <span>Acesso Vitalício ao Sistema</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-32 px-6 bg-gradient-to-b from-[#0F051D] to-[#1A0B2E] text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#FF0080_0%,transparent_70%)]" />
    </div>
    
    <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
      <SectionHeading light className="text-4xl md:text-5xl">Benefícios do Sistema Médico</SectionHeading>
      <div className="w-24 h-1.5 bg-gradient-to-r from-[#FF0080] to-[#7000FF] mx-auto rounded-full" />
    </div>
    
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
      {[
        { title: "Estratégia Clínica", desc: "Pare de seguir rotinas prontas da internet e use o que sua pele realmente precisa.", icon: <Microscope /> },
        { title: "Personalização Real", desc: "IA treinada com protocolos médicos para analisar seu metabolismo e tipo de pele.", icon: <Zap /> },
        { title: "Previsão de Resultados", desc: "Saiba exatamente quando esperar melhoras na textura, acne e manchas.", icon: <Clock /> },
        { title: "Economia Inteligente", desc: "Invista apenas no que funciona. Sem desperdício com produtos caros e inúteis.", icon: <ShieldCheck /> }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          className="flex gap-6 items-start bg-white/5 p-8 rounded-3xl border border-white/10 transition-all duration-300"
        >
          <div className="bg-gradient-to-br from-[#FF0080] to-[#7000FF] p-3 rounded-2xl shadow-[0_0_15px_rgba(255,0,128,0.3)]">
            {React.cloneElement(item.icon as React.ReactElement, { size: 24, className: "text-white" })}
          </div>
          <div>
            <h4 className="text-2xl font-black mb-3 text-white">{item.title}</h4>
            <p className="text-slate-300 leading-relaxed text-lg">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
    
    <div className="text-center mt-20">
      <CTAButton>Quero meu diagnóstico agora</CTAButton>
    </div>
  </section>
);

const Impact = () => (
  <section className="py-24 px-6 bg-gradient-to-r from-[#FF0080] to-[#7000FF] text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto relative z-10"
    >
      <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none drop-shadow-2xl">
        Sem tentativa e erro. Sem gastar fortunas. Sem pele irritada.
      </h2>
      <p className="text-white/80 mt-6 font-bold tracking-widest uppercase text-sm md:text-base">A revolução do skincare chegou.</p>
    </motion.div>
  </section>
);

const WhatYouReceive = () => (
  <section className="py-24 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SectionHeading>O que você vai receber</SectionHeading>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <ClipboardList />, title: "Rotina Completa", desc: "Cronograma manhã/noite com nomes comerciais reais e ordem correta." },
          { icon: <Zap />, title: "Suplementação Oral", desc: "Estratégia personalizada para tratar a pele de dentro para fora." },
          { icon: <Microscope />, title: "Lista Inteligente", desc: "Somente o essencial com justificativa médica e sugestões de compra." },
          { icon: <Thermometer />, title: "Termômetro SOS", desc: "Monitoramento de inflamação com ajustes imediatos de conduta." }
        ].map((card, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 bg-[#FF0080]/10 rounded-xl flex items-center justify-center text-[#FF0080] mb-6">
              {React.cloneElement(card.icon as React.ReactElement, { size: 28 })}
            </div>
            <h4 className="text-lg font-bold mb-3 text-slate-900">{card.title}</h4>
            <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TargetAudience = () => (
  <section className="py-32 px-6 bg-[#0F051D] text-white relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7000FF]/10 rounded-full blur-[100px]" />
    <div className="max-w-7xl mx-auto relative z-10">
      <SectionHeading light className="text-center mb-20 text-4xl md:text-5xl">
        O <span className="text-[#FF0080]">SKINCARE INTELIGENTE</span> foi feito para você que:
      </SectionHeading>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Já comprou produtos por 'modismo' e não viu resultado",
          "Tem a pele que oscila, inflama ou sensibiliza fácil",
          "Sente-se perdida com excesso de informação na internet",
          "Quer uma rotina prática e direta, sem enrolação",
          "Deseja envelhecer com saúde e estratégia biológica",
          "Busca segurança médica e tecnologia de ponta"
        ].map((text, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#FF0080]/50 transition-colors group"
          >
            <div className="w-10 h-10 bg-[#FF0080] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,0,128,0.5)] group-hover:scale-110 transition-transform">
              <CheckCircle2 className="text-white w-6 h-6" />
            </div>
            <p className="text-slate-200 font-bold text-lg leading-tight">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Bonuses = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SectionHeading>Bônus Exclusivos</SectionHeading>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { title: "Roteiro Sono Restaurador", desc: "A estratégia para otimizar a regeneração noturna da sua pele." },
          { title: "Acesso VIP Telegram", desc: "Comunidade ativa com suporte direto e atualizações constantes." }
        ].map((bonus, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Gift size={80} className="text-[#FF0080]" />
            </div>
            <span className="text-[#FF0080] font-bold text-xs uppercase tracking-widest mb-2 block">Bônus #0{i+1}</span>
            <h4 className="text-xl font-bold mb-3 text-slate-900">{bonus.title}</h4>
            <p className="text-slate-600 text-sm">{bonus.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <CTAButton>Quero garantir minha vaga</CTAButton>
      </div>
    </div>
  </section>
);

const TestimonialsGallery = () => (
  <section className="py-24 px-6 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SectionHeading>Resultados Reais</SectionHeading>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Veja a transformação de quem já utiliza o Skincare Inteligente e parou de gastar com o que não funciona.
        </p>
      </div>

      {/* Before and After */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
        <div className="space-y-4">
          <p className="text-center font-bold text-slate-900 uppercase tracking-widest text-sm">Antes</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <img src="https://i.postimg.cc/pdMS2Hst/JE_1.jpg" alt="Antes" className="w-full h-auto" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-center font-bold text-[#FF0080] uppercase tracking-widest text-sm">Depois</p>
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#FF0080]/20">
            <img src="https://i.postimg.cc/63YbLGtN/JE_2.jpg" alt="Depois" className="w-full h-auto" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>

      {/* Other Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {[
          "https://i.postimg.cc/RZwrq9qs/essa_1.jpg",
          "https://i.postimg.cc/Jh8fkgkt/essa_2.jpg"
        ].map((img, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white"
          >
            <img src={img} alt={`Depoimento ${i+1}`} className="w-full h-auto" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="py-32 px-6 bg-[#0F051D] text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#FF0080] to-[#7000FF] rounded-full blur-[180px] animate-pulse" />
    </div>
    
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="bg-white text-slate-900 rounded-[3rem] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(255,0,128,0.3)] border-t-8 border-[#FF0080]">
        <div className="text-center mb-12">
          <span className="bg-[#FF0080]/10 text-[#FF0080] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-4 inline-block">Oferta Exclusiva</span>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Garanta seu acesso agora</h3>
          <p className="text-slate-500 font-medium">O <span className="text-[#FF0080] font-bold">SKINCARE INTELIGENTE</span> é o seu último investimento em pele.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            "Sistema de IA Personalizado",
            "Protocolo de Suplementação Oral",
            "Termômetro da Inflamação Cutânea",
            "Índice de Longevidade Cutânea™",
            "Lista Inteligente de Produtos",
            "Acesso Vitalício e Atualizações",
            "Grupo VIP no Telegram",
            "Bônus: Roteiro Sono Restaurador"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-2">
              <div className="bg-green-100 p-1 rounded-full">
                <CheckCircle2 className="text-green-600 w-4 h-4 shrink-0" />
              </div>
              <span className="font-bold text-slate-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
          <p className="text-slate-400 line-through text-xl mb-2">De R$ 997,00</p>
          <div className="flex flex-col items-center justify-center mb-8">
            <span className="text-slate-900 font-black text-3xl uppercase tracking-tighter">12x de</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7000FF] font-black text-7xl md:text-8xl leading-none">R$ 67,90</span>
          </div>
          <p className="text-slate-900 font-black text-2xl mb-10">ou R$ 697,00 à vista</p>
          
          <CTAButton className="w-full py-8 text-2xl shadow-[0_20px_40px_-10px_rgba(255,0,128,0.4)]">
            Quero meu diagnóstico agora
          </CTAButton>
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-500 font-bold text-sm uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-green-500" />
              <span>7 Dias de Garantia</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-yellow-500" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExpertBio = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://i.postimg.cc/59HbDx7k/IMG_2271_(squo1).jpg" 
            alt="Dra. Emanuelle Samary" 
            className="w-full h-auto transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-[#FF0080] text-white p-6 rounded-2xl shadow-xl">
          <p className="font-bold text-xl">Dra. Emanuelle Samary</p>
          <p className="text-sm opacity-80">Médica Especialista</p>
        </div>
      </div>
      
      <div>
        <SectionHeading>Prazer, eu sou Dra. Emanuelle Samary</SectionHeading>
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            Médica desde 2013, construí minha trajetória unindo Estética, Dermatologia e Nutrologia. No consultório, percebi um padrão: pessoas confusas, gastando muito e sem resultados.
          </p>
          <p>
            Para resolver isso, treinei uma Inteligência Artificial com meus próprios protocolos e raciocínio clínico. O resultado é um sistema que une experiência médica e tecnologia para entregar personalização real.
          </p>
          <p className="font-bold text-slate-900">
            Porque cuidar da pele não deveria ser tentativa e erro.
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-[#FF0080] font-black text-3xl">10+</p>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Anos de Experiência</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl">
            <p className="text-[#FF0080] font-black text-3xl">50k</p>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Vidas Transformadas</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200 text-center">
    <div className="max-w-7xl mx-auto">
      <p className="text-slate-400 text-sm">
        © 2026 Skincare Inteligente - Dra. Emanuelle Samary. Todos os direitos reservados.
      </p>
      <div className="mt-4 flex justify-center gap-6 text-slate-400 text-xs">
        <a href="#" className="hover:text-[#FF0080]">Termos de Uso</a>
        <a href="#" className="hover:text-[#FF0080]">Privacidade</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
      <Hero />
      <Mockup />
      <Benefits />
      <Impact />
      <WhatYouReceive />
      <TargetAudience />
      <Bonuses />
      <TestimonialsGallery />
      <Pricing />
      <ExpertBio />
      <Footer />
    </div>
  );
}
