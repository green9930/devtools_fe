import React from "react";
import DetailViewer from "../components/DetailViewer";
import DetailEditor from "../components/DetailEditor";
import Comment from "../components/Comment";

const DetailPage = () => {
  return (
    <>
      <DetailViewer />
      <DetailEditor />
      <Comment />
    </>
  );
};

export default DetailPage;
