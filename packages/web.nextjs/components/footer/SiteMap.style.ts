import { css } from '@emotion/react';

const style = {
  siteMapContainer: css`
    list-style: none;
    margin: 0;
    padding: 0 0 29px;
  `,
  siteMapItem: css`
    display: inline-block;

    &:not(:first-of-type) {
      margin-left: 14px;
    }
  `,
};

export default style;
