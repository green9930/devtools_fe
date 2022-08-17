import { useState, useEffect } from 'react';
import DetailEditor from 'components/DetailEditor';
import DetailViewer from 'components/DetailViewer';
import Comment from 'components/Comment';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { __getDetail } from 'redux/modules/devToolsSlice';
import Loading from 'components/Loading';

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => setIsEdit(!isEdit);

  useEffect(() => {
    dispatch(__getDetail(id));
  }, [dispatch]);

  const { devtool, error, isLoading } = useSelector((state) => state.devTools);

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
