import { SerializedStyles } from '@emotion/react';
import { SVGAttributes } from 'react';

interface IProps extends SVGAttributes<SVGElement> {
  styles?: SerializedStyles;
}
function NotCheckedIcon(props: IProps) {
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
        d="M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
        stroke="#ddd"
      />
      <path
        d="M7 12.6667L10.3846 16L18 8.5"
        stroke="#ddd"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NotCheckedIcon;
