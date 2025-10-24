import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-accent text-accent-foreground shadow-soft hover:shadow-lg focus-visible:ring-2 focus-visible:ring-accent/60',
  secondary: 'bg-muted text-foreground hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-accent/40',
  ghost: 'bg-transparent text-foreground hover:bg-muted/70 focus-visible:ring-2 focus-visible:ring-accent/30'
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 rounded-full px-4 text-sm',
  md: 'h-11 rounded-full px-6 text-base',
  lg: 'h-12 rounded-full px-8 text-lg'
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition duration-200 focus:outline-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  );
});
