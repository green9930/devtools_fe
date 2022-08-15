import styled from "styled-components";
import Btn from "components/elements/Btn";
import { colors } from "styles/theme";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailViewer = ({ handleEdit }) => {
  const navigate = useNavigate();
  const { devtools } = useSelector((state) => state.devTools);
  let { id } = useParams();
  console.log("devtools", devtools);
  console.log("useParams", id);

  /* DATA SAMPLE -------------------------------------------------------------- */
  const devTools = {
    title: "나만 아는 개발 꿀팁",
    content: "에러를 많이 낸다!",
    username: "테스트이름",
    category: "소프트웨어", // 하드웨어 / 소프트웨어
    createAt: "2022년 8월 12일 3시 35분",
    isMyArticles: true, // true / false
  };

  const { title, content, username, category, createAt, isMyArticles } =
    devTools;

  return (
    <DevToolsContainer>
      <DevToolsHeaderContainer>
        <TitleContainer>
          <div>
            <span>
              {devtools.map((item) => {
                if (item.id == +id) {
                  if (item.category == "HW") {
                    return "하드웨어";
                  } else {
                    return "소프트웨어";
                  }
                }
              })}
            </span>
          </div>
          <h2>
            {devtools.map((item) => {
              if (item.id == +id) {
                return item.title;
              }
            })}
          </h2>
        </TitleContainer>
        <InfoContainer>
          <div>
            <span>
              {" "}
              {devtools.map((item) => {
                if (item.id == +id) {
                  return item.username;
                }
              })}
            </span>
          </div>
          <StCreateAt>
            {" "}
            {devtools.map((item) => {
              if (item.id == +id) {
                return item.createAt;
              }
            })}
          </StCreateAt>
        </InfoContainer>
        <ButtonContainer>
          {isMyArticles && (
            <AuthBtn>
              <Btn
                size="medium"
                variant="red_outline"
                onClickHandler={handleEdit}
              >
                수정하기
              </Btn>
              <Btn size="medium" variant="red_outline">
                삭제하기
              </Btn>
            </AuthBtn>
          )}
          <Btn
            size="medium"
            variant="blue_outline"
            onClickHandler={() => navigate("/")}
          >
            목록으로
          </Btn>
        </ButtonContainer>
      </DevToolsHeaderContainer>
      <DevToolsContentContainer>
        <p>
          {devtools.map((item) => {
            if (item.id == +id) {
              return item.content;
            }
          })}
        </p>
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
    margin-left: ;
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
