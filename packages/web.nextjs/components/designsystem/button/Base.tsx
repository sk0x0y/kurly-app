import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface IProps {
  onClick: () => void;
  styles?: SerializedStyles;
  children?: React.ReactNode;
}
function Base(props: IProps) {
  const { onClick, styles, children } = props;

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
      {children ?? 'Not have children'}
    </button>
  );
}

export default Base;
