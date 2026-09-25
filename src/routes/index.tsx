import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import heroCover from "@/assets/hero-cover.jpg";
import workSuite from "@/assets/work-suite.jpg";
import workMobile from "@/assets/work-mobile.jpg";

const CONTACT = {
  email: "luis.delgado@exemplo.com",
  linkedin: "https://www.linkedin.com/in/luisdelgado-qa",
  github: "https://github.com/luisdelgado-qa",
};

const METRICS = [
  {
    value: "2,4M",
    label:
      "execuções automatizadas por sprint, distribuídas em 4 frentes de produto.",
    meta: "playwright · pytest · api",
    tone: "pass" as const,
    tilt: "rotate-2",
  },
  {
    value: "98,6%",
    label:
      "precisão na triagem de defeitos, mantendo os bloqueadores fora de produção.",
    meta: "triagem · risco · severidade",
    tone: "plain" as const,
    tilt: "-rotate-2",
  },
  {
    value: "-41%",
    label: "no ciclo de release depois de reconstruir a regressão contínua.",
    meta: "ci/cd · gates · parallelismo",
    tone: "pass" as const,
    tilt: "rotate-1",
  },
];

const PROJECTS = [
  {
    image: workSuite,
    title: "Suíte de regressão — Northwind Pay",
    description:
      "Reconstruí uma suíte instável de 300 testes em um fluxo Playwright paralelo, com trace e vídeo de cada falha. O time passou a confiar no verde.",
    tags: ["Playwright", "CI/CD", "Testes de API"],
    meta: "cobertura 93% · execução 1m42s · flake 0,3%",
    tilt: "rotate-1",
  },
  {
    image: workMobile,
    title: "Programa de QA mobile — Kite Travel",
    description:
      "Levantei um laboratório de dispositivos e um painel de bugs por severidade. Os escapes críticos em release caíram pela metade em dois trimestres.",
    tags: ["Appium", "Laboratório de dispositivos", "Performance"],
    meta: "38 dispositivos · 6 releases · escapes -52%",
    tilt: "-rotate-1",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luis Delgado · QA Engineer — Portfólio" },
      {
        name: "description",
        content:
          "Portfólio de Luis Delgado, QA Engineer sênior: estratégia de teste, automação com Playwright, testes de API e de desempenho, qualidade como disciplina de engenharia.",
      },
      { property: "og:title", content: "Luis Delgado · QA Engineer" },
      {
        property: "og:description",
        content:
          "Encontro o bug antes do seu usuário. Estratégia de teste, automação e qualidade de release.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!nodes.length) return;

    document.documentElement.classList.add("reveal-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Index() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div aria-hidden className="decor pointer-events-none absolute inset-0">
        <div className="grid-lines absolute inset-x-0 top-0 h-[820px] opacity-60" />
        <div className="absolute -top-32 -left-28 h-[26rem] w-[26rem] rounded-full bg-pass/10 blur-[120px]" />
        <div className="absolute top-[38%] -right-24 h-[22rem] w-[22rem] rounded-full bg-rim/10 blur-[120px]" />
        <div className="drift-a absolute top-36 right-[10%] hidden h-40 w-60 rounded-3xl bg-surface pane lg:block" />
        <div className="drift-b absolute bottom-28 left-[6%] hidden h-28 w-48 rounded-3xl bg-rim/5 pane lg:block" />
      </div>

      <header className="no-print relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            LD
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Luis Delgado
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#metricas">
            Métricas
          </a>
          <a className="transition-colors hover:text-foreground" href="#trabalho">
            Trabalho
          </a>
          <a className="transition-colors hover:text-foreground" href="#contato">
            Contato
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full border border-input px-4 py-1.5 text-foreground transition-colors hover:bg-secondary"
          >
            Currículo
          </button>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        <section
          id="top"
          className="grid items-center gap-10 py-8 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-pass/30 bg-pass-soft px-3 py-1 font-mono text-xs font-medium tracking-[0.14em] text-pass uppercase">
              <span className="size-1.5 rounded-full bg-pass" />
              QA Engineer · Automação
            </span>
            <h1 className="mt-6 max-w-[16ch] font-display text-5xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
              Encontro o bug <span className="text-pass">antes</span> do seu
              usuário.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              Oito anos entregando releases confiáveis: desenho a estratégia de
              teste, automatizo o repetitivo e transformo qualidade em algo que
              dá para verificar, e não apenas esperar.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#trabalho"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Ver meu trabalho
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-full border border-input px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary"
              >
                Baixar currículo
              </button>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="pane -rotate-2 rounded-3xl p-5 transition-transform duration-500 hover:rotate-0">
              <div className="overflow-hidden rounded-2xl outline-1 -outline-offset-1 outline-hairline">
                <img
                  src={heroCover}
                  alt="Painel abstrato de uma suíte de testes em execução, com marcações de aprovação em verde"
                  width={1024}
                  height={1280}
                  className="aspect-4/5 w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-display text-base font-semibold">
                    Luis Delgado
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    QA Engineer Sênior · São Paulo
                  </p>
                </div>
                <span className="rounded-full bg-pass-soft px-2.5 py-1 font-mono text-xs font-medium text-pass">
                  Disponível
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="metricas"
          data-reveal
          className="grid gap-6 py-10 md:grid-cols-3"
        >
          {METRICS.map((metric) => (
            <div
              key={metric.value}
              className={`${metric.tilt} pane rounded-2xl p-6 transition-transform duration-500 hover:rotate-0`}
            >
              <p
                className={`font-display text-4xl font-bold ${
                  metric.tone === "pass" ? "text-pass" : "text-foreground"
                }`}
              >
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {metric.label}
              </p>
              <p className="mt-4 font-mono text-[11px] tracking-wide text-muted-foreground/70">
                {metric.meta}
              </p>
            </div>
          ))}
        </section>

        <section id="trabalho" data-reveal className="py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Trabalhos selecionados
            </h2>
            <span className="hidden font-mono text-xs text-muted-foreground sm:block">
              02 casos · 2021 — 2026
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className={`${project.tilt} pane rounded-2xl p-6 transition-transform duration-500 hover:rotate-0`}
              >
                <div className="overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-hairline">
                  <img
                    src={project.image}
                    alt={`Visualização abstrata do projeto ${project.title}`}
                    width={1280}
                    height={768}
                    loading="lazy"
                    className="aspect-16/9 w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 border-t border-hairline pt-3 font-mono text-[11px] text-muted-foreground/70">
                  {project.meta}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" data-reveal className="py-10">
          <div className="pane-strong rounded-3xl border-hairline p-8 text-center md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{ background: "var(--gradient-panel)" }}
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance">
                Vamos falar sobre o seu próximo release.
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground text-pretty">
                Aberto para posições sênior de QA e automação, presenciais em
                São Paulo ou remotas no Brasil.
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-6 inline-block rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="no-print relative z-10 mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-hairline pt-6 md:flex-row">
          <p>© 2026 Luis Delgado — QA Engineer</p>
          <div className="flex gap-6 font-mono text-xs">
            <a
              href={CONTACT.github}
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={CONTACT.linkedin}
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="transition-colors hover:text-foreground"
            >
              E-mail
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
