import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={cn("flex flex-col", isCenter ? "items-center text-center" : "items-start text-left")}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink dark:text-ivory text-balance">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 max-w-xl text-ink/60 dark:text-ivory/60 text-base leading-relaxed")}>
          {description}
        </p>
      )}
      <div className={cn("horizon-line", isCenter && "centered")} />
    </div>
  );
}
