import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface IProps {
  id?: string;
  styles?: {
    container?: SerializedStyles;
    default?: SerializedStyles;
    checked?: SerializedStyles;
  };
  children?: React.ReactNode;
}
function Item(props: IProps) {
  const { id, styles, children } = props;

  return (
    <label
      htmlFor={id}
      css={[
        css`
          display: flex;
          align-items: center;
          padding: 8px 0;
        `,
        styles?.container,
      ]}
    >
      <input
        id={id}
        type="checkbox"
        css={[
          css`
            appearance: none;
            width: 24px;
            height: 24px;
            border: 1px solid rgb(221, 221, 221);
            border-radius: 50%;
          `,
          css`
            ${styles?.default}
          `,
          css`
            &:checked {
              ${styles?.checked}
            }
          `,
        ]}
      />
      {children}
    </label>
  );
}

export default Item;
