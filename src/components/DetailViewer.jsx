import styled from 'styled-components';
import Btn from 'components/elements/Btn';
import { colors } from 'styles/theme';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { __deleteDevTools, __getDevTools } from 'redux/modules/devToolsSlice';

const DetailViewer = ({ handleEdit, devtool }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickDeleteHandler = (id) => {
    dispatch(__deleteDevTools(id));
    navigate('/');
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
        <InfoContainer>
          <div>
            <span> {devtool.username}</span>
          </div>
          <StCreateAt> {devtool.createAt}</StCreateAt>
        </InfoContainer>
        <ButtonContainer>
          {devtool.isMyArticles && (
            <AuthBtn key={devtool.id}>
              <Btn
                size="medium"
                variant="red_outline"
                onClickHandler={handleEdit}
              >
                수정하기
              </Btn>
              <Btn
                size="medium"
                variant="red_outline"
                onClickHandler={() => onClickDeleteHandler(devtool.id)}
              >
                삭제하기
              </Btn>
            </AuthBtn>
          )}

          <Btn
            size="medium"
            variant="blue_outline"
            onClickHandler={() => navigate('/')}
          >
            목록으로
          </Btn>
        </ButtonContainer>
      </DevToolsHeaderContainer>
      <DevToolsContentContainer>
        <p>{devtool.content}</p>
      </DevToolsContentContainer>
    </DevToolsContainer>
  );
};

export default DetailViewer;

const DevToolsContainer = styled.div`
  width: 100%;
  padding: 75px 210px 0 210px;

  button {
    font-size: 14px;
  }
`;

const DevToolsHeaderContainer = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.gray2};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
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

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  div {
    width: 120px;
    text-align: center;
    color: ${colors.green1};
  }
`;

const StCreateAt = styled.span`
  color: ${colors.gray2};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

const AuthBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DevToolsContentContainer = styled.div`
  height: 430px;
  padding: 20px;
`;
