import { css } from '@emotion/react';

function Divider() {
  return (
    <div
      css={css`
        padding: 10px 0;
        border-bottom: 1px solid rgb(51, 51, 51);
      `}
    />
  );
}

export default Divider;
