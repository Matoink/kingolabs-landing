import Reveal from './Reveal';

const logos = [
  'Vercel', 'Stripe', 'Linear', 'Notion', 'Supabase', 'Ramp', 'Retool', 'Figma',
];

export default function LogoStrip() {
  return (
    <section className="relative py-12 border-b border-[#1e242e]">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#8b95a5]">
            Trusted by engineering teams building the future
          </p>
          <div className="mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee gap-16 pr-16">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap text-xl font-bold text-[#3a424e] transition-colors hover:text-[#8b95a5]"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
