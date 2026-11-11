'use client';
import { useState, useEffect } from 'react';

declare const fbq: (...args: unknown[]) => void;

function useContagem(minutos: number) {
  const [seg, setSeg] = useState(minutos * 60);
  useEffect(() => {
    const t = setInterval(() => setSeg(x => Math.max(0, x - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  return { mm: String(Math.floor(seg/60)).padStart(2,'0'), ss: String(seg%60).padStart(2,'0') };
}

export default function PaginaVendas() {
  const checkoutUrl = 'https://pay.cakto.com.br/6788a57';
  const trackCTA    = () => {};
  const { mm, ss }  = useContagem(15);

  return (
    <main>

      {/* ══ HERO — SEM BOTÃO ══ */}
      <header style={{background:'#FAF6EB',padding:'clamp(2rem,5svh,4rem) 1rem 1rem',textAlign:'center'}}>
        <div style={{maxWidth:680,margin:'0 auto'}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'#2D6BE4',color:'#fff',borderRadius:999,padding:'0.4rem 1rem',marginBottom:'1rem'}}>
            <span style={{fontSize:'1rem'}}>🃏</span>
            <span style={{fontSize:'0.78rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase'}}>Baralho Digital · 40 Histórias Sociais</span>
          </div>
          <h1 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.9rem,5vw,3.4rem)',lineHeight:1.1,margin:'0 0 1rem',color:'#1A3A6E'}}>
            Seu filho com TEA aprende sem você repetir a explicação cem vezes
          </h1>
          <p style={{color:'#555',fontSize:'1rem',marginBottom:'0.5rem'}}>Para: <strong>Pais e professores de crianças com TEA</strong></p>
          <p style={{color:'#8A7558',fontSize:'0.8rem',marginTop:'1.5rem'}}>👆 Deslize para ver o material</p>
        </div>

        {/* Carrossel de previews do PDF */}
        <div style={{maxWidth:800,margin:'1rem auto 0',overflowX:'hidden'}}>
          <div className="car-track">

          <div className="car-item">
            <img src="/preview-1.png" alt="Baralho de Histórias Sociais para TEA — página 1" />
          </div>
          <div className="car-item">
            <img src="/preview-2.png" alt="Baralho de Histórias Sociais para TEA — página 2" />
          </div>
          <div className="car-item">
            <img src="/preview-3.png" alt="Baralho de Histórias Sociais para TEA — página 3" />
          </div>
          </div>
        </div>
      </header>

      {/* ══ 4 VANTAGENS ══ */}
      <section className="bg-cream2" style={{padding:'3rem 1rem'}}>
        <div style={{maxWidth:680,margin:'0 auto'}}>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.5rem,4vw,2.2rem)',textAlign:'center',marginBottom:'2rem',color:'#1A3A6E'}}>
            Por que funciona
          </h2>
          <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
            {[
              {icon:'⚡', t:'Acesso imediato', d:'Receba tudo na hora, sem esperar aprovação manual'},
              {icon:'📱', t:'Em qualquer tela', d:'Funciona no celular, tablet ou computador'},
              {icon:'🎯', t:'Resultado direto', d:'Conteúdo prático, sem enrolação'},
              {icon:'🔒', t:'Risco zero', d:'7 dias de garantia total ou seu dinheiro de volta'},
            ].map(({icon,t,d}) => (
              <div key={t} style={{background:'#fff',borderRadius:12,padding:'1.25rem',boxShadow:'0 2px 10px rgba(0,0,0,.06)'}}>
                <span style={{fontSize:'1.5rem'}}>{icon}</span>
                <p style={{fontWeight:700,margin:'0.5rem 0 0.25rem',fontSize:'0.95rem'}}>{t}</p>
                <p style={{color:'#666',fontSize:'0.85rem',margin:0}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BÔNUS ══ */}
      <section style={{padding:'3rem 1rem',background:'#FAF6EB'}}>
        <div style={{maxWidth:680,margin:'0 auto'}}>
          <p style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'0.15em',color:'#2D6BE4',textTransform:'uppercase',textAlign:'center',marginBottom:'0.5rem'}}>
            Incluído na sua compra
          </p>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.5rem,4vw,2.2rem)',textAlign:'center',marginBottom:'2rem',color:'#1A3A6E'}}>
            +4 bônus inclusos
          </h2>
          <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>

        <article className="bonus-card">
          <div style={{height:180,overflow:'hidden'}}><img src="/bonus-01.webp" alt="Plano de 30 Dias" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
          <div style={{padding:'1.25rem'}}>
            <p className="bonus-num">BÔNUS 01</p>
            <h3 style={{margin:'0.25rem 0 0.5rem',fontSize:'1.05rem',lineHeight:1.3}}>Plano de 30 Dias</h3>
            <p style={{color:'#555',fontSize:'0.85rem',marginBottom:'0.75rem'}}>Roteiro semana a semana para introduzir as histórias sociais com consistência e leveza.</p>
            <ul className="blist" style={{fontSize:'0.85rem',lineHeight:1.7,color:'#333'}}>
              <li>Plano prático sem sobrecarregar</li>
              <li>Progressão gradual por bloco</li>
              <li>Dicas de aplicação por dia</li>
            </ul>
          </div>
        </article>

        <article className="bonus-card">
          <div style={{height:180,overflow:'hidden'}}><img src="/bonus-02.webp" alt="Figurinhas de Conquista" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
          <div style={{padding:'1.25rem'}}>
            <p className="bonus-num">BÔNUS 02</p>
            <h3 style={{margin:'0.25rem 0 0.5rem',fontSize:'1.05rem',lineHeight:1.3}}>Figurinhas de Conquista</h3>
            <p style={{color:'#555',fontSize:'0.85rem',marginBottom:'0.75rem'}}>Reforce comportamentos positivos com um sistema visual de recompensas que a criança ama.</p>
            <ul className="blist" style={{fontSize:'0.85rem',lineHeight:1.7,color:'#333'}}>
              <li>Motivação sem pressão</li>
              <li>Autonomia progressiva</li>
              <li>Fácil de aplicar em casa</li>
            </ul>
          </div>
        </article>

        <article className="bonus-card">
          <div style={{height:180,overflow:'hidden'}}><img src="/bonus-03.webp" alt="Cartão de Bolsa" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
          <div style={{padding:'1.25rem'}}>
            <p className="bonus-num">BÔNUS 03</p>
            <h3 style={{margin:'0.25rem 0 0.5rem',fontSize:'1.05rem',lineHeight:1.3}}>Cartão de Bolsa: Primeiros Socorros Emocionais</h3>
            <p style={{color:'#555',fontSize:'0.85rem',marginBottom:'0.75rem'}}>Um cartão pequeno que você leva na bolsa: o que fazer passo a passo quando bate a crise.</p>
            <ul className="blist" style={{fontSize:'0.85rem',lineHeight:1.7,color:'#333'}}>
              <li>Guia rápido para momentos difíceis</li>
              <li>Linguagem clara e objetiva</li>
              <li>Funciona em qualquer ambiente</li>
            </ul>
          </div>
        </article>

        <article className="bonus-card">
          <div style={{height:180,overflow:'hidden'}}><img src="/bonus-04.webp" alt="Checklist de Rotina Matinal" style={{width:'100%',height:'100%',objectFit:'cover'}}/></div>
          <div style={{padding:'1.25rem'}}>
            <p className="bonus-num">BÔNUS 04</p>
            <h3 style={{margin:'0.25rem 0 0.5rem',fontSize:'1.05rem',lineHeight:1.3}}>Checklist de Rotina Matinal</h3>
            <p style={{color:'#555',fontSize:'0.85rem',marginBottom:'0.75rem'}}>Rotina visual passo a passo para começar o dia sem conflitos — do acordar ao sair de casa.</p>
            <ul className="blist" style={{fontSize:'0.85rem',lineHeight:1.7,color:'#333'}}>
              <li>Manhãs mais tranquilas</li>
              <li>A criança segue sozinha</li>
              <li>Reduz a repetição de ordens</li>
            </ul>
          </div>
        </article>
          </div>
        </div>
      </section>

      {/* ══ COMO É ENTREGUE ══ */}
      <section style={{padding:'2.5rem 1rem',background:'#EEF4FF',textAlign:'center'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <p style={{fontSize:'0.75rem',fontWeight:700,letterSpacing:'0.15em',color:'#2D6BE4',textTransform:'uppercase',marginBottom:'0.5rem'}}>Como você recebe</p>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.4rem,4vw,2rem)',color:'#1A3A6E',marginBottom:'1.5rem'}}>
            Baralho Digital com 40 Cartas
          </h2>
          <div style={{display:'grid',gap:'0.75rem',gridTemplateColumns:'repeat(auto-fit,minmax(170px,1fr))'}}>
            {[
              {icon:'📲',t:'PDF pronto para usar',d:'Abra no celular, tablet ou computador — sem instalar nada'},
              {icon:'🖨️',t:'Pode imprimir',d:'Formato A4 com 6 cartas por página, pronto para plastificar'},
              {icon:'📂',t:'40 histórias sociais',d:'4 blocos: Escola, Casa, Lugares Públicos e Emoções'},
              {icon:'⚡',t:'Acesso imediato',d:'Link no e-mail assim que o pagamento for confirmado'},
            ].map(({icon,t,d}) => (
              <div key={t} style={{background:'#fff',borderRadius:12,padding:'1rem',boxShadow:'0 2px 8px rgba(45,107,228,.1)',textAlign:'left'}}>
                <span style={{fontSize:'1.4rem'}}>{icon}</span>
                <p style={{fontWeight:700,fontSize:'0.88rem',margin:'0.4rem 0 0.2rem',color:'#1A3A6E'}}>{t}</p>
                <p style={{color:'#666',fontSize:'0.78rem',margin:0,lineHeight:1.4}}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GARANTIA ══ */}
      <section style={{padding:'3rem 1rem',background:'#FAF6EB',textAlign:'center'}}>
        <div style={{maxWidth:480,margin:'0 auto'}}>
          <span style={{fontSize:'3rem'}}>🛡️</span>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.4rem,4vw,2rem)',margin:'0.75rem 0 0.5rem',color:'#1A3A6E'}}>
            Garantia de 7 dias
          </h2>
          <p style={{color:'#555',fontSize:'0.95rem',maxWidth:380,margin:'0 auto'}}>
            Se em <strong>7 dias</strong> você não estiver satisfeito, devolvemos
            <strong> 100% do seu investimento</strong>. Sem perguntas, sem burocracia.
          </p>
        </div>
      </section>

      {/* ══ OFERTA / CHECKOUT ══ */}
      <section style={{padding:'3.5rem 1rem',background:'#1A3A6E',color:'#fff',textAlign:'center'}}>
        <div style={{maxWidth:520,margin:'0 auto'}}>

          {/* Timer */}
          <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.15em',opacity:.7,textTransform:'uppercase',marginBottom:'0.5rem'}}>
            ⏱ Oferta expira em:
          </p>
          <div style={{display:'flex',justifyContent:'center',gap:8,marginBottom:'0.5rem'}}>
            {[{v:mm,l:'min'},{v:ss,l:'seg'}].map(({v,l}) => (
              <div key={l} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <span style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'2.8rem',background:'rgba(255,255,255,.1)',borderRadius:10,padding:'0.3rem 0.8rem',lineHeight:1.1}}>{v}</span>
                <span style={{fontSize:'0.65rem',opacity:.6,marginTop:3}}>{l}</span>
              </div>
            ))}
          </div>
          <p style={{fontSize:'0.85rem',opacity:.75,marginBottom:'2rem'}}>O preço <strong>vai subir</strong> quando o cronômetro zerar</p>

          {/* O que resolve */}
          <div style={{background:'rgba(255,255,255,.06)',borderRadius:16,padding:'1.25rem 1.5rem',marginBottom:'2rem',textAlign:'left'}}>
            <p style={{fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.15em',color:'#90B4FF',textTransform:'uppercase',marginBottom:'0.75rem'}}>O que este material resolve</p>
            {[
              '✔ Reduz crises e birras ao antecipar situações desconhecidas',
              '✔ Facilita a comunicação sem depender só da fala',
              '✔ Ajuda a criança a entender regras sociais sem repetição',
              '✔ Suporta rotinas em casa, escola e lugares públicos',
              '✔ Trabalha emoções difíceis: raiva, frustração, ansiedade',
              '✔ Ferramenta validada pela metodologia Carol Gray',
            ].map(t => (
              <p key={t} style={{fontSize:'0.88rem',lineHeight:1.6,margin:'0 0 0.3rem',opacity:.9}}>{t}</p>
            ))}
          </div>

          {/* Barra 71% */}
          <div style={{marginBottom:'2rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:'0.7rem',opacity:.7,marginBottom:4}}>
              <span>Vagas disponíveis</span><span>71% preenchidas</span>
            </div>
            <div style={{background:'rgba(255,255,255,.2)',borderRadius:999,height:10}}>
              <div style={{background:'#2D6BE4',width:'71%',height:10,borderRadius:999}} />
            </div>
            <p style={{fontSize:'0.65rem',opacity:.5,marginTop:4}}>Restam poucas vagas no preço de lançamento</p>
          </div>

          <p style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'1rem',letterSpacing:'0.08em',color:'#90B4FF',marginBottom:'1.5rem'}}>
            🔥 APROVEITA A OFERTA DE LANÇAMENTO!
          </p>

          {/* Preço */}
          <p style={{fontSize:'0.9rem',opacity:.6,textDecoration:'line-through',marginBottom:2}}>De R$ 54</p>
          <p style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(3rem,10vw,5rem)',lineHeight:1,margin:'0 0 0.25rem'}}>
            R$ 17,90
          </p>
          <p style={{fontSize:'0.8rem',opacity:.65,marginBottom:'2rem'}}>pagamento único · acesso imediato</p>

          {/* Entregáveis */}
          <ul style={{listStyle:'none',padding:'1.25rem 1.5rem',margin:'0 0 2rem',background:'rgba(255,255,255,.08)',borderRadius:16,textAlign:'left'}}>
              <li style={{padding:'0.4rem 0',borderBottom:'1px solid rgba(255,255,255,.12)',fontSize:'0.9rem'}}>📂 <strong>40 Histórias Sociais</strong> em formato de baralho digital (PDF)</li>
              <li style={{padding:'0.4rem 0',borderBottom:'1px solid rgba(255,255,255,.12)',fontSize:'0.9rem'}}>🏫 Bloco Escola — 10 histórias</li>
              <li style={{padding:'0.4rem 0',borderBottom:'1px solid rgba(255,255,255,.12)',fontSize:'0.9rem'}}>🏠 Bloco Casa — 10 histórias</li>
              <li style={{padding:'0.4rem 0',borderBottom:'1px solid rgba(255,255,255,.12)',fontSize:'0.9rem'}}>🛒 Bloco Lugares Públicos — 10 histórias</li>
              <li style={{padding:'0.4rem 0',borderBottom:'1px solid rgba(255,255,255,.12)',fontSize:'0.9rem'}}>💜 Bloco Emoções e Comportamentos — 10 histórias</li>
              <li style={{padding:'0.4rem 0',borderBottom:'1px solid rgba(255,255,255,.12)',fontSize:'0.9rem'}}>🎁 Bônus 01 · Plano de 30 Dias</li>
              <li style={{padding:'0.4rem 0',borderBottom:'1px solid rgba(255,255,255,.12)',fontSize:'0.9rem'}}>🌟 Bônus 02 · Figurinhas de Conquista</li>
              <li style={{padding:'0.4rem 0',borderBottom:'1px solid rgba(255,255,255,.12)',fontSize:'0.9rem'}}>🃏 Bônus 03 · Cartão de Bolsa: Primeiros Socorros Emocionais</li>
              <li style={{padding:'0.4rem 0',fontSize:'0.9rem'}}>☀️ Bônus 04 · Checklist de Rotina Matinal</li>
          </ul>

          {/* Botão */}
          <a href={checkoutUrl} onClick={trackCTA} className="btn-cta">
            🔓 LIBERAR ACESSO AGORA
          </a>
          <p style={{fontSize:'0.75rem',opacity:.45,marginTop:'1rem'}}>🔒 Pagamento seguro · Garantia de 7 dias</p>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="bg-cream2" style={{padding:'3rem 1rem'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <h2 style={{fontFamily:"'Anton','Impact',sans-serif",fontSize:'clamp(1.4rem,4vw,2rem)',textAlign:'center',marginBottom:'1.5rem',color:'#1A3A6E'}}>
            Dúvidas frequentes
          </h2>
          {[
            {p:'Como recebo o acesso?', r:'Após a confirmação do pagamento, você recebe as instruções por e-mail imediatamente.'},
            {p:'Funciona para iniciantes?', r:'Sim, o conteúdo foi criado para funcionar independentemente da sua experiência anterior.'},
            {p:'Por quanto tempo tenho acesso?', r:'O acesso é vitalício — estude no seu próprio ritmo, quando quiser.'},
            {p:'Como funciona a garantia?', r:'Basta enviar um e-mail dentro de 7 dias e devolvemos 100%, sem perguntas.'},
          ].map(({p,r}) => (
            <div key={p} style={{borderBottom:'1px solid #E8E0D0',padding:'1rem 0'}}>
              <p style={{fontWeight:700,marginBottom:'0.3rem',color:'#1A3A6E'}}>{p}</p>
              <p style={{color:'#555',fontSize:'0.9rem',margin:0}}>{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section style={{padding:'3rem 1rem',background:'#1A3A6E',textAlign:'center'}}>
        <div style={{maxWidth:400,margin:'0 auto'}}>
          <p style={{color:'#fff',opacity:.7,fontSize:'0.9rem',marginBottom:'1.5rem'}}>Não perca o preço de lançamento</p>
          <a href={checkoutUrl} onClick={trackCTA} className="btn-cta">
            🔓 LIBERAR ACESSO AGORA
          </a>
          <p style={{color:'#fff',opacity:.4,fontSize:'0.75rem',marginTop:'1rem'}}>🛡️ Garantia 7 dias · Pagamento seguro</p>
        </div>
      </section>

      {/* ══ RODAPÉ ══ */}
      <footer style={{padding:'2rem 1rem',textAlign:'center',background:'#F3ECD9',color:'#8A7558',fontSize:'0.78rem'}}>
        <div style={{display:'flex',justifyContent:'center',gap:'1.5rem',marginBottom:'0.5rem'}}>
          <a href="/privacidade" style={{color:'#8A7558'}}>Política de Privacidade</a>
          <a href="/termos" style={{color:'#8A7558'}}>Termos de Uso</a>
        </div>
        <p style={{margin:0}}>© {new Date().getFullYear()} Baralho de Histórias Sociais para TEA. Todos os direitos reservados.</p>
        <p style={{margin:'0.25rem 0 0',opacity:.6}}>Os resultados variam conforme a dedicação de cada pessoa.</p>
      </footer>

    </main>
  );
}
