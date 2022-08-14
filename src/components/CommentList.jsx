import styled from 'styled-components';
import { colors } from 'styles/theme';

const CommentList = () => {
  const comments = {
    ok: true,
    result: [
      {
        commentId: 1,
        username: 'admin',
        createAt: '2022년 8월 12일 3시 40분',
        comment:
          '댓글 최대 글자 수 확인 개발 어려워요 서버 연동 힘들어 유효성 검사해야',
        articlesId: 10,
      },
      {
        commentId: 2,
        username: 'admin',
        createAt: '2022년 8월 12일 3시 40분',
        comment: '1234567890123456789012345678901234567890',
        articlesId: 10,
      },
      {
        commentId: 3,
        username: 'admin',
        createAt: '2022년 8월 12일 3시 40분',
        comment: '안녕하세요',
        articlesId: 10,
      },
    ],
  };

  return (
    <CommentContainer>
      {comments.result.map((val) => {
        const { commentId, username, createAt, comment, articlesId } = val;
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
