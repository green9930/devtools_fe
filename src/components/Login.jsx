import styled from 'styled-components';
import Input from 'components/elements/Input';
import Btn from 'components/elements/Btn';
import { colors } from 'styles/theme';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <InputContainer>
        <Input
          labelText="ID"
          id="devToolsId"
          size="medium"
          name="id"
          placeHolderText="아이디를 입력해 주세요."
          isVisible={false}
          isValid="normal"
          onChangeHandler={() => {}}
        />
        <Input
          labelText="ID"
          id="devToolsId"
          size="medium"
          name="id"
          placeHolderText="비밀번호를 입력해 주세요."
          isVisible={false}
          isValid="normal"
          onChangeHandler={() => {}}
        />
      </InputContainer>
      <ButtonContainer>
        <Btn size="large" variant="blue_filled">
          로그인
        </Btn>
        <Btn
          size="large"
          variant="black_outline"
          onClickHandler={() => navigate('/register')}
        >
          회원가입
        </Btn>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 240px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* max-width: 360px; */
`;
