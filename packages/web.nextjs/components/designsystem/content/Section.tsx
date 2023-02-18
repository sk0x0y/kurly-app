import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface IProps {
  styles?: SerializedStyles;
  children?: React.ReactNode;
}
function Section(props: IProps) {
  const { styles, children } = props;

  return (
    <section
      css={[
        css`
          width: 1050px;
          margin: 0 auto;
          padding: 50px 0;
        `,
        styles,
      ]}
    >
      {children}
    </section>
  );
}

export default Section;
