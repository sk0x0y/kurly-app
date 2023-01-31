import { useState } from 'react';
import { css } from '@emotion/react';
import Content from '../../components/designsystem/content';
import Typography from '../../components/designsystem/typography';
import Product from '../../components/designsystem/product';
import Button from '../../components/designsystem/button';
import ResetIcon from '../../components/designsystem/icon/ResetIcon';
import Pagination from '../../components/designsystem/pagination/Pagination';
import ItemSortTab from '../../components/designsystem/tab/ItemSortTab';
import ArrowUp from '../../components/designsystem/icon/ArrowUp';
import { IHamburgerMenu } from '../../types/menu/HamburgerMenu.interface';
import HamburgerMenuEntity from '../../components/header/_entity/HamburgerMenu.entity';

function NewProduct() {
  const [menuList] = useState<IHamburgerMenu[]>(new HamburgerMenuEntity().entity);

  return (
    <Content.Section
      styles={css`
        padding-top: 0;
      `}
    >
      <Product.CollectionBanner
        url="/categories/490"
        image={{ src: '/collection/banner/glVdP62yrvcvvzpsseGCDLUS3ErqbgPx8i8UGozE.png' }}
      />

      <Typography.Title
        level="h2"
        styles={css`
          font-size: 28px;
          text-align: center;
          letter-spacing: -1px;
        `}
      >
        신상품
      </Typography.Title>

      <div
        css={css`
          display: flex;
          margin-top: 50px;
        `}
      >
        {/* 필터 및 초기화 */}
        <div
          css={css`
            width: 220px;
            margin-right: 47px;
            flex-shrink: 0;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              padding-bottom: 20px;
              border-bottom: 1px solid rgb(238, 238, 238);
            `}
          >
            <span
              css={css`
                font-weight: 500;
                font-size: 15px;
              `}
            >
              필터
            </span>
            <button
              type="button"
              css={css`
                appearance: none;
                padding: 0;
                border: 0;
                background-color: transparent;
                cursor: pointer;
              `}
            >
              <ResetIcon />
              <span
                css={css`
                  margin-left: 5px;
                  font-weight: 500;
                  color: rgb(221, 221, 221);
                `}
              >
                초기화
              </span>
            </button>
          </div>

          {/* 필터 아이템(항목) */}
          <div
            css={css`
              border-bottom: 1px solid rgb(238, 238, 238);
            `}
          >
            <Button.Base
              styles={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 52px;
              `}
            >
              <span
                css={css`
                  font-weight: 500;
                  font-size: 15px;
                `}
              >
                카테고리
              </span>
              <ArrowUp />
            </Button.Base>

            <ul>
              {menuList.map(menu => (
                <li
                  key={menu.id}
                  css={css`
                    margin-bottom: 18px;
                    cursor: pointer;

                    &:first-of-type {
                      margin-top: 9px;
                    }
                  `}
                >
                  <span
                    css={css`
                      margin-right: 4px;

                      &:hover {
                        color: rgb(141, 76, 196);
                      }
                    `}
                  >
                    {menu.name}
                  </span>
                  <span
                    css={css`
                      font-size: 12px;
                      color: rgb(204, 204, 204);
                    `}
                  >
                    25
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 정렬탭, 아이템(상품) 리스트, 페이지네이션 */}
        <div
          css={css`
            width: 100%;
          `}
        >
          <ItemSortTab />
          <Pagination />
        </div>
      </div>
    </Content.Section>
  );
}

export default NewProduct;
