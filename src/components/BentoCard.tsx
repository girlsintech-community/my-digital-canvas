import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * Glass-morphism bento card.
 * Translucent surface with backdrop blur, subtle gradient border, soft inner glow, hover lift.
 * Theme-aware (works on both light and dark backgrounds).
 */
const BentoCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-foreground/[0.03] dark:bg-foreground/[0.04]",
        "backdrop-blur-xl",
        "border border-foreground/10",
        "shadow-[0_1px_0_0_hsl(var(--foreground)/0.08)_inset,0_8px_32px_-12px_hsl(var(--foreground)/0.15)]",
        "transition-all duration-300",
        "hover:border-foreground/20 hover:shadow-[0_1px_0_0_hsl(var(--foreground)/0.12)_inset,0_12px_40px_-12px_hsl(var(--foreground)/0.25)]",
        "hover:-translate-y-0.5",
        className,
      )}
      {...props}
    />
  ),
);
BentoCard.displayName = "BentoCard";

export default BentoCard;
