import styled from 'styled-components';
import NavBar from 'components/NavBar';
import { colors } from 'styles/theme';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <StyledDiv></StyledDiv>
      <NavBar />
      {children}
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1440;
  min-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  background-color: ${colors.yellow};
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -111;
`;
