import {
  GitBranch,
  Cpu,
  FileCode2,
  ShieldAlert,
  FileCheck2,
  ArrowRight,
} from 'lucide-react';
import Reveal from './Reveal';

const pipeline = [
  {
    step: '01',
    icon: GitBranch,
    title: 'Source Ingestion',
    description:
      'Connect your repository or trigger via CI/CD webhook. KingoLabs fetches the diff or full tree, respecting .gitignore and custom scan scopes.',
  },
  {
    step: '02',
    icon: FileCode2,
    title: 'AST + Data Flow Parsing',
    description:
      'Code is parsed into abstract syntax trees and interprocedural data flow graphs. This structural map lets Claude reason about how untrusted input travels through your system.',
  },
  {
    step: '03',
    icon: Cpu,
    title: 'Claude Reasoning Engine',
    description:
      'Anthropic Claude analyzes each module with full contextual awareness — function signatures, call sites, type definitions, and dependency chains — to identify real exploitable paths.',
  },
  {
    step: '04',
    icon: ShieldAlert,
    title: 'Threat Classification',
    description:
      'Findings are classified by severity (Critical → Low), mapped to CWE / OWASP categories, and scored with CVSS-style metrics. False positives are filtered via cross-reference validation.',
  },
  {
    step: '05',
    icon: FileCheck2,
    title: 'Report & Remediation',
    description:
      'Receive a structured report with exact file:line references, suggested fixes, and one-click PR comments. Export to SARIF for integration with your existing security stack.',
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-24 md:py-32 border-y border-[#1e242e] bg-[#0a0c10]">
      <div className="absolute inset-0 grid-pattern radial-fade opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#3b82f6]">
              Architecture
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              How KingoLabs works
            </h2>
            <p className="mt-5 text-lg text-[#8b95a5]">
              A five-stage pipeline that combines static analysis with Claude's contextual
              reasoning to deliver precise, actionable security findings.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {pipeline.map((stage, i) => (
            <Reveal key={stage.step} delay={i * 100}>
              <div className="group relative h-full rounded-2xl border border-[#1e242e] bg-[#0e1116] p-6 transition-all hover:border-[#00d4a0]/40">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#161a22]">
                    <stage.icon className="h-5 w-5 text-[#00d4a0]" />
                  </div>
                  <span className="font-mono-pro text-xs font-semibold text-[#3b82f6]">
                    {stage.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">{stage.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#8b95a5]">
                  {stage.description}
                </p>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[#1e242e] lg:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tech stack bar */}
        <Reveal delay={200}>
          <div className="mt-16 rounded-2xl border border-[#1e242e] bg-[#0e1116] p-8">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h4 className="text-sm font-semibold text-white">Analysis Engine</h4>
                <p className="mt-2 text-sm text-[#8b95a5]">Anthropic Claude 3.5 Sonnet</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Parsing</h4>
                <p className="mt-2 text-sm text-[#8b95a5]">Tree-sitter multi-language AST</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Standards</h4>
                <p className="mt-2 text-sm text-[#8b95a5]">CWE, OWASP Top 10, CVSS 3.1</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Output</h4>
                <p className="mt-2 text-sm text-[#8b95a5]">SARIF 2.1, PDF, JSON, PR comments</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
