import CommentForm from 'components/CommentForm';
import CommentList from 'components/CommentList';

const Comment = ({ devtool }) => {
  return (
    <div>
      <CommentForm />
      <CommentList devtool={devtool} />
    </div>
  );
};

export default Comment;
