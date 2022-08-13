import styled from 'styled-components';
import RESP from 'mockAPI/reponse';
import DevTool from './DevTool';

const DevToolsList = () => {
  return (
    <StDevToolsList>
      {RESP?.map((item) => (
        <DevTool key={item.id} item={item} />
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
  margin: 260px auto;
  flex-wrap: wrap;
`;
