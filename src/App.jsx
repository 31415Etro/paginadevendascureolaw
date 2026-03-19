import CureoCtaButton from './components/ui/ethereal-beams-hero'
import { TestimonialsSection } from './components/ui/testimonials-with-marquee'
import cureoLogo from '../Logotipos (DEXO, IMUX) (6).png'
import heroPhoto from '../foto.jpeg'

const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Como Atuamos', href: '#como-atuamos' },
  { label: 'Casos', href: '#casos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

const proofHighlights = [
  { icon: 'flash', title: 'Atendimento ágil', text: 'Triagem estratégica para casos que exigem resposta rápida.' },
  { icon: 'scale', title: 'Ações com liminar', text: 'Estratégia jurídica para urgência médica e risco à saúde.' },
  { icon: 'shield', title: 'Direito à saúde', text: 'Atuação focada na efetivação do tratamento médico indicado.' },
  { icon: 'heart', title: 'Atendimento humanizado', text: 'Comunicação clara, acolhedora e orientada ao paciente.' },
]

const painPoints = [
  { icon: 'pulse', title: 'Recusa de tratamento', text: 'Quando o plano de saúde nega terapia, exame, procedimento ou internação necessários.' },
  { icon: 'cross', title: 'Recusa de cirurgia', text: 'Cirurgia negada mesmo com indicação clínica e risco de agravamento do quadro.' },
  { icon: 'pill', title: 'Negativa de medicamentos', text: 'Medicamento de alto custo ou tratamento essencial recusado de forma abusiva.' },
  { icon: 'building', title: 'Negativa de internação', text: 'Entraves indevidos para hospitalização, UTI ou suporte médico indispensável.' },
  { icon: 'home', title: 'Negativa de home care', text: 'Recusa de atendimento domiciliar, insumos ou equipe multiprofissional prescrita.' },
  { icon: 'alert', title: 'Urgência recusada', text: 'Situações em que a demora coloca em risco a saúde e exige atuação imediata.' },
]

const rights = [
  'O plano não pode agir de forma abusiva ou contrariar a boa-fé contratual.',
  'A prescrição médica é elemento relevante para demonstrar a necessidade do tratamento.',
  'Em muitos casos é possível pedir liminar para tentar garantir a cobertura com urgência.',
  'A Justiça pode determinar a autorização do tratamento ou cirurgia negada.',
  'Casos com urgência e risco à saúde demandam resposta jurídica rápida e estratégica.',
  'A documentação correta fortalece o pedido e acelera a análise do caso.',
]

const processSteps = [
  {
    step: '01',
    title: 'Análise inicial do caso',
    text: 'Entendemos o histórico, a negativa de cobertura, os documentos médicos e o grau de urgência.',
  },
  {
    step: '02',
    title: 'Orientação jurídica estratégica',
    text: 'Explicamos os caminhos possíveis com linguagem clara, foco técnico e segurança na tomada de decisão.',
  },
  {
    step: '03',
    title: 'Ação judicial com urgência',
    text: 'Quando necessário, estruturamos a ação com pedido de liminar para proteger o tratamento médico.',
  },
  {
    step: '04',
    title: 'Acompanhamento até a efetivação',
    text: 'Seguimos ao lado do cliente na execução da medida e no acompanhamento do cumprimento da decisão.',
  },
]

const specialties = [
  'Recusa de tratamento',
  'Recusa de cirurgia',
  'Negativa de medicamento de alto custo',
  'Recusa de internação',
  'Negativa de home care',
  'Cobertura de terapias e procedimentos',
  'Liminar contra plano de saúde',
  'Direito à saúde em casos urgentes',
]

const differentials = [
  'Atuação especializada em Direito Médico e Direito à Saúde',
  'Linguagem clara e atendimento humanizado',
  'Estratégia jurídica com foco em urgência',
  'Postura institucional, tecnológica e confiável',
  'Atendimento ágil e direcionado ao caso concreto',
  'Análise cuidadosa da documentação e do contexto clínico',
]

const testimonials = [
  {
    author: {
      name: 'Marina Lucena Silva',
      handle: 'Liminar em 7 dias',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Agradeço a Cureo law por ter me ajudado a conseguir a minha liminar em apenas 7 dias!',
  },
  {
    author: {
      name: 'Ana Luiza',
      handle: 'Direito à Saúde',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Muito feliz pois o Dr. Guilherme lutou por mim e pela minha filha, ela estava sem terapia a 3 meses e eles conseguiram. Dinheiro muito bem pago!!!!!',
  },
  {
    author: {
      name: 'Lucas Barbosa Ferreira',
      handle: 'Atendimento jurídico especializado',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Agradeço a toda equipe técnica por ter cuidado do meu caso com muito profissionalismo',
  },
  {
    author: {
      name: 'José Santos Silva',
      handle: 'Atendimento humanizado',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Queria agradecer ao Dr. prieto, muito atensioso.',
  },
  {
    author: {
      name: 'Lurdes Aparecida',
      handle: 'Avaliação de atendimento',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    },
    text: 'Recomendo para todo mundo. profisisonais que a todo tempo transmitem transparencia e honestidade mesmo em um momento tão delicado. Parabens!',
  },
]

const faqItems = [
  {
    question: 'O plano de saúde pode negar tratamento?',
    answer:
      'A negativa pode ser contestada quando houver indícios de abusividade, especialmente diante de prescrição médica e necessidade clínica comprovada.',
  },
  {
    question: 'A recusa de cirurgia é legal?',
    answer:
      'Depende do caso. Em muitas situações, cirurgia negada de forma indevida pode ser levada ao Judiciário para análise urgente.',
  },
  {
    question: 'Posso conseguir uma liminar?',
    answer:
      'Em casos de urgência, risco à saúde ou necessidade imediata, pode ser possível pedir liminar para buscar a liberação do tratamento.',
  },
  {
    question: 'Quais documentos são necessários?',
    answer:
      'Geralmente são importantes relatório médico, prescrição, exames, contrato ou carteirinha do plano e, se possível, a negativa por escrito.',
  },
  {
    question: 'Quanto tempo pode levar?',
    answer:
      'O prazo varia conforme o caso, a documentação e o nível de urgência, mas pedidos urgentes costumam exigir atuação célere desde o início.',
  },
  {
    question: 'Como funciona a análise do caso?',
    answer:
      'A Cureo Law avalia os documentos, a urgência clínica, o histórico da negativa e orienta sobre a melhor estratégia jurídica.',
  },
  {
    question: 'A Cureo Law atende casos urgentes?',
    answer:
      'Sim. A estrutura da página foi pensada para destacar atendimento ágil em situações que envolvem urgência e risco ao paciente.',
  },
  {
    question: 'Preciso ter a negativa por escrito?',
    answer:
      'É recomendável, porque fortalece a prova do caso. Se você ainda não tiver, a orientação jurídica pode indicar os próximos passos.',
  },
]

const contactLinks = {
  whatsapp:
    'https://wa.me/5521971717830?text=Plano%20negou%20meu%20tratamento%2C%20gostaria%20de%20falar%20com%20um%20advogado',
  form: '#contato',
  email: 'suporte@cureolaw.com',
}

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-slate-900 antialiased">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <RightsSection />
        <ProcessSection />
        <SpecialtiesSection />
        <DifferentialsSection />
        <SocialProofSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <MobileStickyCta />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <img
              src={cureoLogo}
              alt="Logo da Cureo Law"
              className="h-[6.8rem] w-auto shrink-0 object-contain sm:h-[8.2rem]"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-base font-medium text-slate-600 transition hover:text-[var(--color-primary)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <CureoCtaButton href={contactLinks.whatsapp} className="hidden sm:inline-flex">
            Falar com um especialista
          </CureoCtaButton>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)] sm:px-4 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[13.5rem] sm:pt-36">
      <BackdropOrbs />
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] xl:gap-12">
          <div className="relative z-10 max-w-5xl">
            <Tag>Direito Médico • Direito à Saúde • Atuação estratégica em urgência</Tag>
            <h1 className="mt-6 max-w-4xl font-heading text-[2.15rem] font-semibold leading-[1.03] tracking-tight text-slate-950 sm:mt-7 sm:text-5xl lg:text-6xl">
              Plano de saúde negou seu tratamento ou cirurgia? Você pode ter direito à liberação imediata pela
              Justiça.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-xl sm:leading-8">
              Atuação especializada em Direito Médico e Direito à Saúde para pacientes que sofreram recusa de
              tratamento, recusa de cirurgia e negativa abusiva de cobertura.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <CureoCtaButton href={contactLinks.whatsapp} className="w-full sm:w-auto">
                Falar no WhatsApp agora
              </CureoCtaButton>
              <SecondaryButton href={contactLinks.form} className="w-full justify-center sm:w-auto">
                Solicitar análise do caso
              </SecondaryButton>
            </div>

            <div className="relative z-10 mt-8 xl:hidden">
              <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={heroPhoto}
                    alt="Profissional da Cureo Law"
                    className="h-[22rem] w-full object-cover object-center sm:h-[28rem]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,_rgba(2,6,23,0),_rgba(2,6,23,0.72))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="max-w-sm font-heading text-2xl font-semibold leading-tight sm:text-3xl">
                      Atendimento jurídico com estratégia, urgência e confiança.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 hidden xl:block">
            <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.1)] backdrop-blur-xl">
              <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,_transparent,_rgba(0,120,212,0.5),_transparent)]" />
              <div className="relative overflow-hidden rounded-[30px]">
                <img
                  src={heroPhoto}
                  alt="Profissional da Cureo Law"
                  className="h-[44rem] w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,_rgba(2,6,23,0),_rgba(2,6,23,0.72))]" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <div className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] backdrop-blur">
                    Cureo Law
                  </div>
                  <p className="mt-4 max-w-sm font-heading text-3xl font-semibold leading-tight">
                    Atendimento jurídico com estratégia, urgência e confiança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PainSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Situações recorrentes"
          title="Quando a saúde não pode esperar, a negativa do plano pode ser abusiva"
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {painPoints.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <PrimaryButton href={contactLinks.form} className="w-full justify-center sm:w-auto">
            Quero entender meus direitos
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function RightsSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:rounded-[32px] sm:p-10">
            <Tag>Segurança jurídica com foco em urgência</Tag>
            <h2 className="mt-5 font-heading text-2xl font-semibold text-slate-950 sm:mt-6 sm:text-4xl">
              Você pode ter direito à cobertura mesmo após a negativa
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Em muitos cenários, a análise jurídica adequada revela caminhos para questionar a conduta do plano
              de saúde e buscar proteção imediata ao paciente.
            </p>
            <div className="mt-6 rounded-[24px] bg-[linear-gradient(135deg,_rgba(0,120,212,0.1),_rgba(255,255,255,0.96))] p-5 sm:mt-8 sm:rounded-[28px] sm:p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-primary)]">
                Destaque Cureo Law
              </div>
              <p className="mt-3 text-base leading-7 text-slate-700">
                Casos de liminar, tratamento médico, cirurgia negada e negativa de cobertura exigem leitura
                estratégica da documentação e do contexto clínico.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {rights.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-[var(--color-border)] bg-[linear-gradient(180deg,_#ffffff,_#f8fbff)] p-5 shadow-[0_22px_60px_rgba(15,23,42,0.06)] sm:rounded-[30px] sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <CureoCtaButton href={contactLinks.whatsapp} className="w-full sm:w-auto">
            Analisar meu caso agora
          </CureoCtaButton>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="como-atuamos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Fluxo de atendimento"
          title="Como a Cureo Law pode ajudar"
          description="Um caminho claro, técnico e acolhedor para orientar o cliente desde a primeira análise até a efetivação do direito à saúde."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="group relative overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:rounded-[30px] sm:p-7"
            >
              <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-[linear-gradient(90deg,_rgba(0,120,212,0.8),_rgba(0,120,212,0))]" />
              <div className="text-sm font-semibold tracking-[0.35em] text-[var(--color-primary)]">{item.step}</div>
              <h3 className="mt-4 font-heading text-[1.45rem] font-semibold text-slate-950 sm:mt-6 sm:text-2xl">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <CureoCtaButton href={contactLinks.whatsapp} className="w-full sm:w-auto">
            Quero falar com a Cureo Law
          </CureoCtaButton>
        </div>
      </div>
    </section>
  )
}

function SpecialtiesSection() {
  return (
    <section id="casos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Casos atendidos"
          title="Especialidades e frentes de atuação em Direito Médico e Direito à Saúde"
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {specialties.map((item, index) => (
            <a
              key={item}
              href={contactLinks.whatsapp}
              className="group rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/35 hover:shadow-[0_28px_90px_rgba(0,120,212,0.16)] sm:rounded-[30px] sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-heading text-lg font-semibold text-slate-950 sm:text-xl">{item}</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition group-hover:bg-[var(--color-primary)] group-hover:text-white sm:h-11 sm:w-11">
                  <ArrowIcon className="h-5 w-5" />
                </span>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-400 sm:mt-6 sm:text-sm sm:tracking-[0.28em]">Frente {String(index + 1).padStart(2, '0')}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <PrimaryButton href={contactLinks.form} className="w-full justify-center sm:w-auto">
            Tenho um caso como esse
          </PrimaryButton>
        </div>
      </div>
    </section>
  )
}

function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] bg-[linear-gradient(135deg,_#0d8be8,_#0078d4)] p-6 text-white shadow-[0_28px_100px_rgba(0,120,212,0.28)] sm:rounded-[34px] sm:p-10">
            <Tag inverted>Selo de confiança Cureo Law</Tag>
            <h2 className="mt-5 font-heading text-2xl font-semibold sm:mt-6 sm:text-4xl">Por que escolher a Cureo Law</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 sm:mt-5 sm:text-lg sm:leading-8">
              A proposta visual e estratégica da página combina sofisticação institucional, clareza de mensagem e
              foco real em conversão qualificada.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur sm:mt-8 sm:px-5">
              <ShieldIcon className="h-5 w-5" />
              Atuação especializada, segura e direcionada
            </div>
          </div>

          <div className="grid gap-4">
            {differentials.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[24px] border border-[var(--color-border)] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:rounded-[28px] sm:p-6"
              >
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <CureoCtaButton href={contactLinks.whatsapp} className="w-full sm:w-auto">
            Falar com especialista agora
          </CureoCtaButton>
        </div>
      </div>
    </section>
  )
}

function SocialProofSection() {
  return (
    <TestimonialsSection
      title="Avaliações de clientes atendidos pela Cureo Law"
      testimonials={testimonials}
    />
  )
}

function FaqSection() {
  return (
    <section id="duvidas" className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          centered
          kicker="Perguntas frequentes"
          title="Dúvidas comuns sobre plano de saúde, liminar e urgência médica"
        />

        <div className="mt-10 space-y-3 sm:mt-12 sm:space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-[22px] border border-[var(--color-border)] bg-white px-4 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:rounded-[26px] sm:px-6 sm:py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-left text-base font-semibold text-slate-900 sm:gap-4 sm:text-lg">
                {item.question}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] transition group-open:rotate-45 sm:h-10 sm:w-10">
                  <PlusIcon className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 sm:pr-4 sm:text-base sm:leading-7">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <CureoCtaButton href={contactLinks.whatsapp} className="w-full sm:w-auto">
            Quero uma análise jurídica
          </CureoCtaButton>
        </div>
      </div>
    </section>
  )
}

function FinalCtaSection() {
  return (
    <section id="contato" className="py-16 pb-28 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,_#0a8ded,_#0078d4)] px-5 py-8 text-white shadow-[0_30px_120px_rgba(0,120,212,0.28)] sm:rounded-[36px] sm:px-12 sm:py-16">
          <div className="absolute -right-18 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-12 left-12 h-40 w-40 rounded-full bg-cyan-200/20 blur-2xl" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Tag inverted>Contato imediato</Tag>
              <h2 className="mt-5 max-w-3xl font-heading text-[2.05rem] font-semibold leading-tight sm:mt-6 sm:text-5xl">
                Seu direito à saúde não pode esperar
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/84 sm:mt-5 sm:text-lg sm:leading-8">
                Se houve recusa de tratamento, recusa de cirurgia ou negativa abusiva de cobertura, fale agora com
                a Cureo Law.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/16 bg-white/10 p-6 text-white backdrop-blur-xl sm:rounded-[30px] sm:p-8">
              <p className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                Fale agora com a Cureo Law e receba orientação rápida para seu caso.
              </p>
              <p className="mt-4 text-base leading-7 text-white/78">
                Se houve recusa de tratamento, cirurgia negada, urgência médica ou negativa de cobertura, o próximo
                passo pode começar agora.
              </p>
              <div className="mt-6">
                <CureoCtaButton href={contactLinks.whatsapp} className="w-full">
                  Chamar no WhatsApp
                </CureoCtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr] lg:gap-10 lg:px-8">
        <div>
          <div className="font-heading text-2xl font-semibold text-slate-950">Cureo Law</div>
          <p className="mt-4 max-w-sm text-base leading-7 text-slate-600">
            Direito Médico e Direito à Saúde com posicionamento institucional, linguagem clara e foco em urgência.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Links rápidos</div>
          <div className="mt-4 space-y-3 text-slate-600">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="block transition hover:text-[var(--color-primary)]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Contato</div>
          <div className="mt-4 space-y-3 text-slate-600">
            <a href={contactLinks.whatsapp} className="block transition hover:text-[var(--color-primary)]">
              WhatsApp
            </a>
            <a href={`mailto:${contactLinks.email}`} className="block transition hover:text-[var(--color-primary)]">
              {contactLinks.email}
            </a>
            <div>Placeholder para endereço institucional</div>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Aviso institucional</div>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            Conteúdo com finalidade informativa e institucional. A análise jurídica depende da documentação e das
            circunstâncias específicas de cada caso.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-4 text-sm text-slate-400 sm:mt-10 sm:px-6 lg:px-8">
        © 2026 Cureo Law. Todos os direitos reservados.
      </div>
    </footer>
  )
}

function SectionHeading({ kicker, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Tag>{kicker}</Tag>
      <h2 className="mt-5 font-heading text-2xl font-semibold leading-tight text-slate-950 sm:mt-6 sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">{description}</p>
      ) : null}
    </div>
  )
}

function InfoCard({ icon, title, text, compact = false }) {
  return (
    <article
      className={`rounded-[30px] border border-[var(--color-border)] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)] ${
        compact ? 'p-4 sm:p-5' : 'p-5 sm:p-7'
      }`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] sm:h-12 sm:w-12">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-slate-950 sm:mt-5 sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">{text}</p>
    </article>
  )
}

function PrimaryButton({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-13 items-center rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(0,120,212,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#006ec2] hover:shadow-[0_26px_60px_rgba(0,120,212,0.36)] sm:min-h-14 sm:px-7 sm:py-4 sm:text-base ${className}`}
    >
      {children}
    </a>
  )
}

function SecondaryButton({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-13 items-center rounded-full border border-[var(--color-primary)]/16 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)] sm:min-h-14 sm:px-7 sm:py-4 sm:text-base ${className}`}
    >
      {children}
    </a>
  )
}

function GhostButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-13 w-full items-center justify-center rounded-full border border-white/18 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] shadow-[0_20px_60px_rgba(255,255,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50 sm:min-h-14 sm:px-7 sm:py-4 sm:text-base"
    >
      {children}
    </a>
  )
}

function Tag({ children, inverted = false }) {
  return (
    <div
      className={`inline-flex rounded-full px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] sm:px-4 sm:text-xs sm:tracking-[0.28em] ${
        inverted ? 'bg-white/12 text-white' : 'bg-[var(--color-primary)]/9 text-[var(--color-primary)]'
      }`}
    >
      {children}
    </div>
  )
}

function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-white/92 p-3 backdrop-blur-xl sm:hidden">
      <CureoCtaButton href={contactLinks.whatsapp} className="w-full">
        Falar no WhatsApp agora
      </CureoCtaButton>
    </div>
  )
}

function BackdropOrbs() {
  return (
    <>
      <div className="absolute left-[-8%] top-30 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(0,120,212,0.14),_rgba(255,255,255,0))] blur-2xl" />
      <div className="absolute right-[-10%] top-16 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(125,211,252,0.18),_rgba(255,255,255,0))] blur-2xl" />
    </>
  )
}

function Icon({ name, className }) {
  const icons = {
    flash: <FlashIcon className={className} />,
    scale: <ScaleIcon className={className} />,
    shield: <ShieldIcon className={className} />,
    heart: <HeartIcon className={className} />,
    pulse: <PulseIcon className={className} />,
    cross: <CrossIcon className={className} />,
    pill: <PillIcon className={className} />,
    building: <BuildingIcon className={className} />,
    home: <HomeIcon className={className} />,
    alert: <AlertIcon className={className} />,
  }

  return icons[name] ?? <CheckIcon className={className} />
}

function Svg({ children, className, viewBox = '0 0 24 24' }) {
  return (
    <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      {children}
    </svg>
  )
}

function FlashIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M13 2L5 14h5l-1 8 8-12h-5l1-8z" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

function ScaleIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 4v16" strokeLinecap="round" />
      <path d="M6 7h12" strokeLinecap="round" />
      <path d="M8.5 7L5 13h7L8.5 7z" strokeLinejoin="round" />
      <path d="M15.5 7L12 13h7l-3.5-6z" strokeLinejoin="round" />
      <path d="M9 20h6" strokeLinecap="round" />
    </Svg>
  )
}

function ShieldIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 3l7 3v5c0 4.5-2.7 8.3-7 10-4.3-1.7-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

function HeartIcon({ className }) {
  return (
    <Svg className={className}>
      <path
        d="M12 20s-7-4.2-7-9.4C5 7.7 7 6 9.3 6c1.3 0 2.5.6 3.3 1.8C13.2 6.6 14.4 6 15.7 6 18 6 20 7.7 20 10.6 20 15.8 12 20 12 20z"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function PulseIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M3 12h4l2-4 4 8 2-4h6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

function CrossIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
      <rect x="4" y="4" width="16" height="16" rx="4" />
    </Svg>
  )
}

function PillIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M8 8l8 8" strokeLinecap="round" />
      <path d="M9 4a5 5 0 017 7l-5 5a5 5 0 01-7-7l5-5z" strokeLinejoin="round" />
    </Svg>
  )
}

function BuildingIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M6 21V7l6-3 6 3v14" strokeLinejoin="round" />
      <path d="M9 10h.01M9 14h.01M15 10h.01M15 14h.01M12 21v-4" strokeLinecap="round" />
    </Svg>
  )
}

function HomeIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 10l8-6 8 6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9.5V20h12V9.5" strokeLinejoin="round" />
    </Svg>
  )
}

function AlertIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 4l8 14H4L12 4z" strokeLinejoin="round" />
      <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
    </Svg>
  )
}

function CheckIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

function ArrowIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M5 12h14" strokeLinecap="round" />
      <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  )
}

function StarIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3.8l2.5 5.1 5.6.8-4.1 4 1 5.7-5-2.6-5 2.6 1-5.7-4.1-4 5.6-.8L12 3.8z" />
    </svg>
  )
}

function PlusIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
    </Svg>
  )
}

export default App
