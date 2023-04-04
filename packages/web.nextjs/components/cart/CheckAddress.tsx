import Link from 'next/link';
import { css } from '@emotion/react';
import Button from '../designsystem/button';

function CheckAddress() {
  return (
    <div
      css={css`
        padding: 23px 19px 20px;
        border: 1px solid #f2f2f2;
        border-bottom: 0;
      `}
    >
      <h3
        css={css`
          margin: 0;
          padding-left: 24px;
          font-size: 16px;
          font-weight: 500;
          line-height: 20px;
          background: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg) 0 50% no-repeat;
          -webkit-background-size: 20px 20px;
          background-size: 20px 20px;
        `}
      >
        배송지
      </h3>

      <div
        css={css`
          margin-top: 12px;
        `}
      >
        <p
          css={css`
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
          `}
        >
          <em
            css={css`
              font-style: normal;
              color: #5f0080;
            `}
          >
            배송지를 등록
          </em>
          하고
          <br />
          구매 가능한 상품을 확인하세요!
        </p>

        <Link href="https://www.kurly.com/address/shipping-address" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Button.Common
              styles={css`
                margin-top: 16px;
                height: 36px;
                font-size: 12px;
                cursor: pointer;
              `}
            >
              <span
                css={css`
                  display: inline-block;
                  line-height: 21px;
                `}
              >
                <img
                  css={css`
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    vertical-align: top;
                  `}
                  src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"
                  alt=""
                />
                주소 검색
              </span>
            </Button.Common>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default CheckAddress;
