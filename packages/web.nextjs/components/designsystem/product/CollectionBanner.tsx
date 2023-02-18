import Link from 'next/link';
import Image from 'next/image';
import { css } from '@emotion/react';

interface IProps {
  url?: string;
  image?: {
    src: string;
  };
}
function CollectionBanner(props: IProps) {
  const { url, image } = props;

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        height: 400px;
        margin-bottom: 50px;
        cursor: pointer;
      `}
    >
      {/* NOTE: Next Image 사용 시 부모 요소에 position: relative; 를 적용해야 이미지가 가득 참 */}
      <Link href={url ?? '/'}>
        <a>
          <Image layout="fill" src={image ? image?.src : '/dummy/1050x400.png'} alt="배너 이미지" priority />
        </a>
      </Link>
    </div>
  );
}

export default CollectionBanner;
