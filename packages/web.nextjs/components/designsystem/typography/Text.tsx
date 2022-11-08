import React from 'react';
import { defaultStyle } from './index';

const TextType = {
  p: 'p',
  span: 'span',
  strong: 'strong',
};
interface IProps {
  type: keyof typeof TextType;
  children: React.ReactNode;
}
function Text(props: IProps) {
  const { type } = props;

  switch (type) {
    case 'p':
      return <p css={[defaultStyle]}>p</p>;

    case 'span':
      return <span css={[defaultStyle]}>span</span>;

    case 'strong':
      return <strong css={[defaultStyle]}>strong</strong>;

    default:
      return null;
  }
}

export default Text;
