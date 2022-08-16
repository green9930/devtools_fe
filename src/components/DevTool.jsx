import styled from "styled-components";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { colors } from "styles/theme";
import HW from "../assets/HW.jpg";
import SW from "../assets/SW.jpg";
import { useNavigate } from "react-router-dom";

const DevTool = (props) => {
  const navigate = useNavigate();

  // /* FAKE ID ------------------------------------------------------------------ */
  // const id = 1;

  return (
    <div>
      <Card
        style={{ width: "347px", height: "398px", cursor: "pointer" }}
        onClick={() => navigate(`/detail/${props.item.id}`)}
      >
        {props.item.category === "하드웨어" ? (
          <Card.Img variant="top" src={HW} />
        ) : (
          <Card.Img variant="top" src={SW} />
        )}
        <CardInfoContainer>
          <CardTop>
            <Card.Title>
              <Category>
                [
                {props.item.category === "하드웨어" ? "하드웨어" : "소프트웨어"}
                ]
              </Category>
              <Title> {props.item.title}</Title>
            </Card.Title>
            <UserName>{props.item.username}</UserName>
          </CardTop>

          <Date>{props.item.createAt}</Date>
        </CardInfoContainer>
      </Card>
    </div>
  );
};

export default DevTool;

const CardInfoContainer = styled.div`
  cursor: pointer;
`;

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
  margin-left: 24px;
  margin-bottom: 24px;
`;

const CardTop = styled.div`
  margin-top: 14px;
  margin-left: 24px;
`;
