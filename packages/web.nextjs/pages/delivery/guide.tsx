import Image from 'next/image';
import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';

function Guide() {
  return (
    <Content.Section
      styles={css`
        margin: 0;
        padding: 0;
        width: 100%;
      `}
    >
      <div>
        <img
          css={css`
            width: 100%;
          `}
          src="/delivery/guide/img_main.jpg"
          alt="Delivery Guide Main"
        />
      </div>

      <div
        css={css`
          background-color: #eae6e2;
        `}
      >
        <div
          css={css`
            width: 1050px;
            margin: 0 auto;
          `}
        >
          <Image src="/delivery/guide/img_delivery1.jpg" layout="fixed" width={1050} height={840} />
        </div>
      </div>

      <div
        css={css`
          width: 1050px;
          margin: 0 auto;
        `}
      >
        <Image src="/delivery/guide/img_delivery2.png" layout="fixed" width={1050} height={1134} />
      </div>

      <div
        css={css`
          width: 1050px;
          margin: 0 auto;
        `}
      >
        <Image src="/delivery/guide/img_delivery3.jpg" layout="fixed" width={1050} height={628} />
      </div>

      <div
        css={css`
          background-color: #d8d1df;
        `}
      >
        <div
          css={css`
            width: 1050px;
            margin: 0 auto;
          `}
        >
          <Image src="/delivery/guide/img_delivery4.jpg" layout="fixed" width={1050} height={340} />
        </div>
      </div>

      <div
        css={css`
          background-color: #e9e7f1;
        `}
      >
        <div
          css={css`
            width: 1050px;
            margin: 0 auto;
          `}
        >
          <Image src="/delivery/guide/img_delivery5.png" layout="fixed" width={1050} height={1195} />
        </div>
      </div>

      <div
        css={css`
          background-color: #e9e7f1;
        `}
      >
        <div
          css={css`
            width: 1050px;
            margin: 0 auto;
          `}
        >
          <Image src="/delivery/guide/img_delivery6.png" layout="fixed" width={1050} height={1006} />
        </div>
      </div>
    </Content.Section>
  );
}

export default Guide;
