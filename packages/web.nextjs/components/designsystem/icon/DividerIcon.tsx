import { css } from '@emotion/react';

function DividerIcon() {
  return (
    <svg
      width="1"
      height="10"
      viewBox="0 0 1 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css`
        margin: 0 6px;
      `}
    >
      <line x1="0.5" y1="2.18557e-08" x2="0.5" y2="10" stroke="#ccc" />
    </svg>
  );
}

export default DividerIcon;
