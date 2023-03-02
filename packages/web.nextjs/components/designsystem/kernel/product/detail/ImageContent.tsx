import Image from 'next/image';
import { css } from '@emotion/react';
import { IContent } from '../../../../../infrastructure/interface/product.interface';
import ImageItem from './ImageItem';

interface IProps {
  content: IContent;
}
function ImageContent(props: IProps) {
  const { content } = props;

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {content.image?.map(image => (
        <div
          key={image.id}
          css={css`
            margin-bottom: 130px;
          `}
        >
          <div
            css={css`
              position: relative;
              height: ${image.height || 319}px;
            `}
          >
            <Image src={image.src || '/dummy/1050x319.png'} layout="fill" />
          </div>

          {image.paragraph?.map(p => {
            if (p.description) {
              return <ImageItem key={p.id} p={p} />;
            }

            if (p.text) {
              return (
                <p
                  key={p.id}
                  css={css`
                    margin-top: 55px;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 32px;
                    color: #373737;
                  `}
                >
                  {p.text}
                </p>
              );
            }

            return null;
          })}
        </div>
      ))}
    </>
  );
}

export default ImageContent;
