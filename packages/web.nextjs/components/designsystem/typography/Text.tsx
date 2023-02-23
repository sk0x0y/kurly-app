import React from 'react';
import { SerializedStyles } from '@emotion/react';
import { defaultStyle } from './index';

const TextType = {
  p: 'p',
  span: 'span',
  strong: 'strong',
};
interface IProps {
  type: keyof typeof TextType;
  styles?: SerializedStyles;
  children: React.ReactNode;
  options?: {
    additionalStyle?: SerializedStyles[];
  };
}
function Text(props: IProps) {
  const { type, styles, children, options } = props;

  switch (type) {
    case 'p':
      return <p css={[defaultStyle, options ? options.additionalStyle : null, styles]}>{children}</p>;

    case 'span':
      return <span css={[defaultStyle, options ? options.additionalStyle : null, styles]}>{children}</span>;

    case 'strong':
      return <strong css={[defaultStyle, options ? options.additionalStyle : null, styles]}>{children}</strong>;

    default:
      return null;
  }
}

export default Text;
