import React from 'react';
import { css } from '@emotion/react';

interface ButtonOptions {
  display?: 'block' | 'inline-block';
  width?: number;
  height?: number;
  border?: string;
  borderRadius?: number;
  backgroundColor?: string;
  fontWeight?: number;
  fontSize?: number;
  color?: string;
}
interface IProps {
  options?: ButtonOptions;
  children: React.ReactNode;
}
function Common(props: IProps) {
  const { options, children } = props;

  return (
    <button
      type="button"
      css={css`
        display: ${options?.display ?? 'block'};
        width: ${options?.width ?? '100%'};
        height: ${options?.height ?? 44}px;
        border: ${options?.border ?? '1px solid rgb(95, 0, 128)'};
        border-radius: ${options?.borderRadius ?? '3px'};
        background-color: ${options?.backgroundColor ?? 'transparent'};
        text-align: center;
        font-weight: ${options?.fontWeight ?? 400};
        font-size: ${options?.fontSize ?? 16}px;
        color: ${options?.color ?? 'rgb(95, 0, 128)'};
        cursor: pointer;
      `}
    >
      {children}
    </button>
  );
}

export default Common;
