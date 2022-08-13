import styled from 'styled-components';
import NavBar from 'components/NavBar';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
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
