import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import Btn from 'components/elements/Btn';
import Input from 'components/elements/Input';
import TextArea from 'components/elements/TextArea';
import { __postDevTools } from 'redux/modules/devToolsSlice';
import { colors } from 'styles/theme';

const Form = () => {
  const [option, setOption] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [optionAlert, setOptionAlert] = useState('');
  const [titleAlert, setTitleAlert] = useState('');
  const [contentAlert, setContentAlert] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertMessage = {
    optionAlert: '분류를 선택하세요',
    titleAlert: '제목을 입력하세요',
    contentAlert: '내용을 입력하세요',
  };

  const onChangeHanlder = (e) => {
    if (e.target.name === 'title') setTitle(e.target.value.slice(0, 30));
    if (e.target.name === 'content') setContent(e.target.value.slice(0, 400));
  };

  const onClickCreateHandler = (e) => {
    e.preventDefault();
    if (option === '') {
      return setOptionAlert(alertMessage.optionAlert);
    } else {
      setOptionAlert('');
    }
    if (title === '') {
      return setTitleAlert(alertMessage.titleAlert);
    } else {
      setTitleAlert('');
    }
    if (content === '') {
      return setContentAlert(alertMessage.contentAlert);
    } else {
      setContentAlert('');
    }

    dispatch(
      __postDevTools({
        category: option,
        title: title,
        content: content,
      })
    );
    navigate('/');
  };

  return (
    <div>
      <StTopDiv>
        <div>
          <Dropdown onSelect={(eventKey) => setOption(eventKey)}>
            <StDropdown variant="success" id="dropdown-basic">
              {option === '' ? '분류' : option}
            </StDropdown>
            <Dropdown.Menu>
              <StDorpdownItem href="#/action-1" eventKey="하드웨어">
                하드웨어
              </StDorpdownItem>
              <StDorpdownItem href="#/action-2" eventKey="소프트웨어">
                소프트웨어
              </StDorpdownItem>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Input
            size="large"
            isValid="normal"
            value={title}
            placeHolderText="제목을 입력해주세요"
            onChangeHandler={onChangeHanlder}
            minLength="1"
            name="title"
          ></Input>
        </div>
      </StTopDiv>
      <TextArea
        width="900px"
        height="400px"
        margin="40px auto"
        border={`${colors.gray2} 1px solid`}
        onChangeHandler={onChangeHanlder}
        value={content}
        name="content"
      />
      <StBottomButtonBox>
        <Btn
          variant="blue_filled"
          size="large"
          onClickHandler={onClickCreateHandler}
        >
          작성완료
        </Btn>
        <Btn
          variant="black_outline"
          color={colors.black}
          size="large"
          onClickHandler={() => navigate('/')}
        >
          나가기
        </Btn>
      </StBottomButtonBox>
      <StMsgBox>
        <div>{optionAlert}</div>
        <div>{titleAlert}</div>
        <div>{contentAlert}</div>
      </StMsgBox>
    </div>
  );
};

export default Form;

const StTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 29px;
`;

const StDropdown = styled(Dropdown.Toggle)`
  display: flex;
  width: 190px;
  height: 36px;
  border: 1px solid ${colors.gray1};
  border-radius: 4px;
  padding: 8px, 0px;
  align-items: center;
  font-weight: 600px;
  background-color: ${colors.white};
  color: ${colors.gray1};

  &:hover {
    background-color: ${colors.green1};
  }
`;

const StDorpdownItem = styled(Dropdown.Item)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 190px;
  height: 28px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.black};

  &:hover {
    background-color: ${colors.green1};
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.white};
  }
`;

const StBottomButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 30px auto;
  gap: 20px;
`;

const StMsgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 42px;
  margin: 20px auto;
  color: ${colors.red};
`;
