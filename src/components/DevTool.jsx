import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { colors } from "styles/theme";

const DevTool = (props) => {
  return (
    <div>
      <Card style={{ width: "347px", height: "398px" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <div>
          <Card.Title>
            <Category>[하드웨어] </Category>
            <Title>{props.item.title}</Title>
          </Card.Title>
          <UserName>{props.item.username}</UserName>
          <Date>{props.item.createAt}</Date>
        </div>
      </Card>
    </div>
  );
};

export default DevTool;

const Category = styled.span`
  width: 70px;
  height: 24px;
  left: 173px;
  top: 480px;
  font-family: "SpoqaHanSans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.gray2};
`;

const Title = styled.span`
  width: 116px;
  height: 36px;
  left: 663px;
  top: 475px;
  font-family: "SpoqaHanSans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

const UserName = styled.span`
  width: 310px;
  height: 24px;
  left: 967px;
  top: 526px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.green1};
`;

const Date = styled.div`
  width: 154px;
  height: 15px;
  left: 967px;
  top: 622px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.blue};
  margin-top: 72px;
`;
