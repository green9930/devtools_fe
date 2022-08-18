import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DetailEditor from 'components/DetailEditor';
import DetailViewer from 'components/DetailViewer';
import Comment from 'components/Comment';
import Loading from 'components/Loading';
import { __getDetail } from 'redux/modules/devToolsSlice';

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const { devtool, isLoading } = useSelector((state) => state.devTools);

  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch]);

  const handleEdit = () => setIsEdit(!isEdit);

  if (isLoading) return <Loading />;

  return (
    <>
      {isEdit ? (
        <DetailEditor devtool={devtool} handleEdit={handleEdit} />
      ) : (
        <>
          <DetailViewer devtool={devtool} handleEdit={handleEdit} />
          <Comment devtool={devtool} />
        </>
      )}
    </>
  );
};

export default Detail;
