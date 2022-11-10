import Link from 'next/link';
import { css, SerializedStyles } from '@emotion/react';
import { defaultStyle } from './index';

interface IProps {
  name: string;
  href: string;
  options?: {
    additionalStyle?: SerializedStyles[];
  };
}
function Shortcut(props: IProps) {
  const { name, href, options } = props;

  return (
    <Link href={href}>
      <button
        type="button"
        css={[
          defaultStyle,
          css`
            display: block;
            width: 140px;
            height: 40px;
            border: 1px solid rgb(226, 226, 226);
            border-radius: 3px;
            line-height: 39px;
            text-align: center;
            font-size: 14px;
          `,
          options ? options.additionalStyle : null,
        ]}
      >
        {name}
      </button>
    </Link>
  );
}

export default Shortcut;
