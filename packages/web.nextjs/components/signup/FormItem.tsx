import React from 'react';
import { css } from '@emotion/react';
import Input from '../designsystem/input';
import Button from '../designsystem/button';

interface IProps {
  label?: {
    required?: boolean;
    id?: string;
    name?: string;
  };
  button?: {
    disabled?: boolean;
    text?: string;
  };
  children?: React.ReactNode;
}
function FormItem(props: IProps) {
  const { label, button, children } = props;

  return (
    // Form Item
    <div
      css={css`
        display: flex;
        width: 100%;
        padding: 10px 20px;
      `}
    >
      <div
        css={css`
          width: 139px;
          padding-top: 13px;
        `}
      >
        <label
          htmlFor={label?.id}
          css={css`
            font-weight: 500;
          `}
        >
          {label?.name ?? '라벨 텍스트'}
          {label?.required && (
            <span
              css={css`
                color: rgb(238, 106, 123);
              `}
            >
              *
            </span>
          )}
        </label>
      </div>

      <div
        css={css`
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0;
        `}
      >
        {children}
      </div>

      <div
        css={css`
          width: 120px;
          margin-left: 8px;
        `}
      >
        {button?.text && (
          <Button.Common
            options={{
              borderColor: button?.disabled ? 'rgb(221, 221, 221)' : undefined,
              color: button?.disabled ? 'rgb(221, 221, 221)' : undefined,
              cursor: button?.disabled ? 'default' : 'pointer',
            }}
          >
            <span
              css={css`
                font-weight: 500;
                font-size: 14px;
              `}
            >
              {button?.text ?? '버튼 텍스트'}
            </span>
          </Button.Common>
        )}
      </div>
    </div>
  );
}

export default FormItem;
