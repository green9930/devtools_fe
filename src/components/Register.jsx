import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Btn from './elements/Btn';
import Input from './elements/Input';
import regExpVali from 'utils/regExpVali';
import { colors } from 'styles/theme';
import axios from 'axios';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const Register = () => {
  /* TEST DATA ---------------------------------------------------------------- */
  const test = {
    username: 'aaaaa',
  };

  const navigate = useNavigate();

  /* USER 객체 ------------------------------------------------------------------ */
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  /* CONFIRM PASSWORD --------------------------------------------------------- */
  const [confirmPassword, setConfirmPassword] = useState('');
  /* VALIDATION MESSAGE ------------------------------------------------------- */
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
  /* REGISTER FORM 통과 확인 ------------------------------------------------------ */
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false);
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(false);
  /* 중복 검사 활성화 ---------------------------------------------------------------- */
  const [isUsernameActive, setIsUsernameActive] = useState(false);
  /* 중복 검사 통과 확인 -------------------------------------------------------------- */
  const [checkDuplicate, setCheckDuplicate] = useState(false);
  /* 입력한 비밀번호 보기 -------------------------------------------------------------- */
  const [isVisible, setIsVisible] = useState(false);

  /* 회원가입 --------------------------------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('isUsernameAvailable', isUsernameAvailable);
    console.log('isPasswordAvailable', isPasswordAvailable);
    console.log('isPasswordConfirmed', isPasswordConfirmed);
    try {
      console.log('USER', user);
      // const res = await axios.post(`http://3.34.185.48/api/signup`, user);
      // console.log(res);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  /* 아이디 유효성 검사 --------------------------------------------------------------- */
  const handleChangeUsername = (e) => {
    const username = e.target.value.substr(0, 12);
    const name = e.target.name;

    setIsUsernameAvailable(false);
    setCheckDuplicate(false);
    setUser({ ...user, username: username });

    if (regExpVali(username, name)) {
      setUsernameMessage('올바른 아이디 형식입니다.');
      setIsUsernameActive(true);
    } else {
      setUsernameMessage('아이디를 입력해 주세요.(영문 또는 숫자 4~12자)');
      setIsUsernameActive(false);
    }
  };

  /* 아이디 중복 검사 ---------------------------------------------------------------- */
  const handleCheckDuplicate = async () => {
    // const res = await axios.post(`http://3.34.185.48/api/register/username`, {
    //   username: user.username,
    // });

    if (user.username === test.username) {
      setUsernameMessage('이미 사용 중인 아이디입니다.');
      setIsUsernameAvailable(false);
      setCheckDuplicate(false);
    } else {
      setUsernameMessage('사용 가능한 아이디입니다');
      setIsUsernameAvailable(true);
      setCheckDuplicate(true);
      setIsUsernameActive(false);
    }
  };

  /* 비밀번호 유효성 검사 -------------------------------------------------------------- */
  const handleChangePassword = (e) => {
    const password = e.target.value.substr(0, 16).trim();
    const name = e.target.name;

    setConfirmPassword('');
    setConfirmPasswordMessage('비밀번호를 확인해 주세요.');
    setIsPasswordConfirmed(false);

    setUser({ ...user, password: password });

    if (regExpVali(password, name)) {
      setPasswordMessage('올바른 비밀번호 형식입니다.');
      setIsPasswordAvailable(true);
    } else {
      setPasswordMessage(
        '비밀번호를 입력해 주세요.(영문, 숫자, 특수문자 포함 8~16자)'
      );
      setIsPasswordAvailable(false);
    }
  };

  /* 비밀번호 확인 유효성 검사 ----------------------------------------------------------- */
  const handleChangeConfirmPassword = (e) => {
    const confirmPw = e.target.value.substr(0, 16);

    setConfirmPassword(confirmPw);
    if (confirmPw === user.password) {
      setConfirmPasswordMessage('비밀번호가 일치합니다.');
      setIsPasswordConfirmed(true);
    } else {
      setConfirmPasswordMessage('비밀번호를 확인해 주세요.');
      setIsPasswordConfirmed(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <div>
            <IdContainer>
              <Input
                labelText="ID"
                id="userId"
                size="medium"
                name="username"
                placeHolderText="ID"
                value={user.username}
                onChangeHandler={handleChangeUsername}
              />
              <StButton
                checkDuplicate={checkDuplicate}
                message={duplicateMessage.notPassed}
              >
                <Btn
                  size="small"
                  variant={isUsernameActive ? 'green_outline' : 'disabled'}
                  isAble={isUsernameActive ? false : true}
                  onClickHandler={handleCheckDuplicate}
                >
                  중복 확인
                </Btn>
              </StButton>
            </IdContainer>
            <AlertMessageContainer>
              <StyledNameMessage
                isAvailable={isUsernameActive}
                checkDuplicate={checkDuplicate}
              >
                {usernameMessage}
              </StyledNameMessage>
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
                placeHolderText="Password"
                value={user.password}
                onChangeHandler={handleChangePassword}
              />
              <span onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </span>
            </PasswordContainer>
            <AlertMessageContainer>
              <StyledMessage isAvailable={isPasswordAvailable}>
                {passwordMessage}
              </StyledMessage>
            </AlertMessageContainer>
          </div>
          <ConfirmPasswordContainer>
            <Input
              labelText="confirm password"
              id="userConfirmPassword"
              size="medium"
              type="password"
              name="confirmPassword"
              placeHolderText="Confirm Password"
              value={confirmPassword}
              onChangeHandler={handleChangeConfirmPassword}
            />
            <AlertMessageContainer>
              <StyledMessage isAvailable={isPasswordConfirmed}>
                {confirmPasswordMessage}
              </StyledMessage>
            </AlertMessageContainer>
          </ConfirmPasswordContainer>
        </InputContainer>
        <ButtonContainer>
          <Btn
            type="submit"
            isAble={
              isUsernameAvailable && isPasswordAvailable && isPasswordConfirmed
                ? false
                : true
            }
          >
            회원가입
          </Btn>
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
  top: 3px;
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
`;

const StyledNameMessage = styled.span`
  font-size: 14px;
  color: ${({ isAvailable, checkDuplicate }) => {
    if (checkDuplicate && !isAvailable) return `${colors.green1}`;
    else if (isAvailable || !isAvailable) return `${colors.yellow}`;
  }};
`;

const StyledMessage = styled.span`
  font-size: 14px;
  color: ${({ isAvailable }) =>
    isAvailable ? `${colors.green1}` : `${colors.yellow}`};
`;

const ConfirmPasswordContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
