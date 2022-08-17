import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Input from 'components/elements/Input';
import Btn from 'components/elements/Btn';
import { __postUser } from 'redux/modules/userSlice';
import { colors } from 'styles/theme';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* USER 객체 ------------------------------------------------------------------ */
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  /* LOGIN FORM 통과 확인 --------------------------------------------------------- */
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const [isPasswordAvailable, setIsPasswordAvailable] = useState(false);
  /* ALERT MESSAGE ------------------------------------------------------------ */
  const [userAlert, setUserAlert] = useState('');

  const { isLogin, error } = useSelector((state) => state.user);

  /* LOGIN -------------------------------------------------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.username.trim() === '' || user.password.trim() === '') {
      setUserAlert('로그인 정보를 입력해 주세요.');
    } else {
      setUserAlert('');
      dispatch(__postUser(user));
      isLogin && navigate('/');
    }
  };

  const handleChange = (e) => {
    setUserAlert('');
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value.trim() === '') {
      if (e.target.name === 'username') setIsUsernameAvailable(false);
      if (e.target.name === 'password') setIsPasswordAvailable(false);
    } else {
      if (e.target.name === 'username') setIsUsernameAvailable(true);
      if (e.target.name === 'password') setIsPasswordAvailable(true);
    }
  };

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            labelText="ID"
            id="devToolsId"
            size="medium"
            name="username"
            placeHolderText="ID"
            isVisible={false}
            isValid="normal"
            value={user.username}
            onChangeHandler={handleChange}
          />
          <Input
            labelText="ID"
            id="devToolsPassword"
            size="medium"
            type="password"
            name="password"
            placeHolderText="Password"
            isVisible={false}
            isValid="normal"
            value={user.password}
            onChangeHandler={handleChange}
          />
        </InputContainer>
        <Btn
          size="large"
          variant="blue_filled"
          type="submit"
          isAble={isUsernameAvailable && isPasswordAvailable ? false : true}
        >
          로그인
        </Btn>
      </FormContainer>
      <RegisterBtn>
        <Btn
          size="large"
          variant="black_outline"
          onClickHandler={() => navigate('/register')}
        >
          회원가입
        </Btn>
      </RegisterBtn>
      <AlertMessageContainer>
        <span>{error ? error : userAlert}</span>
      </AlertMessageContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const RegisterBtn = styled.div`
  margin-top: 20px;
`;

const AlertMessageContainer = styled.div`
  margin-top: 10px;
  text-align: center;
  color: ${colors.red};
`;
