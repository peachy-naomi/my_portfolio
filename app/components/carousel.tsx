import Image from "next/image";

type Skill = {
  name: string;
  icon: string;
  description: string;
};

type Props = {
  skills: Skill[];
};

export default function CarouselSize({ skills }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 w-full scrollbar-hide">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex-shrink-0 w-40 bg-[var(--portfolio-bg)] border border-[var(--portfolio-surface-soft)] rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-[var(--portfolio-primary-purple)] transition-all duration-200 group"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <p className="text-sm font-semibold text-[var(--portfolio-text)] text-center group-hover:text-[var(--portfolio-primary-purple)] transition-colors">
            {skill.name}
          </p>
          <p className="text-xs text-[var(--portfolio-text-muted)] text-center leading-relaxed">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
}