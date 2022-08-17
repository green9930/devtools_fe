import styled from 'styled-components';
import { colors } from 'styles/theme';
import { useParams } from 'react-router-dom';

const CommentList = ({ devtool }) => {
  const { id } = useParams();

  /* -------------------------------------------------------------------------- */
  // {
  //   category: "소프트웨어",
  //   comments: [
  //    {
  //   commentId: 29,
  //   comment: 'comment!',
  //   userName: 'test',
  //   articleId: 82,
  //   createAt: '2022년 08월 17일 15시 02분'
  // }
  //   ]
  //   length: 1,
  //   content: "project",
  //   createAt: "2022년 08월 17일 04시 39분 58초",
  //   id: 82,
  //   isMyArticles: false,
  //   title: "성공?",
  //   username: "test2"
  // }

  // userName 서버 수정 이후 username으로 변경해야 함
  console.log('DEVTOOL', devtool);
  return (
    <CommentContainer>
      {devtool?.comments?.map((val) => {
        const { commentId, username, createAt, comment } = val;
        return (
          <ItemContainer key={commentId}>
            <InfoContainer>
              <StyledName>{username}</StyledName>
              <StyledDate>({createAt})</StyledDate>
            </InfoContainer>
            <p>{comment}</p>
          </ItemContainer>
        );
      })}
    </CommentContainer>
  );
};

export default CommentList;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 80px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.span`
  color: ${colors.blue};
`;

const StyledDate = styled.span`
  font-size: 14px;
  color: ${colors.gray2};
`;
