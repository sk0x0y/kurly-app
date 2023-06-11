import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styles?: SerializedStyles;
  nomessage?: boolean;
  children?: React.ReactNode;
}
function Base(props: IProps) {
  const { onClick, styles, nomessage, children } = props;

  return (
    <button
      onClick={onClick}
      type="button"
      css={[
        css`
          appearance: none;
          padding: 0;
          border: 0;
          background-color: transparent;
          cursor: pointer;
        `,
        styles,
      ]}
    >
      {!nomessage && (children ?? 'Not have children')}
    </button>
  );
}

export default Base;
