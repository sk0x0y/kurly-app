import React, { ButtonHTMLAttributes } from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: SerializedStyles;
  nomessage?: boolean;
}
function Base(props: IProps) {
  const { onClick, styles, nomessage, disabled, children } = props;

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
      disabled={disabled}
    >
      {!nomessage && (children ?? 'Not have children')}
    </button>
  );
}

export default Base;
