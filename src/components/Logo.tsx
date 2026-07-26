import Image from "next/image";

export function Logo({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span className={`inline-block relative h-[42px] w-[130px] align-middle ${className}`}>
      <Image
        src={dark ? "/images/logo-white.png" : "/images/logo.png"}
        alt="Pemraj Industries"
        fill
        sizes="150px"
        priority
        className="object-contain object-left"
      />
    </span>
  );
}
