import { useState, useEffect } from "react";
import DetailEditor from "components/DetailEditor";
import DetailViewer from "components/DetailViewer";
import Comment from "components/Comment";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __getDetail } from "redux/modules/devToolsSlice";

const Detail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { id } = useParams();
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const dispatch = useDispatch();
  const { devtool } = useSelector((state) => state.devTools);

  useEffect(() => {
    dispatch(__getDetail(id));
  }, []);
  console.log(devtool);
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
