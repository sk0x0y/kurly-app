import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface IProps {
  styles?: SerializedStyles;
  children?: React.ReactNode;
}
function Base(props: IProps) {
  const { styles, children } = props;

  return (
    <button
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
