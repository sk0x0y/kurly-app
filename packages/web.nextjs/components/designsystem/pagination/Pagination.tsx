// import Link from 'next/link';
import { css } from '@emotion/react';
import Image from 'next/image';

function Pagination() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        margin-top: 36px;

        > a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-top: 1px solid rgb(221, 221, 221);
          border-right: 1px solid rgb(221, 221, 221);
          border-bottom: 1px solid rgb(221, 221, 221);
          border-image: initial;
          cursor: pointer;

          &:first-of-type {
            border-left: 1px solid rgb(221, 221, 221);
          }
        }
      `}
    >
      <a>
        <Image
          width={9}
          height={7}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAHUlEQVR42mNgAIPi/8X/kWkwA8SE0UQIMJAsCKMBBzk27fqtkcYAAAAASUVORK5CYII="
          alt="처음 페이지로 이동하기 아이콘"
        />
      </a>
      <a className="css-1d20dg7 e82lnfz0">
        <Image
          width={5}
          height={7}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGElEQVR42mNgAIPi/8X/4QwwE5PBQJADAAKSG3cyVhtXAAAAAElFTkSuQmCC"
          alt="이전 페이지로 이동하기 아이콘"
        />
      </a>
      <a
        css={css`
          background-color: rgb(247, 247, 247);
          color: rgb(95, 0, 128);
        `}
      >
        1
      </a>
      <a>2</a>
      <a>
        <Image
          width={5}
          height={7}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGUlEQVR42mMo/l/8nwECQEwCHEwGhAlRBgA2mht3SwgzrwAAAABJRU5ErkJggg=="
          alt="다음 페이지로 이동하기 아이콘"
        />
      </a>
      <a className="css-1d20dg7 e82lnfz0">
        <Image
          width={9}
          height={7}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAIElEQVR42mMo/l/8n4GBgQFGQ5kgDowmQZCwAMImhDkAb0k27Zcisn8AAAAASUVORK5CYII="
          alt="마지막 페이지로 이동하기 아이콘"
        />
      </a>
    </div>
  );
}

export default Pagination;
