import { css } from '@emotion/react';
import { IFilterData } from '../../../../infrastructure/interface/filter.interface';
import CheckBox from '../../input/checkbox';

export interface IProps {
  isExpanded: boolean;
  entities: IFilterData[];
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
          key={entity.key}
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: 18px;
            cursor: pointer;

            &:first-of-type {
              margin-top: 9px;
            }
          `}
        >
          <CheckBox.Item
            styles={{
              container: css`
                margin-right: 8px;
                padding: 0;
              `,
              default: css`
                width: 18px;
                height: 18px;
                background-position: center center;
                background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuNSAxMkMyMy41IDE4LjM1MTMgMTguMzUxMyAyMy41IDEyIDIzLjVDNS42NDg3MyAyMy41IDAuNSAxOC4zNTEzIDAuNSAxMkMwLjUgNS42NDg3MyA1LjY0ODczIDAuNSAxMiAwLjVDMTguMzUxMyAwLjUgMjMuNSA1LjY0ODczIDIzLjUgMTJaIiBzdHJva2U9IiNkZGQiPjwvcGF0aD48cGF0aCBkPSJNNyAxMi42NjY3TDEwLjM4NDYgMTZMMTggOC41IiBzdHJva2U9IiNkZGQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD48L3N2Zz4=);
                cursor: pointer;
              `,
              checked: css`
                background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMjRDMTguNjI3NCAyNCAyNCAxOC42Mjc0IDI0IDEyQzI0IDUuMzcyNTggMTguNjI3NCAwIDEyIDBDNS4zNzI1OCAwIDAgNS4zNzI1OCAwIDEyQzAgMTguNjI3NCA1LjM3MjU4IDI0IDEyIDI0WiIgZmlsbD0iIzVmMDA4MCI+PC9wYXRoPjxwYXRoIGQ9Ik03IDEyLjY2NjdMMTAuMzg0NiAxNkwxOCA4LjUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPjwvc3ZnPg==);
              `,
            }}
          />
          <span
            css={css`
              margin-right: 4px;
              padding-top: 2px;

              &:hover {
                color: rgb(141, 76, 196);
              }
            `}
          >
            {entity.name}
          </span>

          <span
            css={css`
              padding-top: 2px;
              font-size: 12px;
              color: rgb(204, 204, 204);
            `}
          >
            {entity.product_counts}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default FilterItem;
