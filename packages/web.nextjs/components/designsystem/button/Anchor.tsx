import Link from 'next/link';
import { defaultStyle } from './index';
import AnchorButtonStyle from './Anchor.style';

interface IProps {
  name: string;
  href: string;
  isStrong?: boolean;
}
function Anchor(props: IProps) {
  const { name, href, isStrong } = props;

  return (
    <Link href={href}>
      {isStrong ? (
        <button type="button" css={[defaultStyle, AnchorButtonStyle]}>
          <strong>{name}</strong>
        </button>
      ) : (
        <button type="button" css={[defaultStyle, AnchorButtonStyle]}>
          {name}
        </button>
      )}
    </Link>
  );
}

export default Anchor;
