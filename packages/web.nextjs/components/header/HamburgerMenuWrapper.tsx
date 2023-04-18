import Image from 'next/image';
import { useState } from 'react';
import { css } from '@emotion/react';
import HamburgerMenu from './HamburgerMenu';

function HamburgerMenuWrapper() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <div
        onMouseEnter={() => {
          setIsHamburgerMenuOpen(true);
        }}
        onMouseLeave={() => {
          setIsHamburgerMenuOpen(false);
        }}
        css={css`
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          cursor: pointer;

          &:hover > span {
            color: rgb(95, 0, 128);
          }
        `}
      >
        <Image src={isHamburgerMenuOpen ? '/hamburger_active.svg' : '/hamburger.svg'} width={16} height={16} />
        <span
          css={css`
            margin-left: 12px;
            padding-top: 2px;
            font-weight: 500;
            font-size: 16px;
            letter-spacing: -0.3px;
          `}
        >
          카테고리
        </span>

        {isHamburgerMenuOpen && <HamburgerMenu setIsHamburgerMenuOpen={setIsHamburgerMenuOpen} />}
      </div>
    </div>
  );
}

export default HamburgerMenuWrapper;
