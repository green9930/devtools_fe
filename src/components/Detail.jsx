import { useState } from 'react';
import DetailEditor from 'components/DetailEditor';
import DetailViewer from 'components/DetailViewer';
import Comment from 'components/Comment';

const Detail = () => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => setIsEdit(!isEdit);
  return (
    <>
      {isEdit ? (
        <DetailEditor handleEdit={handleEdit} />
      ) : (
        <>
          <DetailViewer handleEdit={handleEdit} />
          <Comment />
        </>
      )}
    </>
  );
};

export default Detail;
