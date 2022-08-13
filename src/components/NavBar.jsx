import styled from 'styled-components';
import devtools_title from 'assets/devtools_title.svg';
import { colors } from 'styles/theme';
import { useState } from 'react';
import Btn from 'components/elements/Btn';

const NavBar = () => {
  const [isAuth, setIsAuth] = useState(true);
  // isAuth === true : 회원
  // isAuth === false : 비회원

  const name = 'username';
  return (
    <NavBarContainer>
      {isAuth ? <Btn size="text">게시글 작성</Btn> : null}
      <StyledImg src={devtools_title} alt="logo" />
      {isAuth ? (
        <InfoContainer>
          <span>{name}님, 안녕하세요</span>
          <Btn size="text">로그아웃</Btn>
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
  padding: 10px;
  position: relative;

  button {
    width: 100%;
    font-size: 14px;
    margin-bottom: 3px;
    font-weight: 700;
    color: ${colors.black};
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
