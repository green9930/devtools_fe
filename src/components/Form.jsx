import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import TextArea from "./elements/TextArea";
import { colors } from "styles/theme";
import Input from "./elements/Input";
import Button from "./elements/Button";
import { useState } from "react";

const Form = () => {
  const [option, setOption] = useState("분류");

  return (
    <div>
      {" "}
      <StTopDiv>
        <div>
          <Dropdown
            onSelect={(eventKey) => {
              setOption(eventKey);
            }}
          >
            <StDropdown variant="success" id="dropdown-basic">
              {option}
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
          <Input size="large" isValid="normal"></Input>
        </div>
      </StTopDiv>
      <TextArea
        width="900px"
        height="400px"
        margin="40px auto"
        border={`${colors.gray2} 1px solid`}
      />
      <StBottomButton>
        <Button color={colors.white} size="360px" height="45px">
          작성완료
        </Button>
        <Button
          color={colors.black}
          size="360px"
          height="45px"
          backgroundcolor={colors.white}
        >
          나가기
        </Button>
      </StBottomButton>
      <StMsgBox>
        <StMsg>제목을 입력해 주세요.</StMsg>
        <StMsg>내용을 입력해 주세요.</StMsg>
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
  gap: 29px;
  margin-top: 240px;
`;

const StDropdown = styled(Dropdown.Toggle)`
  background-color: ${colors.white};
  border: 1px solid #dee2e6;
  color: #abb5be;
  &:hover {
    background-color: ${colors.green1};
  }
  width: 190px;
  height: 48px;
  border-radius: 4px;
  padding: 8px, 0px, 8px, 0px;
  display: flex;
  align-items: center;
  font-weight: 600px;
  font-size: 12px;
`;

const StDorpdownItem = styled(Dropdown.Item)`
  &:hover {
    background-color: ${colors.green1};
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${colors.white};
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 16px;

  width: 190px;
  height: 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${colors.black};
`;

const StBottomButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
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

const StMsg = styled.div`
  font-weight: 400px;
  font-size: 16px;
`;
