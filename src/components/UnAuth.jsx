import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Btn from 'components/elements/Btn';
import { colors } from 'styles/theme';
import devtools_title from 'assets/devtools_title.svg';

const UnAuth = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <h2>이 페이지는 로그인 후에 이용하실 수 있습니다.</h2>
      <div>
        <div>
          <img src={devtools_title} alt="logo" />
        </div>
        <Btn variant="blue_filled" onClickHandler={() => navigate('/')}>
          로그인 페이지로 이동
        </Btn>
      </div>
    </ErrorContainer>
  );
};

export default UnAuth;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
  gap: 100px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: ${colors.green1};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;
