import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import DevTool from 'components/DevTool';
import { __getDevTools } from 'redux/modules/devToolsSlice';

const DevToolsList = () => {
  const dispatch = useDispatch();
  const { devtools } = useSelector((state) => state.devTools);

  useEffect(() => {
    dispatch(__getDevTools());
  }, [dispatch]);

  return (
    <StDevToolsList>
      {devtools?.map((item) => (
        <DevTool key={item.articleId} item={item} />
      ))}
    </StDevToolsList>
  );
};

export default DevToolsList;

const StDevToolsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 100px auto;
  gap: 50px;
`;
