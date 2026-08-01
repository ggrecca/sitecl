import Image from "next/image";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import {
  contact,
  differentials,
  industrialChemicals,
  navigation,
  segments,
  solutions,
  supplyCards,
  waterApplications,
} from "@/data/site-content";

const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent("Olá, gostaria de conversar sobre uma necessidade da minha operação.")}`;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Araça Cloro Soluções e Serviços",
    email: contact.email,
    telephone: contact.whatsappDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Anhanguera, 485",
      addressLocality: "Araçatuba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <Image
            className="hero-photo"
            src="/images/hero-treatment-facility.webp"
            alt="Instalação industrial de tratamento de águas com tanques e tubulações em aço inoxidável"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow--light"><span aria-hidden="true" /> Araça Cloro Soluções e Serviços</p>
              <h1 id="hero-title">Soluções químicas para a continuidade da sua operação.</h1>
              <p className="hero-description">
                Produtos químicos, tratamento de águas, equipamentos, insumos e suporte técnico para processos industriais.
              </p>
              <div className="hero-actions">
                <a className="button button--bright" href={whatsappLink} target="_blank" rel="noreferrer">
                  Falar pelo WhatsApp <Arrow />
                </a>
                <a className="text-link text-link--light" href="#solucoes">
                  Conhecer soluções <Arrow />
                </a>
              </div>
              <div className="hero-scope" aria-label="Frentes de atuação">
                <span>Processos industriais</span>
                <span>Tratamento de águas</span>
                <span>Equipamentos</span>
              </div>
            </div>
            <p className="hero-reference" aria-hidden="true">SOLUÇÕES E SERVIÇOS<br /><strong>01</strong></p>
          </div>
        </section>

        <section className="section about" id="empresa" aria-labelledby="about-title">
          <div className="shell about-grid">
            <SectionHeading eyebrow="A empresa" title="Conhecimento aplicado à rotina industrial." />
            <div className="about-copy">
              <p id="about-title" className="lead">
                A Araça Cloro Soluções e Serviços atua com soluções químicas para processos industriais, atendendo rotinas de produção, operação, manutenção, utilidades e tratamento de águas.
              </p>
              <p>
                O trabalho reúne produtos, equipamentos, insumos e suporte técnico alinhados à necessidade de cada cliente, com orientação de aplicação para apoiar a continuidade operacional.
              </p>
              <a className="text-link" href="#contato">Conheça nossos canais de atendimento <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="section solutions" id="solucoes" aria-labelledby="solutions-title">
          <div className="shell">
            <SectionHeading
              eyebrow="Linhas de atuação"
              title="Soluções que se conectam à sua operação."
              description="Uma seleção das principais frentes do portfólio. Para necessidades específicas, a equipe comercial orienta a tecnologia mais adequada."
            />
            <div className="solution-grid" id="solutions-title">
              {solutions.map((solution) => (
                <article className="solution-card" key={solution.number}>
                  <div className="card-number">{solution.number}</div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <ul>{solution.examples.map((example) => <li key={example}>{example}</li>)}</ul>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label={`Falar sobre ${solution.title}`}>Falar com um representante <Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section water" id="aguas" aria-labelledby="water-title">
          <div className="shell water-layout">
            <div className="water-intro">
              <SectionHeading eyebrow="Tratamento de águas" title="Apoio técnico para utilidades e processos." />
              <p id="water-title">Atuação organizada para as necessidades de caldeiras, torres de resfriamento, águas e efluentes industriais e osmose reversa.</p>
              <a className="button button--outline" href={whatsappLink} target="_blank" rel="noreferrer">Converse sobre sua aplicação <Arrow /></a>
            </div>
            <div className="water-grid">
              <figure className="water-photo">
                <Image
                  src="/images/water-treatment-reverse-osmosis.webp"
                  alt="Sistema industrial de tratamento de águas com tanques, tubulações e unidade de osmose reversa"
                  fill
                  sizes="(max-width: 880px) 100vw, 56vw"
                />
                <figcaption>Tratamento de águas e efluentes · Osmose reversa</figcaption>
              </figure>
              {waterApplications.map((application, index) => (
                <article className="water-card" key={application.title}>
                  <span>0{index + 1}</span>
                  <h3>{application.title}</h3>
                  <ul>{application.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section chemistry" aria-labelledby="chemistry-title">
          <div className="shell chemistry-layout">
            <div>
              <SectionHeading eyebrow="Químicos industriais" title="Tecnologias para diferentes pontos do processo." />
              <p id="chemistry-title" className="section-description">Uma amostra das soluções documentadas no portfólio institucional. Há outras tecnologias disponíveis mediante contato comercial.</p>
            </div>
            <div className="chemical-cloud">
              {industrialChemicals.map((chemical) => <span key={chemical}>{chemical}</span>)}
            </div>
          </div>
        </section>

        <section className="section equipment" aria-labelledby="equipment-title">
          <div className="shell equipment-grid">
            <figure className="equipment-photo">
              <Image
                src="/images/lab-water-analysis.webp"
                alt="Laboratório técnico com amostras de água e componentes de equipamentos para tratamento"
                fill
                sizes="(max-width: 880px) 100vw, 48vw"
              />
              <figcaption>Equipamentos, análises e suporte técnico</figcaption>
            </figure>
            <div className="equipment-copy">
              <SectionHeading eyebrow="Equipamentos e serviços" title="Estrutura para aplicar, monitorar e evoluir." />
              <div className="two-column-list" id="equipment-title">
                <div><h3>Equipamentos</h3><p>Bombas dosadoras, cloradores, abrandadores, sistemas de desmineralização, osmose reversa, diluidores, resinas, cartuchos e membranas.</p></div>
                <div><h3>Análises e consultoria</h3><p>Consultoria, monitoramento de estações de tratamento de efluentes, análises regulatórias e treinamentos técnicos para gestão e operação.</p></div>
              </div>
              <a className="text-link" href={whatsappLink} target="_blank" rel="noreferrer">Fale sobre equipamentos e suporte <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="section maintenance" aria-labelledby="maintenance-title">
          <div className="shell maintenance-grid">
            <SectionHeading eyebrow="Manutenção e limpeza" title="Produtos para rotinas industriais e automotivas." inverse />
            <div id="maintenance-title" className="maintenance-content">
              <article><h3>Industrial</h3><p>Desengraxantes, limpadores alcalinos e ácidos, detergentes industriais e limpa inox para apoiar a manutenção da operação.</p></article>
              <article><h3>Automotiva</h3><p>Desengraxantes, detergentes automotivos e multiuso, além de detergente ácido para limpeza de baú em máquinas agrícolas, caminhões, carros e camionetes.</p></article>
            </div>
          </div>
        </section>

        <section className="section segments" id="segmentos" aria-labelledby="segments-title">
          <div className="shell">
            <SectionHeading eyebrow="Segmentos atendidos" title="Experiência comercial para diferentes realidades produtivas." description="O portfólio reúne soluções aplicáveis a múltiplos setores industriais." />
            <div className="segment-list" id="segments-title">{segments.map((segment, index) => <span key={segment}><b>{String(index + 1).padStart(2, "0")}</b>{segment}</span>)}</div>
          </div>
        </section>

        <section className="section supply" id="diferenciais" aria-labelledby="supply-title">
          <div className="shell">
            <SectionHeading eyebrow="Fornecimento e diferenciais" title="Fornecimento alinhado ao porte e à rotina da operação." description="Atendimento pontual, recorrente ou estruturado conforme criticidade e consumo." />
            <div className="supply-layout">
              <figure className="supply-photo">
                <Image
                  src="/images/chemical-supply-logistics.webp"
                  alt="Estrutura industrial de fornecimento com caminhão-tanque e contêineres IBC em área protegida"
                  fill
                  sizes="(max-width: 880px) 100vw, 48vw"
                />
                <figcaption>Embalagens e fornecimento a granel</figcaption>
              </figure>
              <div className="supply-cards" id="supply-title">{supplyCards.map((item) => <article key={item.label}><strong>{item.label}</strong><span>{item.detail}</span></article>)}</div>
            </div>
            <div className="differential-grid">
              <div><p className="eyebrow">Diferenciais comerciais</p><h3>Produto, aplicação e apoio técnico em uma conversa objetiva.</h3></div>
              <ul>{differentials.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="commercial-cta" aria-labelledby="cta-title">
          <div className="shell commercial-cta-inner">
            <div><p className="eyebrow eyebrow--light">Atendimento comercial</p><h2 id="cta-title">Vamos conversar sobre a sua operação?</h2><p>Apresente sua necessidade à equipe comercial e encontre a linha mais adequada para o seu processo.</p></div>
            <div className="cta-actions"><a className="button button--bright" href={whatsappLink} target="_blank" rel="noreferrer">Chamar no WhatsApp <Arrow /></a><a className="text-link text-link--light" href={`mailto:${contact.email}`}>Enviar e-mail <Arrow /></a></div>
          </div>
        </section>

        <section className="section contact" id="contato" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div><SectionHeading eyebrow="Contato" title="Fale com a Araça Cloro." /><p id="contact-title" className="section-description">Utilize o canal mais conveniente para apresentar a sua necessidade.</p></div>
            <address>
              <a href={whatsappLink} target="_blank" rel="noreferrer"><span>WhatsApp</span><strong>{contact.whatsappDisplay}</strong><Arrow /></a>
              <a href={`mailto:${contact.email}`}><span>E-mail</span><strong>{contact.email}</strong><Arrow /></a>
              <a href="https://www.google.com/maps/search/?api=1&query=Rua+Anhanguera,+485,+Araçatuba,+SP" target="_blank" rel="noreferrer"><span>Endereço</span><strong>{contact.address}</strong><Arrow /></a>
            </address>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div><Image src="/logo-araca-cloro.png" alt="Araça Cloro Soluções e Serviços" width={500} height={500} /><p>Soluções químicas, tratamento de águas, equipamentos e suporte técnico para múltiplos segmentos.</p></div>
          <div className="footer-nav"><p>Institucional</p>{navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}</div>
          <div className="footer-nav"><p>Contato</p><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a><a href={`mailto:${contact.email}`}>{contact.email}</a><span>{contact.address}</span></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Araça Cloro Soluções e Serviços.</span><span>Política de privacidade [em preparação]</span></div>
      </footer>
      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Falar com a Araça Cloro pelo WhatsApp">WA</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </>
  );
}
