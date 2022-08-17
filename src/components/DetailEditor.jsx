import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Btn from 'components/elements/Btn';
import TextArea from 'components/elements/TextArea';
import { colors } from 'styles/theme';
import { __updateDevTools } from 'redux/modules/devToolsSlice';

const DetailEditor = ({ handleEdit, devtool }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(devtool.content);
  const [alertMessage, setAlertMessage] = useState('');

  const MAX_LENGTH = 400;

  const onChangeContentHandler = (e) => {
    const val = e.target.value.substr(0, 400);
    if (val.length === MAX_LENGTH)
      setAlertMessage('내용은 400자까지 작성할 수 있습니다.');

    setText(val);
  };

  const onClickEditComplete = () => {
    if (text.trim() === '') {
      return setAlertMessage('내용을 입력해 주세요.');
    } else if (text === devtool.content) {
      return setAlertMessage('내용이 변경되지 않았습니다.');
    } else {
      setAlertMessage('');
      dispatch(__updateDevTools({ id: devtool.articleId, content: text }));
      handleEdit();
    }
  };

  return (
    <DevToolsContainer>
      <DevToolsHeaderContainer>
        <TitleContainer>
          <div>
            <span>{devtool.category}</span>
          </div>
          <h2>{devtool.title}</h2>
        </TitleContainer>
      </DevToolsHeaderContainer>
      <DevToolsContentContainer>
        <TextArea
          key={devtool.id}
          height="400px"
          value={text}
          onChangeHandler={onChangeContentHandler}
        />
      </DevToolsContentContainer>
      <BtnContainer>
        <Btn
          size="large"
          variant="blue_filled"
          onClickHandler={onClickEditComplete}
        >
          작성 완료
        </Btn>
        <Btn size="large" variant="black_outline" onClickHandler={handleEdit}>
          나가기
        </Btn>
      </BtnContainer>
      <MessageContainer>
        <span>{alertMessage}</span>
      </MessageContainer>
    </DevToolsContainer>
  );
};

export default DetailEditor;

const DevToolsContainer = styled.div`
  width: 100%;
  padding: 75px 210px 0 210px;
`;

const DevToolsHeaderContainer = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.gray2};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  div {
    width: 120px;
    text-align: center;
  }
  span {
    color: ${colors.gray2};
  }
  h2 {
    color: ${colors.black};
  }
`;

const DevToolsContentContainer = styled.div`
  height: 430px;
  padding: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;

const MessageContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  color: ${colors.red};
`;
