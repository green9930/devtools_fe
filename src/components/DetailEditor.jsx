import styled from 'styled-components';
import Btn from 'components/elements/Btn';
import { colors } from 'styles/theme';
import TextArea from 'components/elements/TextArea';

const DetailEditor = ({ handleEdit }) => {
  /* DATA SAMPLE -------------------------------------------------------------- */
  const devTools = {
    title: '나만 아는 개발 꿀팁',
    content: '에러를 많이 낸다!',
    username: '테스트이름',
    category: '소프트웨어', // 하드웨어 / 소프트웨어
    createAt: '2022년 8월 12일 3시 35분',
    isMyArticles: true, // true / false
  };

  const { title, content, username, category, createAt, isMyArticles } =
    devTools;

  return (
    <DevToolsContainer>
      <DevToolsHeaderContainer>
        <TitleContainer>
          <div>
            <span>{category}</span>
          </div>
          <h2>{title}</h2>
        </TitleContainer>
      </DevToolsHeaderContainer>
      <DevToolsContentContainer>
        <TextArea height="400px" />
      </DevToolsContentContainer>
      <BtnContainer>
        <Btn size="large" variant="blue_filled">
          작성 완료
        </Btn>
        <Btn size="large" variant="black_outline" onClickHandler={handleEdit}>
          나가기
        </Btn>
      </BtnContainer>
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
    margin-left: ;
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
