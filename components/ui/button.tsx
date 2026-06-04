import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

const variants: Record<ButtonVariant, string> = {
  default: "bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-dark",
  secondary: "bg-foreground text-white hover:bg-brand",
  outline:
    "border border-border bg-white text-foreground hover:border-brand hover:bg-brand-tint",
  ghost: "text-foreground hover:bg-surface-alt hover:text-brand",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  default: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm",
};

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
