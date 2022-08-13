import styled from "styled-components";
import { Button } from "react-bootstrap";
import RESP from "mockAPI/reponse";
import DevTool from "./DevTool";
import Btn from "./elements/Button";

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

/* <Btn size="100px" height="40px" margin="10px" variant="outline-primary">
  //   버튼
  // </Btn> */
