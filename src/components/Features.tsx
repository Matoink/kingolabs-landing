import { ScanLine, Brain, GitMerge, FileWarning, ShieldCheck, Gauge } from 'lucide-react';
import Reveal from './Reveal';

const features = [
  {
    icon: ScanLine,
    title: 'Automated Code Scanning',
    description:
      'Continuously scan every commit, pull request, and branch for security vulnerabilities, code smells, and anti-patterns — with zero manual configuration.',
    color: 'text-[#00d4a0]',
    glow: 'bg-[#00d4a0]/10',
  },
  {
    icon: Brain,
    title: 'Claude-Powered Deep Analysis',
    description:
      'Go beyond static analysis. Claude reads your code contextually, understanding business logic and data flows to surface real threats, not just pattern matches.',
    color: 'text-[#3b82f6]',
    glow: 'bg-[#3b82f6]/10',
  },
  {
    icon: FileWarning,
    title: 'Vulnerability Detection',
    description:
      'Detect OWASP Top 10 vulnerabilities, injection flaws, authentication bypasses, hardcoded secrets, and unsafe dependencies with precise file and line references.',
    color: 'text-[#f59e0b]',
    glow: 'bg-[#f59e0b]/10',
  },
  {
    icon: GitMerge,
    title: 'CI/CD Integration',
    description:
      'Drop KingoLabs into your existing pipeline with a single command. GitHub Actions, GitLab CI, Bitbucket Pipelines, and Jenkins are all supported out of the box.',
    color: 'text-[#00d4a0]',
    glow: 'bg-[#00d4a0]/10',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Reporting',
    description:
      'Generate audit-ready reports mapped to SOC 2, ISO 27001, OWASP, and NIST frameworks. Export to PDF, SARIF, or sync directly with your GRC tools.',
    color: 'text-[#3b82f6]',
    glow: 'bg-[#3b82f6]/10',
  },
  {
    icon: Gauge,
    title: 'Performance Profiling',
    description:
      'Identify performance bottlenecks, memory leaks, and inefficient algorithms alongside security findings — because fast code and safe code go hand in hand.',
    color: 'text-[#f59e0b]',
    glow: 'bg-[#f59e0b]/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#00d4a0]">
              Features
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Everything you need to ship
              <br />
              <span className="text-[#8b95a5]">secure code at scale</span>
            </h2>
            <p className="mt-5 text-lg text-[#8b95a5]">
              From automated scanning to Claude-powered deep analysis, KingoLabs covers
              the entire security lifecycle of your codebase.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-[#1e242e] bg-[#0e1116] p-7 transition-all hover:border-[#2a323e] hover:bg-[#161a22] hover:-translate-y-1">
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.glow}`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8b95a5]">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
