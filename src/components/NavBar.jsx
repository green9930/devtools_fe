import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Btn from 'components/elements/Btn';
import devtools_title from 'assets/devtools_title.svg';
import { colors } from 'styles/theme';

const NavBar = () => {
  const [isAuth, setIsAuth] = useState(true);
  // isAuth === true : 회원
  // isAuth === false : 비회원
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = `mycookie=; expires=${new Date(
      '2022-01-01'
    ).toUTCString()}`;
    navigate('/login');
  };

  const name = 'username';
  return (
    <NavBarContainer>
      {isAuth ? (
        <Btn
          size="small"
          variant="text"
          onClickHandler={() => navigate('/form')}
        >
          게시글 작성
        </Btn>
      ) : null}
      <Logocontainer onClick={() => navigate('/')}>
        <StyledImg src={devtools_title} alt="logo" />
      </Logocontainer>
      {isAuth ? (
        <InfoContainer>
          <span>{name}님, 안녕하세요</span>
          <Btn size="small" variant="text" onClickHandler={handleLogout}>
            로그아웃
          </Btn>
        </InfoContainer>
      ) : null}
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  background-color: ${colors.yellow};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: relative;

  button {
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.black};
  }
`;

const Logocontainer = styled.div`
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
