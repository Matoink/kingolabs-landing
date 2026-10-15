import { Shield, Mail, Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Architecture', href: '#architecture' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Early Access', href: '#contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'DPA', href: '#' },
    ],
  },
];

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-[#1e242e] bg-[#0a0c10]">
      {/* CTA banner */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative -translate-y-1/2 overflow-hidden rounded-2xl border border-[#1e242e] bg-gradient-to-br from-[#0e1116] to-[#161a22] p-10 md:p-14">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#00d4a0]/10 blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#3b82f6]/10 blur-[80px]" />
          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to secure your codebase?
              </h3>
              <p className="mt-2 text-[#8b95a5]">
                Get early access to KingoLabs and start shipping safer code today.
              </p>
            </div>
            <a
              href="mailto:founder@kingolabs.online"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#00d4a0] px-7 py-3.5 text-base font-semibold text-black transition-all hover:shadow-[0_0_36px_-4px_rgba(0,212,160,0.6)] hover:scale-[1.02]"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="mx-auto max-w-7xl px-6 pb-12 -mt-8">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4a0] to-[#3b82f6]">
                <Shield className="h-5 w-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Kingo<span className="text-[#00d4a0]">Labs</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8b95a5]">
              Enterprise code auditing and security analysis powered by Anthropic Claude.
              Find vulnerabilities before they ship.
            </p>
            <a
              href="mailto:founder@kingolabs.online"
              className="mt-5 inline-flex items-center gap-2 text-sm text-[#8b95a5] hover:text-[#00d4a0] transition-colors"
            >
              <Mail className="h-4 w-4" />
              founder@kingolabs.online
            </a>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#8b95a5] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1e242e] pt-8 sm:flex-row">
          <p className="text-xs text-[#8b95a5]">
            © {new Date().getFullYear()} KingoLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1e242e] bg-[#0e1116] text-[#8b95a5] transition-all hover:border-[#00d4a0]/40 hover:text-[#00d4a0]"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
