import React, { MouseEvent } from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface ButtonOptions {
  display?: 'block' | 'inline-block' | 'flex';
  alignItems?: 'center';
  justifyContent?: 'center';
  width?: number | string;
  height?: number;
  border?: string;
  borderColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  fontWeight?: number;
  fontSize?: number;
  color?: string;
  cursor?: 'pointer' | 'default';
}
interface IProps {
  onClick?: (e: MouseEvent) => void;
  styles?: SerializedStyles;
  options?: ButtonOptions;
  children: React.ReactNode;
}
function Common(props: IProps) {
  const { onClick, styles, options, children } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      css={[
        css`
          display: ${options?.display ?? 'block'};
          align-items: ${options?.alignItems ?? undefined};
          justify-content: ${options?.justifyContent ?? undefined};
          width: ${options?.width ? `${options.width}px` : '100%'};
          height: ${options?.height ?? 44}px;
          border: ${options?.border ?? '1px solid rgb(95, 0, 128)'};
          border-color: ${options?.borderColor ?? undefined};
          border-radius: ${options?.borderRadius ?? '3px'};
          background-color: ${options?.backgroundColor ?? 'transparent'};
          text-align: center;
          font-weight: ${options?.fontWeight ?? 400};
          font-size: ${options?.fontSize ?? 16}px;
          color: ${options?.color ?? 'rgb(95, 0, 128)'};
          cursor: ${options?.cursor ?? 'default'};
        `,
        styles,
      ]}
    >
      {children}
    </button>
  );
}

export default Common;
