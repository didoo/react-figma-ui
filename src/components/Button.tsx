import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import type { Tint } from '../types';

interface Props
  extends Readonly<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  > {
  readonly tint?: Tint;
  readonly destructive?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  tint,
  destructive,
  className = '',
  ...props
}) => (
  <button
    {...props}
    className={classNames(
      'button',
      className,
      tint ? `button--${tint}${destructive ? '-destructive' : ''}` : ''
    )}
  >
    {children}
  </button>
);
