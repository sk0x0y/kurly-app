import { css } from '@emotion/react';
import Common from './Common';
import Anchor from './Anchor';
import Shortcut from './Shortcut';
import Base from './Base';

export const defaultStyle = css`
  padding: 0;
  border: 0;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
`;

const Button = {
  Common,
  Anchor,
  Shortcut,
  Base,
};

export default Button;
