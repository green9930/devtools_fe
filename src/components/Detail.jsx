import { useState } from "react";
import DetailEditor from "components/DetailEditor";
import DetailViewer from "components/DetailViewer";
import Comment from "components/Comment";
import { useSelector } from "react-redux";

const Detail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { devtools } = useSelector((state) => state.devTools);

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
