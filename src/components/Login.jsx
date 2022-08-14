import { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/elements/Input';
import Btn from 'components/elements/Btn';
import { colors } from 'styles/theme';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [userAlert, setUserAlert] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.username.trim() === '' || user.password.trim() === '') {
      setUserAlert('아이디 또는 비밀번호가 일치하지 않습니다.');
    } else {
      setUserAlert('');
      const res = await axios.post('http://15.165.160.40:8080/api/login', user);
      console.log('res', res);
      console.log('POST USER');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log(user);

  return (
    <LoginContainer>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            labelText="ID"
            id="devToolsId"
            size="medium"
            name="username"
            placeHolderText="아이디를 입력해 주세요."
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
            placeHolderText="비밀번호를 입력해 주세요."
            isVisible={false}
            isValid="normal"
            value={user.password}
            onChangeHandler={handleChange}
          />
        </InputContainer>
        <Btn size="large" variant="blue_filled" type="submit">
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
        <span>{userAlert}</span>
      </AlertMessageContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div``;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InputContainer = styled.div``;

const AlertMessageContainer = styled.div``;

const RegisterBtn = styled.div``;
