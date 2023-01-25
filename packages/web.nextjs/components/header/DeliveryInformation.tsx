import Link from 'next/link';
import { css } from '@emotion/react';

function DeliveryInformation() {
  return (
    <div
      css={css`
        line-height: 56px;
      `}
    >
      <Link href="/delivery/guide">
        <button
          type="button"
          css={css`
            padding: 6px 16px;
            border: 1px solid rgb(238, 238, 238);
            border-radius: 18px;
            background-color: transparent;
            font-size: 13px;
            letter-spacing: -0.32px;
            color: rgb(102, 102, 102);
          `}
        >
          <span
            css={css`
              font-weight: 500;
              color: rgb(95, 0, 128);
            `}
          >
            샛별・낮
          </span>
          &nbsp;
          <span>배송안내</span>
        </button>
      </Link>
    </div>
  );
}

export default DeliveryInformation;
