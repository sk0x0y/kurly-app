import { css } from '@emotion/react';

function Divider() {
  return (
    <div
      css={css`
        display: inline-block;
        width: 1px;
        height: 13px;
        margin: 0 12px;
        background-color: rgb(217, 217, 217);
      `}
    />
  );
}

export default Divider;
