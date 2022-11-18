import Button from '../designsystem/button';
import { ISiteMap } from '../common/Footer';
import style from './SiteMap.style';

interface IProps {
  siteMaps: ISiteMap[];
}
function SiteMap(props: IProps) {
  const { siteMaps } = props;

  return (
    <ul css={style.siteMapContainer}>
      {siteMaps.map(siteMap => (
        <li key={siteMap.id} css={style.siteMapItem}>
          <Button.Anchor href={siteMap.href} isStrong={siteMap.isStrong}>
            {siteMap.name}
          </Button.Anchor>
        </li>
      ))}
    </ul>
  );
}

export default SiteMap;
