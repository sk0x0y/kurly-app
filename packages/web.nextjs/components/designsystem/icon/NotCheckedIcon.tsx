interface IProps {
  width?: number;
  height?: number;
}
function NotCheckedIcon(props: IProps) {
  const { width, height } = props;

  return (
    <svg width={width ?? 18} height={height ?? 18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#5f0080"
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

export default NotCheckedIcon;
