import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { css } from '@emotion/react';
import { useCategoryGroup } from '../../hooks';

function HamburgerMenu() {
  const { data: categories } = useCategoryGroup();
  const [currentCursor, setCurrentCursor] = useState<number>(0);
  // Presenter(Controller) -> DTO -> Entity

  return (
    <div
      css={css`
        position: absolute;
        left: 0;
        top: 56px;
        z-index: 10;
        width: ${currentCursor !== 0 && '517px'};
        min-height: 200px;
        border: 1px solid rgb(221, 221, 221);
        background-color: #fff;
      `}
    >
      <ul
        css={css`
          width: 266px;
          max-height: calc(95vh - 55px);
          margin: 0;
          padding: 0;
          overflow-y: scroll;
        `}
      >
        {categories &&
          categories.data.data.main.map(item => (
            <Link key={item.code} href={item.code}>
              <li
                onMouseEnter={() => {
                  setCurrentCursor(Number(item.code));
                }}
                onMouseLeave={() => {
                  setCurrentCursor(0);
                }}
                css={css`
                  list-style: none;
                  padding: 7px 0 9px 14px;

                  &:hover {
                    background-color: rgb(247, 247, 247);
                    color: rgb(95, 0, 128);
                  }
                `}
              >
                <div
                  css={css`
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: flex-start;
                  `}
                >
                  <Image
                    src={currentCursor === Number(item.code) ? item.pc_icon_active_url : item.pc_icon_url}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                  <span
                    css={css`
                      font-weight: ${currentCursor === Number(item.code) && 500};
                      padding: 1px 20px 0 10px;
                      line-height: 22px;
                    `}
                  >
                    {item.name}
                  </span>
                </div>
                {currentCursor === Number(item.code) && (
                  <ul
                    css={css`
                      position: absolute;
                      top: 0;
                      left: 250px;
                      z-index: 1000;
                      width: 266px;
                      height: 100%;
                      padding: 0;
                      background-color: rgb(247, 247, 247);
                      overflow-y: scroll;
                      list-style: none;
                    `}
                  >
                    {item.sub_category_groups.map(child => (
                      <Link key={child.code} href={child.code}>
                        <li
                          css={css`
                            display: flex;
                            align-items: center;
                            padding: 11px 20px 11px 18px;
                            line-height: 22px;

                            &:hover > span {
                              font-weight: 500;
                              color: rgb(95, 0, 128);
                              text-decoration: underline;
                            }
                          `}
                        >
                          <span
                            css={css`
                              line-height: 18px;
                              color: rgb(51, 51, 51);
                            `}
                          >
                            {child.name}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}

export default HamburgerMenu;
