import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Input from 'components/elements/Input';
import Btn from 'components/elements/Btn';
import { colors } from 'styles/theme';
import lengthVali from 'utils/lengthVali';
import { __postComments } from 'redux/modules/devToolsSlice';

const CommentForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [alertMessage, setAlertMessage] = useState('');
  const [text, setText] = useState('');

  const { username } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    text.trim() === ''
      ? setAlertMessage('댓글을 입력해 주세요.(최대 40자)')
      : setAlertMessage('');
    dispatch(
      __postComments({
        articleId: id,
        comment: text,
      })
    );
  };

  const handleChange = (e) => {
    const { val, verify } = lengthVali(e.target.value, 40);
    verify
      ? setAlertMessage('댓글은 40자까지 작성할 수 있습니다.')
      : setAlertMessage('');
    setText(val);
  };

  return (
    <>
      <CommentFormContainer>
        <NameContainer>
          <span>{username}</span>
        </NameContainer>
        <form onSubmit={handleSubmit}>
          <Input
            labelText="댓글"
            id="devToolComment"
            size="large"
            name="comment"
            placeHolderText="댓글을 입력해 주세요."
            onChangeHandler={handleChange}
            value={text}
          />
          <Btn
            variant="green_outline"
            size="small"
            type="submit"
            isAble={text.trim() === '' ? true : false}
          >
            댓글 작성
          </Btn>
        </form>
      </CommentFormContainer>
      <MessageContainer>
        <span>{alertMessage}</span>
      </MessageContainer>
    </>
  );
};

export default CommentForm;

const CommentFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 24px;

  form {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

const NameContainer = styled.div`
  span {
    color: ${colors.blue};
  }
`;

const MessageContainer = styled.div`
  height: 40px;

  span {
    font-size: 14px;
    color: ${colors.red};
  }
`;
