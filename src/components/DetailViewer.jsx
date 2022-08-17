import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Btn from 'components/elements/Btn';
import { __deleteDevTools } from 'redux/modules/devToolsSlice';
import { colors } from 'styles/theme';

const DetailViewer = ({ handleEdit, devtool }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    articleId,
    category,
    title,
    username,
    content,
    createAt,
    isMyArticles,
  } = devtool;

  const onClickDeleteHandler = async (articleId) => {
    dispatch(__deleteDevTools(articleId));
    await navigate('/');
  };

  return (
    <DevToolsContainer>
      <DevToolsHeaderContainer>
        <TitleContainer>
          <div>
            <span>{category}</span>
          </div>
          <h2>{title}</h2>
        </TitleContainer>
        <InfoContainer>
          <div>
            <span>{username}</span>
          </div>
          <StCreateAt>{createAt}</StCreateAt>
        </InfoContainer>
        <ButtonContainer>
          {isMyArticles && (
            <AuthBtn key={articleId}>
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
                onClickHandler={() => onClickDeleteHandler(articleId)}
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
        <p>{content}</p>
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
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.gray2};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 10px;
  gap: 15px;

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
  gap: 15px;

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
