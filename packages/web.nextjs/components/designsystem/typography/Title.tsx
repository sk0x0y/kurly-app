import React from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { defaultStyle } from './index';

const TitleLevel = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};
interface IProps {
  level: keyof typeof TitleLevel;
  children: React.ReactNode;
  options?: {
    additionalStyle?: SerializedStyles[];
  };
}
function Title(props: IProps) {
  const { level, children, options } = props;

  switch (level) {
    case 'h1':
      return <h1>{children}</h1>;

    case 'h2':
      return (
        <h2
          css={[
            defaultStyle,
            options ? options.additionalStyle : null,
            css`
              font-weight: 500;
              font-size: 20px;
            `,
          ]}
        >
          {children}
        </h2>
      );

    case 'h3':
      return <h3 css={[defaultStyle, options ? options.additionalStyle : null]}>{children}</h3>;

    case 'h4':
      return <h4 css={[defaultStyle, options ? options.additionalStyle : null]}>{children}</h4>;

    case 'h5':
      return <h5 css={[defaultStyle, options ? options.additionalStyle : null]}>{children}</h5>;

    case 'h6':
      return <h6 css={[defaultStyle, options ? options.additionalStyle : null]}>{children}</h6>;

    default:
      return null;
  }
}

export default Title;
