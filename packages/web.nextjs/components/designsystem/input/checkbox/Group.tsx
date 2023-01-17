import React from 'react';
import { css } from '@emotion/react';

interface IProps {
  defaultValue?: string;
  children: any;
}
function Group(props: IProps) {
  const { children } = props;
  // const PropsWithChildren = () => {
  //   return React.Children.map(children, child => React.cloneElement(child, {}));
  // };

  // TODO: 머하지

  return (
    <fieldset
      css={css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0;
        border: 0;
      `}
    >
      {children}
    </fieldset>
  );
}

export default Group;
