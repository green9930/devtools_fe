import styled from "styled-components";
import Btn from "components/elements/Btn";
import { colors } from "styles/theme";
import TextArea from "components/elements/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { __updateDevTools } from "redux/modules/devToolsSlice";

const DetailEditor = ({ handleEdit }) => {
  const { devtools } = useSelector((state) => state.devTools);
  const [edit, setEdit] = useState();
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeContentHandler = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    setEdit({ id: id, content: value });
  };

  const onClickEditComplete = () => {
    dispatch(__updateDevTools(edit));
    handleEdit();
  };

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
      </DevToolsHeaderContainer>

      <DevToolsContentContainer>
        {devtools.map((item) => {
          if (item.id == +id) {
            return (
              <TextArea
                key={item.id}
                height="400px"
                defaultValue={item.content}
                onChangeHandler={onChangeContentHandler}
              />
            );
          }
        })}
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
