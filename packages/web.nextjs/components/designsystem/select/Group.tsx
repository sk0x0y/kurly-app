import { css } from '@emotion/react';
import { useState } from 'react';
import Select from './index';
import Button from '../button';
import { useLocalNewProductEntity } from '../../../infrastructure/zustand';

function Group() {
  const [isExpanded, setIsExpanded] = useState(false);
  const productEntity = useLocalNewProductEntity();
  const [selectedEntity, setSelectedEntity] = useState([]);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Button.Base
        onClick={() => setIsExpanded(!isExpanded)}
        styles={css`
          display: inline-flex;
          align-items: center;
          width: 100%;
          height: 40px;
          padding: 0 14px;
          border: 1px solid rgb(221, 221, 221);
          font-size: 12px;
          line-height: 1.4375em;
          letter-spacing: 0.00938em;
          cursor: pointer;
          user-select: none;
        `}
      >
        <p>상품을 선택해주세요</p>
        <i
          css={css`
            position: absolute;
            right: 10px;
            display: inline-block;
            width: 24px;
            height: 24px;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiIC8+PC9zdmc+Cg==');
            transform: ${isExpanded && 'rotate(180deg)'};
          `}
        />
      </Button.Base>

      <Select.List
        isExpanded={isExpanded}
        productEntity={productEntity}
        onClick={subProduct => {
          setSelectedEntity([]);

          console.log(selectedEntity);
        }}
      />

      {/* 선택 된 리스트 아이템을 보여주는 컴포넌트 */}
      <Select.SelectedItem selectedEntity={selectedEntity} />
    </div>
  );
}

export default Group;
