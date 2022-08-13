import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { a11yHidden } from 'styles/mixin';
import { colors } from 'styles/theme';

const Input = ({
  labelText,
  id,
  size,
  type,
  name,
  placeHolderText,
  isVisible,
  isValid,
  onChangeHandler,
}) => {
  return (
    <InputContainer size={size} isValid={isValid}>
      <Form.Label className={isVisible ? '' : 'a11y-hidden'} htmlFor={id}>
        {labelText}
      </Form.Label>
      <Form.Control
        id={id}
        type={type}
        name={name}
        placeholder={placeHolderText}
        onChangeHandler={onChangeHandler}
      />
    </InputContainer>
  );
};

Input.defaultProps = {
  labelText: 'label',
  id: '',
  size: 'medium',
  type: 'text',
  name: '',
  placeHolderText: '내용을 입력해주세요',
  isVisible: true,
  isValid: 'invalid',
  onChangeHandler: null,
};

export default Input;

const InputContainer = styled.div`
  .a11y-hidden {
    ${a11yHidden}
  }

  max-width: ${({ size }) => {
    if (size === 'medium') return '360px';
    else if (size === 'large') return '680px';
  }};

  input {
    border-color: ${({ isValid }) => {
      if (isValid === 'normal') return `${colors.gray2}`;
      else if (isValid === 'valid') return `${colors.green1}`;
      else if (isValid === 'invalid') return `${colors.red}`;
    }};

    ::placeholder {
      /* font-size: 14px; */
    }
  }
`;
