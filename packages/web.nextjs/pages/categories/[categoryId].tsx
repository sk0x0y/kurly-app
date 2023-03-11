import Content from '../../components/designsystem/content';
import { useRouter } from 'next/router';

function CategoryId(props) {
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    <Content.Section>
      <div>
        Category ID: <span>{categoryId}</span>
      </div>
    </Content.Section>
  );
}

export default CategoryId;
