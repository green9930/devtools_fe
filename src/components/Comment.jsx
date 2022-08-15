import CommentForm from "components/CommentForm";
import CommentList from "components/CommentList";
import { useState, useEffect } from "react";
import { __getDetail } from "redux/modules/devToolsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Comment = ({ devtool }) => {
  return (
    <div>
      <CommentForm />
      <CommentList devtool={devtool} />
    </div>
  );
};

export default Comment;
