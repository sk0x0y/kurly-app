import { SVGAttributes } from 'react';
import { SerializedStyles } from '@emotion/react';

interface IProps extends SVGAttributes<SVGElement> {
  styles?: SerializedStyles;
}
function CheckedIcon(props: IProps) {
  const { styles, ...rest } = props;

  return (
    <svg
      css={styles}
      width={rest.width}
      height={rest.height}
      viewBox={`0 0 ${rest.width} ${rest.height}`}
      fill={rest.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill={rest.fill}
      />
      <path
        d="M7 12.6667L10.3846 16L18 8.5"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckedIcon;
