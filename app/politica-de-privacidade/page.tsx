import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { contact } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Política de Privacidade | Araça Cloro",
  description: "Entenda como a Araça Cloro pode tratar dados pessoais em seus canais de atendimento.",
  alternates: { canonical: "/politica-de-privacidade/" },
};

const privacyEmail = "aracacloro@aracacloro.com.br";
const phoneHref = "tel:+5518996215929";
const whatsappHref = `https://wa.me/${contact.whatsapp}`;

const indexItems = [
  ["identificacao", "Identificação da empresa"],
  ["dados-tratados", "Dados pessoais tratados"],
  ["navegacao", "Informações técnicas de navegação"],
  ["finalidades", "Finalidades do tratamento"],
  ["marketing", "Comunicações comerciais e marketing"],
  ["bases-legais", "Bases legais"],
  ["terceiros", "Telefone, WhatsApp e serviços de terceiros"],
  ["cookies", "Cookies e ferramentas de monitoramento"],
  ["compartilhamento", "Compartilhamento dos dados"],
  ["conservacao", "Armazenamento e período de conservação"],
  ["seguranca", "Segurança da informação"],
  ["direitos", "Direitos do titular"],
  ["criancas", "Dados de crianças e adolescentes"],
  ["links-externos", "Links externos"],
  ["alteracoes", "Alterações desta política"],
  ["contato-privacidade", "Contato sobre privacidade"],
] as const;

function ExternalLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
  return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function PrivacySection({ number, id, title, children }: Readonly<{ number: string; id: string; title: string; children: React.ReactNode }>) {
  return (
    <section className="privacy-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}><span aria-hidden="true">{number}</span>{title}</h2>
      <div className="privacy-section-content">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header isSubpage />
      <main className="privacy-main">
        <article className="privacy-article">
          <header className="privacy-hero">
            <p className="eyebrow">Institucional</p>
            <h1>Política de Privacidade</h1>
            <p className="privacy-updated">Última atualização: agosto de 2026</p>
            <p className="privacy-lead">Esta página explica como dados pessoais podem ser tratados nos canais de atendimento da Araça Cloro.</p>
            <p>A Aracacloro Solucoes e Servicos LTDA, inscrita no CNPJ sob o nº 49.610.260/0001-78, respeita a privacidade e a proteção dos dados pessoais das pessoas que acessam seu site e utilizam seus canais de atendimento.</p>
            <p>Esta Política de Privacidade explica como os dados pessoais podem ser tratados pela Araça Cloro, em conformidade com a Lei nº 13.709/2018, a Lei Geral de Proteção de Dados Pessoais — LGPD. <ExternalLink href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm?utm_source=chatgpt.com">Planalto</ExternalLink></p>
          </header>

          <nav className="privacy-index" aria-label="Índice desta política">
            <p>Índice</p>
            <ol>
              {indexItems.map(([id, label], index) => <li key={id}><a href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a></li>)}
            </ol>
          </nav>

          <PrivacySection number="01" id="identificacao" title="Identificação da empresa">
            <p>A responsável pelas decisões relacionadas ao tratamento dos dados pessoais é:</p>
            <dl className="privacy-details">
              <div><dt>Razão social</dt><dd>Aracacloro Solucoes e Servicos LTDA</dd></div>
              <div><dt>Nome comercial</dt><dd>Araça Cloro Soluções e Serviços</dd></div>
              <div><dt>CNPJ</dt><dd>49.610.260/0001-78</dd></div>
              <div><dt>Endereço</dt><dd>Rua Anhanguera, 485 — Araçatuba/SP</dd></div>
              <div><dt>E-mail comercial</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
              <div><dt>Telefone ou WhatsApp</dt><dd>{contact.whatsappDisplay}</dd></div>
            </dl>
            <p>Para assuntos relacionados à privacidade e à proteção de dados pessoais:</p>
            <dl className="privacy-details"><div><dt>E-mail</dt><dd><a href={`mailto:${privacyEmail}`}>{privacyEmail}</a></dd></div></dl>
          </PrivacySection>

          <PrivacySection number="02" id="dados-tratados" title="Dados pessoais tratados">
            <p>O site da Araça Cloro possui finalidade institucional e não disponibiliza formulário próprio para coleta de dados pessoais.</p>
            <p>O usuário poderá iniciar voluntariamente um contato com a empresa por meio do telefone ou do botão de direcionamento para o WhatsApp.</p>
            <p>Ao entrar em contato, poderão ser tratados dados como:</p>
            <ul>
              <li>nome;</li><li>número de telefone;</li><li>endereço de e-mail;</li><li>nome da empresa;</li><li>cargo ou área de atuação;</li><li>cidade e estado;</li><li>produto, serviço ou solução de interesse;</li><li>conteúdo das mensagens;</li><li>documentos e informações enviados voluntariamente;</li><li>histórico de contatos, solicitações, propostas e negociações.</li>
            </ul>
            <p>A Araça Cloro solicita que o usuário não envie dados pessoais sensíveis ou informações que não sejam necessárias para o atendimento.</p>
          </PrivacySection>

          <PrivacySection number="03" id="navegacao" title="Informações técnicas de navegação">
            <p>Mesmo sem ferramentas próprias de análise, a infraestrutura de hospedagem poderá registrar automaticamente informações técnicas necessárias para o funcionamento e a segurança do site, como:</p>
            <ul><li>endereço IP;</li><li>tipo de navegador e dispositivo;</li><li>sistema operacional;</li><li>data e horário de acesso;</li><li>páginas acessadas;</li><li>registros técnicos do servidor.</li></ul>
            <p>Essas informações poderão ser utilizadas exclusivamente para funcionamento, segurança, diagnóstico de falhas e prevenção de acessos indevidos.</p>
          </PrivacySection>

          <PrivacySection number="04" id="finalidades" title="Finalidades do tratamento">
            <p>Os dados pessoais recebidos por meio do telefone ou WhatsApp, e-mail ou outros canais de atendimento poderão ser utilizados para:</p>
            <ul><li>responder a dúvidas e solicitações;</li><li>identificar necessidades técnicas e comerciais;</li><li>apresentar produtos, equipamentos, serviços e soluções;</li><li>elaborar propostas e orçamentos;</li><li>realizar negociações e atendimentos comerciais;</li><li>prestar suporte técnico e operacional;</li><li>manter registros do relacionamento com clientes e potenciais clientes;</li><li>acompanhar propostas, pedidos e oportunidades comerciais;</li><li>cumprir obrigações legais, regulatórias, fiscais ou contratuais;</li><li>prevenir fraudes e incidentes de segurança;</li><li>exercer direitos em processos administrativos, judiciais ou arbitrais;</li><li>enviar comunicações, novidades, ofertas e conteúdos comerciais relacionados às atividades da Araça Cloro.</li></ul>
          </PrivacySection>

          <PrivacySection number="05" id="marketing" title="Comunicações comerciais e marketing">
            <p>Os dados fornecidos durante o contato poderão ser utilizados pela Araça Cloro para o envio posterior de comunicações comerciais por telefone, WhatsApp ou e-mail, relacionadas aos seus produtos, serviços, equipamentos e soluções.</p>
            <p>Essas comunicações poderão ocorrer quando:</p>
            <ul><li>houver consentimento do titular;</li><li>decorrerem de um relacionamento comercial existente;</li><li>forem compatíveis com o contexto do contato realizado;</li><li>houver outra base legal aplicável prevista na LGPD.</li></ul>
            <p>Quando utilizado como base legal, o legítimo interesse deve estar associado a uma finalidade concreta, respeitar as expectativas do titular e não prevalecer sobre seus direitos e liberdades fundamentais. <ExternalLink href="https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-lanca-guia-orientativo-sobre-legitimo-interesse?utm_source=chatgpt.com">Serviços e Informações do Brasil</ExternalLink></p>
            <p>O destinatário poderá solicitar a interrupção das comunicações comerciais a qualquer momento, respondendo à própria mensagem ou entrando em contato pelo e-mail: <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a></p>
            <p>A solicitação de interrupção não impede o envio de mensagens necessárias ao cumprimento de contratos, pedidos, obrigações legais ou atendimentos em andamento.</p>
          </PrivacySection>

          <PrivacySection number="06" id="bases-legais" title="Bases legais">
            <p>Dependendo da finalidade e do contexto, o tratamento dos dados pessoais poderá ocorrer com fundamento em:</p>
            <ul><li>consentimento do titular;</li><li>execução de contrato ou de procedimentos preliminares relacionados a contrato;</li><li>cumprimento de obrigação legal ou regulatória;</li><li>exercício regular de direitos;</li><li>legítimo interesse da Araça Cloro;</li><li>proteção contra fraudes e garantia da segurança dos canais de atendimento.</li></ul>
            <p>A base legal será definida conforme a finalidade específica de cada atividade de tratamento.</p>
          </PrivacySection>

          <PrivacySection number="07" id="terceiros" title="Telefone, WhatsApp e serviços de terceiros">
            <p>Ao entrar em contato por telefone ou clicar no botão de WhatsApp disponível no site, o usuário utilizará serviços de telecomunicação ou uma plataforma operada por terceiros.</p>
            <p>O tratamento realizado diretamente por essas empresas também estará sujeito às políticas, termos e condições dos respectivos serviços.</p>
            <p>A Araça Cloro não controla os sistemas, a infraestrutura ou as práticas internas de tratamento de dados desses terceiros.</p>
          </PrivacySection>

          <PrivacySection number="08" id="cookies" title="Cookies e ferramentas de monitoramento">
            <p>A Araça Cloro não utiliza, nesta versão do site:</p>
            <ul><li>Google Analytics;</li><li>Meta Pixel;</li><li>ferramentas de publicidade comportamental;</li><li>ferramentas próprias de rastreamento de visitantes;</li><li>cookies destinados à formação de perfis publicitários.</li></ul>
            <p>Poderão existir apenas recursos técnicos indispensáveis ao funcionamento, à hospedagem e à segurança do site.</p>
            <p>Caso sejam implantadas futuramente ferramentas de análise, publicidade, vídeos incorporados, mapas, chats ou outros serviços que utilizem cookies opcionais, esta Política de Privacidade deverá ser atualizada. Quando necessário, também deverá ser disponibilizado um mecanismo para gerenciamento das preferências do usuário. A ANPD diferencia cookies estritamente necessários de cookies opcionais e recomenda transparência sobre suas finalidades. <ExternalLink href="https://www.gov.br/anpd/pt-br/assuntos/noticias-periodo-eleitoral/anpd-lanca-guia-orientativo-201ccookies-e-protecao-de-dados-pessoais201d?exec=3ba4791&utm_source=chatgpt.com">Serviços e Informações do Brasil</ExternalLink></p>
          </PrivacySection>

          <PrivacySection number="09" id="compartilhamento" title="Compartilhamento dos dados">
            <p>A Araça Cloro poderá compartilhar dados pessoais somente quando necessário com:</p>
            <ul><li>fornecedores de hospedagem e infraestrutura tecnológica;</li><li>provedores de e-mail e comunicação;</li><li>plataformas utilizadas pelo próprio titular para iniciar o contato;</li><li>prestadores de serviços técnicos, comerciais, contábeis, jurídicos ou administrativos;</li><li>parceiros envolvidos no atendimento de determinada solicitação;</li><li>autoridades públicas, quando houver obrigação legal, regulatória ou determinação válida.</li></ul>
            <p>A Araça Cloro não vende dados pessoais.</p>
            <p>O compartilhamento deverá ser limitado às informações necessárias para cada finalidade.</p>
          </PrivacySection>

          <PrivacySection number="10" id="conservacao" title="Armazenamento e período de conservação">
            <p>Os dados pessoais poderão ser conservados pelo período necessário para:</p>
            <ul><li>atender às solicitações do titular;</li><li>manter o relacionamento comercial;</li><li>acompanhar propostas, negociações, fornecimentos e serviços;</li><li>realizar comunicações comerciais permitidas;</li><li>cumprir obrigações legais, fiscais, regulatórias ou contratuais;</li><li>resguardar o exercício regular de direitos;</li><li>prevenir fraudes e manter registros de segurança.</li></ul>
            <p>Não é recomendável estabelecer simplesmente que os dados serão mantidos por período indeterminado. A LGPD prevê princípios de finalidade e necessidade e garante ao titular informações sobre a duração do tratamento. <ExternalLink href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm?utm_source=chatgpt.com">Planalto</ExternalLink></p>
            <p>Quando os dados deixarem de ser necessários e não houver justificativa legal para sua conservação, eles poderão ser eliminados ou anonimizados.</p>
            <p>O titular também poderá solicitar a exclusão dos seus dados, observadas as situações em que a empresa tenha o direito ou a obrigação legal de conservá-los.</p>
          </PrivacySection>

          <PrivacySection number="11" id="seguranca" title="Segurança da informação">
            <p>A Araça Cloro adotará medidas administrativas e técnicas razoáveis para proteger os dados pessoais contra:</p>
            <ul><li>acessos não autorizados;</li><li>perda;</li><li>destruição;</li><li>alteração;</li><li>divulgação indevida;</li><li>uso inadequado ou fraudulento.</li></ul>
            <p>Apesar das medidas adotadas, nenhum sistema de transmissão ou armazenamento de informações é completamente imune a riscos.</p>
            <p>Caso ocorra incidente de segurança que possa causar risco ou dano relevante aos titulares, a Araça Cloro adotará as providências cabíveis previstas na legislação.</p>
          </PrivacySection>

          <PrivacySection number="12" id="direitos" title="Direitos do titular">
            <p>Nos termos da LGPD, o titular poderá solicitar, quando aplicável:</p>
            <ul><li>confirmação da existência de tratamento;</li><li>acesso aos dados pessoais;</li><li>correção de dados incompletos, inexatos ou desatualizados;</li><li>informação sobre o compartilhamento dos dados;</li><li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados irregularmente;</li><li>eliminação dos dados tratados com base no consentimento;</li><li>revogação do consentimento;</li><li>oposição ao tratamento realizado em desconformidade com a legislação;</li><li>portabilidade, quando aplicável e regulamentada;</li><li>revisão de decisões tomadas exclusivamente com base em tratamento automatizado, quando aplicável.</li></ul>
            <p>A ANPD mantém orientações específicas sobre os direitos dos titulares e sobre os meios de exercê-los. <ExternalLink href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1?utm_source=chatgpt.com">Serviços e Informações do Brasil</ExternalLink></p>
            <p>As solicitações deverão ser encaminhadas para: <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a></p>
            <p>Para proteger os próprios titulares, a Araça Cloro poderá solicitar informações necessárias para confirmar a identidade do solicitante antes de atender ao pedido.</p>
          </PrivacySection>

          <PrivacySection number="13" id="criancas" title="Dados de crianças e adolescentes">
            <p>O site é direcionado principalmente a empresas, profissionais e pessoas interessadas em soluções químicas, tratamento de águas, equipamentos e serviços industriais.</p>
            <p>A Araça Cloro não busca coletar intencionalmente dados pessoais de crianças ou adolescentes por meio do site.</p>
            <p>Caso identifique o recebimento desse tipo de informação sem necessidade ou justificativa adequada, poderá adotar medidas para sua exclusão.</p>
          </PrivacySection>

          <PrivacySection number="14" id="links-externos" title="Links externos">
            <p>O site poderá conter links para páginas, aplicativos, redes sociais ou serviços administrados por terceiros.</p>
            <p>A Araça Cloro não é responsável pelas práticas de privacidade adotadas por esses terceiros. Recomenda-se que o usuário consulte os respectivos termos e políticas antes de fornecer dados pessoais.</p>
          </PrivacySection>

          <PrivacySection number="15" id="alteracoes" title="Alterações desta política">
            <p>Esta Política de Privacidade poderá ser atualizada para refletir:</p>
            <ul><li>alterações na legislação;</li><li>mudanças nos serviços e canais de atendimento;</li><li>implantação de novas ferramentas;</li><li>mudanças nas práticas de tratamento de dados da Araça Cloro.</li></ul>
            <p>A versão atualizada será disponibilizada nesta página, acompanhada da data de sua última revisão.</p>
          </PrivacySection>

          <PrivacySection number="16" id="contato-privacidade" title="Contato sobre privacidade">
            <p>Dúvidas, solicitações e manifestações relacionadas à privacidade ou ao tratamento de dados pessoais poderão ser enviadas para:</p>
            <dl className="privacy-details">
              <div><dt>Empresa</dt><dd>Aracacloro Solucoes e Servicos LTDA</dd></div>
              <div><dt>CNPJ</dt><dd>49.610.260/0001-78</dd></div>
              <div><dt>E-mail de privacidade</dt><dd><a href={`mailto:${privacyEmail}`}>{privacyEmail}</a></dd></div>
              <div><dt>E-mail comercial</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
              <div><dt>Telefone ou WhatsApp</dt><dd>{contact.whatsappDisplay}</dd></div>
              <div><dt>Endereço</dt><dd>Rua Anhanguera, 485 — Araçatuba/SP</dd></div>
            </dl>
          </PrivacySection>
        </article>
      </main>

      <footer className="site-footer privacy-footer">
        <div className="shell footer-grid privacy-footer-grid">
          <div><Image src="/logo-araca-cloro.png" alt="Araça Cloro Soluções e Serviços" width={500} height={500} /><p>Araça Cloro Soluções e Serviços</p><p>Soluções químicas industriais, tratamento de águas, equipamentos e suporte técnico.</p></div>
          <div className="footer-nav"><p>Contato</p><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={phoneHref}>Telefone: {contact.whatsappDisplay}</a><a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp: {contact.whatsappDisplay}</a><span>Rua Anhanguera, 485 — Araçatuba/SP</span></div>
        </div>
        <div className="shell footer-bottom privacy-footer-bottom"><span>© 2026 Araça Cloro Soluções e Serviços. Todos os direitos reservados.</span><span>Aracacloro Solucoes e Servicos LTDA — CNPJ 49.610.260/0001-78</span><a className="footer-privacy-link" href="/politica-de-privacidade/">Política de Privacidade</a></div>
      </footer>
      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Falar com a Araça Cloro pelo WhatsApp">
        <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16 3.5a12.5 12.5 0 0 0-10.7 19L3.7 28.5l6.2-1.6A12.5 12.5 0 1 0 16 3.5Zm0 22.7a10.2 10.2 0 0 1-5.2-1.4l-.4-.2-3.7 1 .9-3.6-.2-.4A10.2 10.2 0 1 1 16 26.2Zm5.6-7.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.4 4.8.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 1.8-.7 2.1-1.3.3-.6.3-1.2.2-1.3-.1-.1-.3-.2-.6-.4Z" />
        </svg>
      </a>
    </>
  );
}
