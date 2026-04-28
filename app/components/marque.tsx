'use client'

export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-[var(--portfolio-bg)] p-2 h-full mx-1 md:hidden">
      <div className="inline-block animate-marquee">
        <span className="mx-2 text-[var(--portfolio-text-muted)] drop-shadow-md font-semibold">HELLO,</span>
        <span className="mx-2 text-[var(--portfolio-primary-purple)]        drop-shadow-md font-semibold">I'M </span>
        <span className="mx-2 text-[var(--portfolio-text)] font-semibold drop-shadow-md">AN</span>
        <span className="mx-2 text-[var(--portfolio-primary-purple)] font-semibold drop-shadow-md">ARTIFICIAL</span>
        <span className="mx-2 drop-shadow-md font-semibold text-[var(--portfolio-text-muted)]">INTELLIGENCE</span>
        <span className="mx-2 text-[var(--portfolio-primary-purple)] font-semibold">ENGINEER</span>
        
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}