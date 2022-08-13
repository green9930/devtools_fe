import Layout from 'components/layout/Layout';
import Comment from 'components/Comment';
import DetailEditor from 'components/DetailEditor';
import DetailViewer from 'components/DetailViewer';

const DetailPage = () => {
  return (
    <Layout>
      <DetailViewer />
      <DetailEditor />
      <Comment />
    </Layout>
  );
};

export default DetailPage;
