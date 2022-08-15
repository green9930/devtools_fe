import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Btn from './elements/Btn';
import Input from './elements/Input';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import regExpVali from 'utils/regExpVali';

const Register = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  const [isPassed, setIsPassed] = useState(true);
  const [usernameMessage, setUsernameMessage] = useState(
    '아이디를 입력해 주세요.(영문 또는 숫자 4~12자)'
  );
  const [passwordMessage, setPasswordMessage] = useState(
    '비밀번호를 입력해 주세요.(영문, 숫자, 특수문자 포함 8~16자)'
  );
  const [confirmPasswordMessage, setConfirmPasswordMessage] =
    useState('비밀번호를 확인해 주세요.');
  const duplicateMessage = {
    passed: '사용 가능한 아이디입니다.',
    notPassed: '이미 사용 중인 아이디입니다.',
  };

  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);

  const handleSubmit = (e) => {};

  // const handleChange = (e) => {
  //   const target = e.target.value;
  //   const name = e.target.name;

  //   const result = regExpVali(target, name);
  //   console.log(result);

  //   if (name === 'username' || 'password') {
  //     setUser({ ...user, [name]: target })
  //     if (regExpVali(target, name)) {

  //     }
  //   };
  //   if (name === 'confirmPassword') setConfirmPassword(target);

  //   target === password
  //     ? setConfirmPasswordMessage('비밀번호가 일치합니다.')
  //     : setConfirmPasswordMessage('비밀번호가 일치하지 않습니다.');
  // };

  const handleChangeUsername = (e) => {
    const { value, name } = e.target;

    setUser({ ...user, username: value });
    if (regExpVali(value, name)) {
      setUsernameMessage('올바른 아이디 형식입니다.');
      setIsUsernameAvailable(true);
    }
  };

  const handleChangePassword = (e) => {
    const { value, name } = e.target;

    setUser({ ...user, password: value });
    if (regExpVali(value, name)) {
      setUsernameMessage('올바른 비밀번호 형식입니다.');
      setIsPasswordAvailable(true);
    }
  };

  return (
    <div>
      <form>
        <InputContainer>
          <div>
            <IdContainer>
              <Input
                labelText="ID"
                id="userId"
                size="medium"
                name="username"
                placeHolderText="ID를 입력해 주세요."
                value={user.username}
                onChangeHandler={handleChangeUsername}
              />
              <StButton
                checkDuplicate={checkDuplicate}
                message={duplicateMessage.notPassed}
              >
                <Btn
                  size="small"
                  variant="green_outline"
                  isAble={isPassed ? true : false}
                  onClickHandler={() => setCheckDuplicate(!checkDuplicate)}
                >
                  중복 확인
                </Btn>
              </StButton>
            </IdContainer>
            <AlertMessageContainer>
              <span>{usernameMessage}</span>
            </AlertMessageContainer>
          </div>
          <div>
            <PasswordContainer>
              <Input
                labelText="password"
                id="userPassword"
                size="medium"
                type={isVisible ? 'text' : 'password'}
                name="password"
                placeHolderText="비밀번호를 입력해 주세요."
                value={user.password}
                onChangeHandler={handleChangePassword}
              />
              <span onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </span>
            </PasswordContainer>
            <AlertMessageContainer>
              <span>{passwordMessage}</span>
            </AlertMessageContainer>
          </div>
          <ConfirmPasswordContainer>
            <Input
              labelText="confirm password"
              id="userConfirmPassword"
              size="medium"
              type="password"
              name="confirmPassword"
              placeHolderText="비밀번호를 확인해 주세요."
              value={confirmPassword}
              // onChangeHandler={handleChange}
            />
            <AlertMessageContainer>
              <span>{confirmPasswordMessage}</span>
            </AlertMessageContainer>
          </ConfirmPasswordContainer>
        </InputContainer>
        <ButtonContainer>
          <Btn>회원가입</Btn>
          <Btn
            size="large"
            variant="black_outline"
            onClickHandler={() => navigate('/login')}
          >
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
  gap: 5px;
  margin-top: 180px;
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

const AlertMessageContainer = styled.div`
  height: 30px;
  margin-top: 3px;
  margin-left: 3px;
  span {
    font-size: 14px;
  }
`;

const ConfirmPasswordContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
