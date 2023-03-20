import { ReactNode } from 'react';

export interface ITooltip {
  children: ReactNode;
  text: string;
  position: `${YPosition}-${XPosition}`;
}

type YPosition = 'top' | 'bottom';
type XPosition = 'center' | 'right' | 'left';
