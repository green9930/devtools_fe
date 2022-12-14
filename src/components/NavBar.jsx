import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Btn from 'components/elements/Btn';
import { userActions } from 'redux/modules/userSlice';
import { colors } from 'styles/theme';
import devtools_title from 'assets/devtools_title.svg';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { username, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.getUser());
  }, [dispatch]);

  const handleLogout = async () => {
    dispatch(userActions.deleteUser());
    await navigate('/');
  };

  if (isLoading)
    return (
      <NavBarContainer>
        <Logocontainer onClick={() => navigate('/')}>
          <StyledImg src={devtools_title} alt="logo" />
        </Logocontainer>
      </NavBarContainer>
    );

  return (
    <NavBarContainer>
      {username ? (
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
      {username ? (
        <InfoContainer>
          <span>{username}님, 안녕하세요</span>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.yellow};
  width: 100%;
  height: 80px;
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

  span {
    font-weight: 500;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
