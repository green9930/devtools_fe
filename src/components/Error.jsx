import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Btn from 'components/elements/Btn';
import { colors } from 'styles/theme';

const Error = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <h2>404 Page Not Found</h2>
      <div>
        <span>페이지를 찾을 수 없습니다.</span>
        <Btn variant="green_filled" onClickHandler={() => navigate('/')}>
          홈으로 이동
        </Btn>
      </div>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 200px;
  gap: 40px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: ${colors.red};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;

    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;
