import { css } from '@emotion/react';

export interface IProps {
  isExpanded: boolean;
  entities: any[];
}
function FilterItem(props: IProps) {
  const { isExpanded, entities } = props;

  return (
    <ul
      css={css`
        opacity: ${isExpanded ? 1 : 0};
        max-height: ${isExpanded ? '100vh' : 0};
        transition: all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s;
        overflow: hidden;
      `}
    >
      {entities.map(entity => (
        <li
          key={entity.id}
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
            {entity.name}
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
  );
}

export default FilterItem;
