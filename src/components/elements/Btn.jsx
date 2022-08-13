import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { colors } from 'styles/theme';
import { css } from 'styled-components';

/* size --------------------------------------------------------------------- */
// large
// medium
// small
// text

/* variant -------------------------------------------------------------------- */
// disabled
// black_outline
// blue_outline
// blue_filled
// red_outline
// red_filled
// green_outline
// green_filled

const Btn = ({ children, variant, size, margin, onClickHandler }) => {
  return (
    <StyledBtn variant={variant} size={size} margin={margin}>
      <Button onClick={onClickHandler}>{children}</Button>
    </StyledBtn>
  );
};

Btn.defaultProps = {
  children: 'Button',
  variant: 'blue_filled',
  size: 'large',
  margin: 'auto',
  onClickHandler: null,
};

export default Btn;

const StyledBtn = styled.div`
  width: ${({ size }) => {
    if (size === 'large') return '360px';
    else if (size === 'medium') return '95px';
    else if (size === 'small') return '80px';
    else if (size === 'text') return '100px';
  }};

  button {
    width: 100%;

    :hover {
      background-color: inherit;
      color: inherit;
      border-color: inherit;
    }
  }

  ${({ variant }) => {
    return (
      variant === 'blue_outline' &&
      css`
        button {
          background-color: ${colors.white};
          color: ${colors.blue};
          border-color: ${colors.blue};
        }
      `
    );
  }}

  ${({ variant }) => {
    return (
      variant === 'red_outline' &&
      css`
        button {
          background-color: ${colors.white};
          color: ${colors.red};
          border-color: ${colors.red};
        }
      `
    );
  }}

  ${({ variant }) => {
    return (
      variant === 'green_outline' &&
      css`
        button {
          background-color: ${colors.white};
          color: ${colors.green1};
          border-color: ${colors.green1};
        }
      `
    );
  }}

  ${({ variant }) => {
    return (
      variant === 'blue_filled' &&
      css`
        button {
          background-color: ${colors.blue};
          color: ${colors.white};
          border-color: ${colors.blue};
          :hover {
            background-color: inherit;
            color: inherit;
            border-color: inherit;
          }
        }
      `
    );
  }}

  ${({ variant }) => {
    return (
      variant === 'red_filled' &&
      css`
        button {
          background-color: ${colors.red};
          color: ${colors.white};
          border-color: ${colors.red};
        }
      `
    );
  }}

${({ variant }) => {
    return (
      variant === 'green_filled' &&
      css`
        button {
          background-color: ${colors.green1};
          color: ${colors.white};
          border-color: ${colors.green1};
        }
      `
    );
  }}  
  
  ${({ variant }) => {
    return (
      variant === 'black_outline' &&
      css`
        button {
          background-color: ${colors.white};
          color: ${colors.black};
          border-color: ${colors.black};
        }
      `
    );
  }}

${({ size }) => {
    return (
      size === 'large' &&
      css`
        button {
          width: 360px;
          height: 45px;
        }
      `
    );
  }}

${({ size }) => {
    return (
      size === 'medium' &&
      css`
        button {
          width: 90px;
          height: 40px;
        }
      `
    );
  }}

${({ size }) => {
    return (
      size === 'small' &&
      css`
        button {
          width: 80px;
          height: 30px;
        }
      `
    );
  }}

${({ size }) => {
    return (
      size === 'text' &&
      css`
        button {
          width: 90px;
          height: 30px;
          border: none;
          background-color: transparent;

          :hover,
          :focus {
            outline: none;
            border: none;
          }
        }
      `
    );
  }}
`;
