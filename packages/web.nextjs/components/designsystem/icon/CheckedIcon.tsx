interface IProps {
  width?: number;
  height?: number;
}
function CheckedIcon(props: IProps) {
  const { width, height } = props;

  return (
    <svg width={width ?? 18} height={height ?? 18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default CheckedIcon;
