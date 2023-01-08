import { css, SerializedStyles } from '@emotion/react';
import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  styles?: SerializedStyles;
  options?: {
    width?: number;
    height?: number;
    padding?: string;
    border?: string;
    borderRadius?: number;
    fontWeight?: number;
    fontSize?: number;
    color?: string;
    lineHeight?: number;
  };
}
function Common(props: IProps) {
  const { styles, options, id, placeholder, required } = props;

  return (
    <input
      id={id}
      placeholder={placeholder ?? 'Placeholder'}
      css={[
        css`
          width: ${options?.width ?? '100%'};
          height: ${options?.height ?? 46}px;
          padding: ${options?.padding ?? '0 11px 1px 15px'};
          border: ${options?.border ?? '1px solid rgb(221, 221, 221)'};
          border-radius: ${options?.borderRadius ?? 4}px;
          outline: none;
          font-weight: ${options?.fontWeight ?? 400};
          font-size: ${options?.fontSize ?? 16}px;
          color: ${options?.color ?? 'rgb(51, 51, 51)'};
          line-height: ${options?.lineHeight ?? 1.5};
        `,
        styles,
      ]}
      required={required}
    />
  );
}

export default Common;
