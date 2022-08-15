import styled from "styled-components";
// import Button from "react-bootstrap/Button";
import { colors } from "styles/theme";
import { css } from "styled-components";

/* size --------------------------------------------------------------------- */
// large
// medium
// small

/* variant -------------------------------------------------------------------- */
// disabled
// black_outline
// blue_outline
// blue_filled
// red_outline
// red_filled
// green_outline
// green_filled
// text

const Btn = ({
  children,
  type,
  variant,
  size,
  margin,
  onClickHandler,
  isAble,
}) => {
  return (
    <StyledBtn margin={margin} size={size}>
      <Button
        type={type}
        variant={variant}
        onClick={onClickHandler}
        disabled={isAble}
      >
        {children}
      </Button>
    </StyledBtn>
  );
};

Btn.defaultProps = {
  children: 'Button',
  type: 'button',
  variant: 'blue_filled',
  size: 'large',
  margin: 'auto',
  onClickHandler: null,
};

export default Btn;

const StyledBtn = styled.div`
  display: flex;

  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 360px;
          height: 45px;
          font-size: 16px;
        `;
      case "medium":
        return css`
          width: 95px;
          height: 40px;
          font-size: 14px;
        `;
      case "small":
        return css`
          width: 80px;
          height: 32px;
          font-size: 14px;
        `;
      default:
        return;
    }
  }}
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0.375rem;
  font-weight: 600;

  ${({ variant }) => {
    switch (variant) {
      case "disabled":
        return css`
          border: 1px solid ${colors.gray2};
          background: ${colors.gray2};
          color: ${colors.white};
        `;
      case "black_outline":
        return css`
          border: 1px solid ${colors.black};
          background: ${colors.white};
          color: ${colors.black};
        `;
      case "blue_outline":
        return css`
          border: 1px solid ${colors.blue};
          background: ${colors.white};
          color: ${colors.blue};
        `;
      case "blue_filled":
        return css`
          border: none;
          background: ${colors.blue};
          color: ${colors.white};
        `;
      case "red_outline":
        return css`
          border: 1px solid ${colors.red};
          background: ${colors.white};
          color: ${colors.red};
        `;
      case "red_filled":
        return css`
          border: none;

          background: ${colors.red};
          color: ${colors.white};
        `;
      case "green_outline":
        return css`
          border: 1px solid ${colors.green1};
          background: ${colors.white};
          color: ${colors.green1};
        `;
      case "green_filled":
        return css`
          border: none;
          background: ${colors.green1};
          color: ${colors.white};
        `;
      case "text":
        return css`
          border: none;
          background: transparent;
          color: ${colors.black};
        `;
      default:
        return;
    }
  }}

  :disabled {
    cursor: not-allowed;
    background-color: ${colors.gray2};
    color: ${colors.white};
  }
`;
