import Link from 'next/link';
import { css } from '@emotion/react';
import { useState } from 'react';
import CommonCenterMenuEntity from './_entity/CommonCenterMenu.entity';
import { ICommonCenterMenu } from '../../types/menu/CommonCenterMenu.interface';

function CommonCenterMenu() {
  const [menuList] = useState<ICommonCenterMenu[]>(new CommonCenterMenuEntity().entity);

  return (
    <ul
      css={css`
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      `}
    >
      {menuList.map(menu => (
        <li
          key={menu.id}
          css={css`
            width: 150px;
            padding-top: 5px;
            text-align: center;
          `}
        >
          <Link href={menu.url}>
            <button
              type="button"
              css={css`
                padding: 0;
                border: 0;
                background-color: transparent;
                font-weight: 500;
                font-size: 16px;
                cursor: pointer;

                &:hover {
                  border-bottom: 1px solid rgb(95, 0, 128);
                  color: rgb(95, 0, 128);
                }
              `}
            >
              {menu.name}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CommonCenterMenu;
