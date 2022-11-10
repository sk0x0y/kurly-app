import Link from 'next/link';
import { SerializedStyles } from '@emotion/react';
import React from 'react';
import { defaultStyle } from './index';
import AnchorButtonStyle from './Anchor.style';

interface IProps {
  name?: string;
  href: string;
  isStrong?: boolean;
  children: React.ReactNode;
  options?: {
    additionalStyle?: SerializedStyles[];
  };
}
function Anchor(props: IProps) {
  const { name, href, isStrong, children, options } = props;

  return (
    <Link href={href}>
      {isStrong ? (
        <button type="button" css={[defaultStyle, AnchorButtonStyle, options ? options.additionalStyle : null]}>
          <strong style={{ fontWeight: 500 }}>{name ?? children}</strong>
        </button>
      ) : (
        <button type="button" css={[defaultStyle, AnchorButtonStyle, options ? options.additionalStyle : null]}>
          {name ?? children}
        </button>
      )}
    </Link>
  );
}

export default Anchor;
