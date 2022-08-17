import styled from 'styled-components';
import { colors } from 'styles/theme';

const CommentList = ({ devtool }) => {
  return (
    <CommentContainer>
      {devtool?.comments?.map((val) => {
        const { commentId, username, createAt, comment } = val;
        return (
          <ItemContainer key={commentId}>
            <InfoContainer>
              <StyledName>{username}</StyledName>
              <StyledDate>{createAt}</StyledDate>
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
  padding-bottom: 80px;
  gap: 16px;
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
