import { css, SerializedStyles } from '@emotion/react';
import { IContent } from '../../../../../infrastructure/interface/product.interface';
import Kernel from '../../index';

interface IProps {
  content: IContent;
  styles?: { title: SerializedStyles };
}
function Content(props: IProps) {
  const { content, styles } = props;

  return (
    <div
      css={css`
        margin-bottom: 170px;
      `}
    >
      {/* 컨텐츠 섹션 제목 */}
      {content.image && <Kernel.Product.Detail.Title content={content} styles={styles?.title} />}

      {/* 이미지 렌더링 */}
      <Kernel.Product.Detail.ImageContent content={content} />
    </div>
  );
}

export default Content;
