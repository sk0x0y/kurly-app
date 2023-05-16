import Image from 'next/image';
import { css } from '@emotion/react';
import Button from '../designsystem/button';
import { StoreType } from '../../infrastructure/interface/product-detail.interface';

interface IProps {
  type: typeof StoreType[keyof typeof StoreType];
  isOpen: boolean;
  handleClick: () => void;
}
function SelectedProductStoreType(props: IProps) {
  const { type, isOpen, handleClick } = props;

  return (
    <h4
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        margin: 0;
        padding: 13px 5px 13px 0;

        &:not(:first-of-type) {
          border-top: 1px solid rgb(51, 51, 51);
        }
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <span
          css={css`
            display: inline-block;
            width: 30px;
            height: 30px;
            margin-right: 8px;
            background-image: ${type === StoreType.AMBIENT_TEMPERATURE &&
            'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNSA0KSIgc3Ryb2tlPSIjRkY5QjVDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjExLjUiIGN5PSIxMSIgcj0iNiIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xMS41IDB2Mk0xOS4yNzggMy4yMjJsLTEuNDE0IDEuNDE0TTIyLjUgMTFoLTJNMTkuMjc4IDE4Ljc3OGwtMS40MTQtMS40MTRNMTEuNSAyMnYtMk0zLjcyMiAxOC43NzhsMS40MTQtMS40MTRNLjUgMTFoMk0zLjcyMiAzLjIyMmwxLjQxNCAxLjQxNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)'};
            background-image: ${type === StoreType.FROZEN &&
            'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNS4wNDQgNGEuNzUuNzUgMCAwIDEgLjc0NC42NDhsLjAwNi4xMDJ2Mi42ODlsMS43Mi0xLjcyYS43NS43NSAwIDAgMSAuOTc3LS4wNzJsLjA4NC4wNzNhLjc1Ljc1IDAgMCAxIC4wNzIuOTc2bC0uMDcyLjA4NC0yLjc4IDIuNzgtLjAwMSA0LjM5IDMuODAyLTIuMTk0IDEuMDE4LTMuNzk4YS43NS43NSAwIDAgMSAxLjQ3LjI3OWwtLjAyLjEwOS0uNjMgMi4zNSAyLjMyOS0xLjM0NmEuNzUuNzUgMCAwIDEgLjgzNCAxLjI0M2wtLjA4NC4wNTctMi4zMjggMS4zNDQgMi4zNDguNjNhLjc1Ljc1IDAgMCAxIC41NS44MDlsLS4wMi4xMWEuNzUuNzUgMCAwIDEtLjgxLjU1bC0uMTA4LS4wMi0zLjc5OC0xLjAxOC0zLjgwMyAyLjE5NCAzLjgwMiAyLjE5NiAzLjc5OS0xLjAxOGEuNzUuNzUgMCAwIDEgLjQ5MyAxLjQxM2wtLjEwNS4wMzYtMi4zNS42MyAyLjMzIDEuMzQ0YS43NS43NSAwIDAgMS0uNjU5IDEuMzQ0bC0uMDkxLS4wNDQtMi4zMjgtMS4zNDQuNjI4IDIuMzQ4YS43NS43NSAwIDAgMS0uNDI1Ljg4MmwtLjEwNS4wMzdhLjc1Ljc1IDAgMCAxLS44ODItLjQyNmwtLjAzNy0uMTA1LTEuMDE3LTMuNzk3LTMuODAzLTIuMTk3djQuMzkxbDIuNzggMi43OGEuNzUuNzUgMCAwIDEtLjk3NiAxLjEzNGwtLjA4NC0uMDczLTEuNzItMS43MnYyLjY5YS43NS43NSAwIDAgMS0xLjQ5My4xMDJsLS4wMDctLjEwMnYtMi42ODhsLTEuNzIgMS43MThhLjc1Ljc1IDAgMCAxLS45NzYuMDczbC0uMDg0LS4wNzNhLjc1Ljc1IDAgMCAxLS4wNzMtLjk3NmwuMDczLS4wODQgMi43OC0yLjc4di00LjM5MWwtMy44MDEgMi4xOTUtMS4wMTggMy43OThhLjc1Ljc1IDAgMCAxLTEuNDctLjI3OWwuMDItLjEwOS42My0yLjM1LTIuMzI5IDEuMzQ2YS43NS43NSAwIDAgMS0uODM1LTEuMjQzbC4wODUtLjA1NyAyLjMyOC0xLjM0NC0yLjM0OC0uNjNhLjc1Ljc1IDAgMCAxLS41NTEtLjgwOWwuMDItLjExYS43NS43NSAwIDAgMSAuODEtLjU1bC4xMS4wMiAzLjc5NyAxLjAxOCAzLjgwMi0yLjE5NS0zLjgwMS0yLjE5NS0zLjc5OSAxLjAxOGEuNzUuNzUgMCAwIDEtLjQ5My0xLjQxM2wuMTA1LS4wMzYgMi4zNS0uNjMtMi4zMy0xLjM0NGEuNzUuNzUgMCAwIDEgLjY1OS0xLjM0NGwuMDkxLjA0NCAyLjMyOCAxLjM0NC0uNjI4LTIuMzQ4YS43NS43NSAwIDAgMSAuNDI1LS44ODJsLjEwNS0uMDM3YS43NS43NSAwIDAgMSAuODgyLjQyNmwuMDM3LjEwNSAxLjAxNyAzLjc5NyAzLjgwMiAyLjE5NnYtNC4zOWwtMi43OC0yLjc4YS43NS43NSAwIDAgMSAuOTc3LTEuMTM0bC4wODQuMDczIDEuNzIgMS43MTlWNC43NWEuNzUuNzUgMCAwIDEgLjc1LS43NXoiIGZpbGw9IiM2RkFGRjMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K)'};
            background-image: ${type === StoreType.COLD &&
            'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgzMHYzMEgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVFQzQ5RSIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjI3IDI1LjI1NWE3LjYyNyA3LjYyNyAwIDAgMCA3LjYyNi03LjYyN2MwLTIuODA4LTIuNTQyLTcuMTg0LTcuNjI2LTEzLjEyOEM5LjU0MiAxMC40NDQgNyAxNC44MiA3IDE3LjYyOGE3LjYyNyA3LjYyNyAwIDAgMCA3LjYyNyA3LjYyN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYyNyAyMC42NmEzLjgxMyAzLjgxMyAwIDAgMCAzLjgxMy0zLjgxMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K")'};
            background-size: cover;
            background-position: center center;
          `}
        />
        <span
          css={css`
            display: inline-block;
            margin-top: 4px;
            font-weight: 500;
            font-size: 18px;
          `}
        >
          {type === StoreType.AMBIENT_TEMPERATURE && '상온 상품'}
          {type === StoreType.FROZEN && '냉동 상품'}
          {type === StoreType.COLD && '냉장 상품'}
        </span>
      </div>

      <Button.Base
        onClick={handleClick}
        styles={css`
          height: 30px;
          padding-top: 1px;
          transform: ${!isOpen && 'rotate(180deg)'};
        `}
      >
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iN2EwMnFxZzNqYSIgZD0iTTExIDEyaDl2OSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMCAwaDMwdjMwSDB6Ii8+CiAgICAgICAgPHVzZSBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgdHJhbnNmb3JtPSJyb3RhdGUoLTQ1IDE1LjUgMTYuNSkiIHhsaW5rOmhyZWY9IiM3YTAycXFnM2phIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
          alt="접기"
          width={30}
          height={30}
        />
      </Button.Base>
    </h4>
  );
}

export default SelectedProductStoreType;
