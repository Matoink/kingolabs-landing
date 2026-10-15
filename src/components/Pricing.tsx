import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'For individual developers and open-source projects.',
    features: [
      '1 repository',
      '50 scans / month',
      'Basic vulnerability detection',
      'GitHub integration',
      'Community support',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Team',
    price: '$49',
    period: 'per seat / month',
    description: 'For growing teams that need automated, continuous auditing.',
    features: [
      '10 repositories',
      'Unlimited scans',
      'Claude deep analysis engine',
      'CI/CD pipeline integration',
      'SARIF + PDF export',
      'Slack & email alerts',
      'Priority support',
    ],
    cta: 'Start 14-Day Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For organizations with custom security and compliance needs.',
    features: [
      'Unlimited repositories',
      'Unlimited scans + teams',
      'Custom Claude model tuning',
      'SOC 2 / ISO 27001 reporting',
      'SAML SSO + RBAC',
      'Dedicated success manager',
      'On-prem deployment option',
      '99.9% uptime SLA',
    ],
    cta: 'Talk to Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#00d4a0]">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Transparent, predictable pricing
            </h2>
            <p className="mt-5 text-lg text-[#8b95a5]">
              Start free, scale when you need to. No hidden fees, no per-scan surprises.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div
                className={`relative h-full rounded-2xl border p-8 transition-all ${
                  plan.highlighted
                    ? 'border-[#00d4a0]/50 bg-[#0e1116] glow-primary lg:scale-[1.03]'
                    : 'border-[#1e242e] bg-[#0e1116] hover:border-[#2a323e]'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00d4a0] px-4 py-1 text-xs font-bold text-black">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-[#8b95a5]">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-sm text-[#8b95a5]">{plan.period}</span>
                </div>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? 'bg-[#00d4a0] text-black hover:shadow-[0_0_24px_-4px_rgba(0,212,160,0.6)]'
                      : 'border border-[#2a323e] bg-[#161a22] text-white hover:border-[#3a424e]'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>

                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.highlighted ? 'bg-[#00d4a0]/15' : 'bg-[#161a22]'
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${
                            plan.highlighted ? 'text-[#00d4a0]' : 'text-[#8b95a5]'
                          }`}
                        />
                      </div>
                      <span className="text-sm text-[#e6e9ee]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
