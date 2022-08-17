import styled from 'styled-components';
import DevTool from './DevTool';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getDevTools } from 'redux/modules/devToolsSlice';

const DevToolsList = () => {
  const dispatch = useDispatch();
  const { devtools, isLoading, error } = useSelector((state) => state.devTools);
  console.log(devtools);
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
  gap: 50px;
  margin: 100px auto;
  flex-wrap: wrap;
`;
