import Image from "next/image";
import { Container } from "../Container";
import { IconCalendar, IconGear, IconTarget, IconShield } from "../icons";
import { company } from "@/content/company";

const STAT_ICONS = [IconCalendar, IconGear, IconTarget, IconShield];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/factory-exterior.jpg"
          alt="Pemraj Industries factory, Vadgaon Dhayari, Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center]"
        />
        <div className="absolute inset-0 bg-navy-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-navy-deep/45" />
      </div>

      <Container className="relative pt-28 pb-16 md:pt-36 md:pb-20 flex flex-col items-center text-center">
        <h1 className="font-display font-semibold text-[13vw] leading-[0.95] sm:text-[7vw] lg:text-[5.75rem] max-w-4xl">
          Engineering precision since 1983.
        </h1>

        <p className="mt-7 max-w-xl text-white/75 text-[16px] leading-relaxed">
          Four decades of CNC turning, Swiss turning and turn-mill expertise,
          delivering precision components to automotive, defence, hydraulics
          and electronics manufacturers worldwide.
        </p>

      </Container>

      <Container className="relative pb-10">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-5 border-t border-white/15 pt-8">
          {company.stats.map((s, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <div key={s.label} className="flex items-center gap-3">
                <Icon className="text-gold shrink-0" />
                <div className="flex items-baseline gap-2">
                  <span className="tnum font-display text-2xl md:text-3xl font-semibold">
                    {s.value}
                  </span>
                  <span className="label text-white/50">{s.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
