import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Btn from "./elements/Btn";
import Input from "./elements/Input";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsCheck2Circle,
} from "react-icons/bs";
import useInput from "hooks/useInput";
// import formValidator from "utils/formValidator";
import { css } from "styled-components";
import { colors } from "styles/theme";

const Register = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [userId, userIdHandler, userIdReset] = useInput("");
  const [password, passwordHandler, passwordReset] = useInput("");
  // const [userId, userIdHandler, userIdReset] = useInput('');
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const [isPassed, setIsPassed] = useState(true);

  const duplicateMessage = {
    passed: "사용 가능한 아이디입니다.",
    notPassed: "이미 사용 중인 아이디입니다.",
  };

  const handleSubmit = (e) => {
    // const result = formValidator();
  };

  return (
    <div>
      <form>
        <InputContainer>
          <IdContainer>
            <Input
              labelText="ID"
              id="userId"
              size="medium"
              name="id"
              placeHolderText="ID를 입력해 주세요."
              value={userId}
              onChangeHandler={userIdHandler}
            />
            <StButton
              checkDuplicate={checkDuplicate}
              message={duplicateMessage.notPassed}
            >
              <Btn
                size="small"
                variant="green_outline"
                idAble={isPassed ? true : false}
                onClickHandler={() => setCheckDuplicate(!checkDuplicate)}
              >
                중복 확인
              </Btn>
            </StButton>
          </IdContainer>

          <PasswordContainer>
            <Input
              labelText="password"
              id="userPassword"
              size="medium"
              type={isVisible ? "text" : "password"}
              name="password"
              placeHolderText="비밀번호를 입력해 주세요."
              value={password}
              onChangeHandler={passwordHandler}
            />
            <span onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </span>
          </PasswordContainer>
          <Input
            labelText="confirm password"
            id="userConfirmPassword"
            size="medium"
            type="password"
            name="confirmPassword"
            placeHolderText="비밀번호를 확인해 주세요."
          />
        </InputContainer>
        <ButtonContainer>
          <Btn>회원가입</Btn>
          <Btn
            size="large"
            variant="black_outline"
            onClickHandler={() => navigate("/login")}
          >
            {" "}
            뒤로 가기
          </Btn>
        </ButtonContainer>
      </form>
    </div>
  );
};

export default Register;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 180px;
  margin-bottom: 45px;
`;

const IdContainer = styled.div`
  position: relative;
`;

const StButton = styled.div`
  position: absolute;
  top: 5px;
  right: -90px;
`;

const PasswordContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 5px;
    right: -30px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
