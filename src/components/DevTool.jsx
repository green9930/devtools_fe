import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { colors } from 'styles/theme';
import HW from 'assets/HW.jpg';
import SW from 'assets/SW.jpg';

const DevTool = ({ item }) => {
  const navigate = useNavigate();

  const { category, title, username, createAt } = item;

  return (
    <div>
      <Card
        style={{ width: '347px', height: '398px', cursor: 'pointer' }}
        onClick={() => navigate(`/detail/${item.articleId}`)}
      >
        {category === '하드웨어' ? (
          <Card.Img variant="top" src={HW} />
        ) : (
          <Card.Img variant="top" src={SW} />
        )}
        <CardInfoContainer>
          <CardTop>
            <CardTitle>
              <Category>
                [{category === '하드웨어' ? '하드웨어' : '소프트웨어'}]
              </Category>
              <Title>
                {title.length < 11 ? title : title.slice(0, 11) + '...'}
              </Title>
            </CardTitle>
            <UserName>{username}</UserName>
          </CardTop>
          <Date>{createAt}</Date>
        </CardInfoContainer>
      </Card>
    </div>
  );
};

export default DevTool;

const CardTitle = styled(Card.Title)`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const CardInfoContainer = styled.div`
  cursor: pointer;
`;

const Category = styled.span`
  width: 100px;
  height: 24px;
  left: 173px;
  top: 480px;
  line-height: 24px;
  color: ${colors.gray2};
`;

const Title = styled.span`
  width: 300px;
  height: 36px;
  left: 663px;
  top: 475px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

const UserName = styled.span`
  width: 310px;
  height: 24px;
  top: 526px;
  left: 967px;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.green1};
`;

const Date = styled.div`
  width: 180px;
  height: 15px;
  left: 967px;
  top: 622px;
  font-size: 12px;
  line-height: 15px;
  color: ${colors.blue};
  margin-top: 55px;
  margin-left: 24px;
  margin-bottom: 20px;
`;

const CardTop = styled.div`
  margin-top: 14px;
  margin-left: 24px;
`;
