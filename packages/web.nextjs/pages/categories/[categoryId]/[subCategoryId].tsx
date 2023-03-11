import Content from '../../../components/designsystem/content';
import { useRouter } from 'next/router';

function SubCategoryId(props) {
  const router = useRouter();
  const { categoryId, subCategoryId } = router.query;

  return (
    <Content.Section>
      <div>
        Category ID: <span>{categoryId}</span>
      </div>

      <div>
        SubCategory ID: <span>{subCategoryId}</span>
      </div>
    </Content.Section>
  );
}

export default SubCategoryId;
