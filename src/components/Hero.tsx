import { ArrowRight, ShieldCheck, Zap, GitBranch } from 'lucide-react';

const codeLines = [
  { text: '$ kingolabs scan --repo ./my-project', className: 'text-[#3b82f6]' },
  { text: '', className: '' },
  { text: '  Analyzing 1,247 files across 34 modules...', className: 'text-[#8b95a5]' },
  { text: '  Claude AI engine engaged. Deep audit in progress.', className: 'text-[#8b95a5]' },
  { text: '', className: '' },
  { text: '  [CRITICAL] SQL injection in auth/session.ts:42', className: 'text-[#ef4444]' },
  { text: '  [HIGH] Hardcoded API key in config/index.ts:8', className: 'text-[#f59e0b]' },
  { text: '  [MEDIUM] Missing input validation in utils/api.ts:91', className: 'text-[#facc15]' },
  { text: '  [LOW] Unused dependency: lodash@4.17.21', className: 'text-[#8b95a5]' },
  { text: '', className: '' },
  { text: '  12 issues found. 4 auto-fixable.', className: 'text-[#00d4a0]' },
  { text: '  Audit complete in 38.2s', className: 'text-[#00d4a0]' },
];

function Terminal() {
  return (
    <div className="relative rounded-xl border border-[#1e242e] bg-[#0e1116]/90 backdrop-blur-sm shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[#1e242e] px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#ef4444]/80" />
        <div className="h-3 w-3 rounded-full bg-[#f59e0b]/80" />
        <div className="h-3 w-3 rounded-full bg-[#00d4a0]/80" />
        <span className="ml-2 text-xs font-mono-pro text-[#8b95a5]">kingolabs-audit</span>
      </div>
      <div className="space-y-1 p-5 font-mono-pro text-sm leading-relaxed">
        {codeLines.map((line, i) => (
          <div
            key={i}
            className={line.className}
            style={{
              animation: `float-up 0.4s ease-out ${i * 0.18}s both`,
            }}
          >
            {line.text}
            {i === codeLines.length - 1 && (
              <span className="cursor-blink ml-1 text-[#00d4a0]">▊</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern radial-fade" />
      <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-[#00d4a0]/10 blur-[120px]" />
      <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-[#3b82f6]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="flex flex-col items-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1e242e] bg-[#0e1116] px-4 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-[#00d4a0]">
                <span className="h-2 w-2 animate-ping rounded-full bg-[#00d4a0]" />
              </span>
              <span className="text-xs font-medium text-[#8b95a5]">
                Powered by Anthropic Claude
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Secure your code
              <br />
              <span className="text-gradient">before it ships</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[#8b95a5] leading-relaxed">
              KingoLabs delivers enterprise-grade code auditing and security analysis
              powered by Claude. Find vulnerabilities, misconfigurations, and risky
              patterns in minutes — not weeks.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#00d4a0] px-7 py-3.5 text-base font-semibold text-black transition-all hover:shadow-[0_0_36px_-4px_rgba(0,212,160,0.6)] hover:scale-[1.02]"
              >
                Get Early Access
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-[#1e242e] bg-[#0e1116] px-7 py-3.5 text-base font-semibold text-white transition-all hover:border-[#2a323e] hover:bg-[#161a22]"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { icon: ShieldCheck, label: 'SOC 2 Ready' },
                { icon: Zap, label: '38s Avg Scan' },
                { icon: GitBranch, label: 'CI/CD Native' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-[#00d4a0]" />
                  <span className="text-sm text-[#8b95a5]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right terminal */}
          <div className="relative lg:pl-8">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#00d4a0]/10 to-[#3b82f6]/10 rounded-2xl blur-2xl" />
            <div className="relative">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
