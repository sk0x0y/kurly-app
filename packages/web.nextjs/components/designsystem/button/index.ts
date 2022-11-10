import { css } from '@emotion/react';
import Anchor from './Anchor';
import Shortcut from './Shortcut';

export const defaultStyle = css`
  padding: 0;
  border: 0;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
`;

const Button = {
  Anchor,
  Shortcut,
};

export default Button;
