import React from 'react';
import { css } from '@emotion/react';

interface IProps {
  children?: React.ReactNode;
}
function Section(props: IProps) {
  const { children } = props;

  return (
    <section
      css={css`
        width: 1050px;
        margin: 0 auto;
        padding: 50px 0;
      `}
    >
      {children}
    </section>
  );
}

export default Section;
