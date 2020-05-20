import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

enum Tint {
  Primary = 'primary',
  PrimaryDestructive = 'primary-destructive',
  Secondary = 'secondary',
  SecondaryDestructive = 'secondary-destructive',
  Tertiary = 'tertiary',
  TertiaryDestructive = 'tertiary-destructive',
}

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  tint?: Tint;
}

export const Button: React.FC<Props> = ({
  children,
  tint,
  className = '',
  ...props
}) => (
  <button
    {...props}
    className={`button ${tint ? `button--${tint}` : ''} ${className}`}
  >
    {children}
  </button>
);
