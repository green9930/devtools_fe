import styled from "styled-components";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const TextArea = ({
  width,
  margin,
  height,
  border,
  onChangeHandler,
  defaultValue,
  maxLength,
}) => {
  return (
    <StTextArea
      width={width}
      margin={margin}
      controlId="floatingTextarea2"
      label="내용을 입력해주세요"
    >
      <Form.Control
        as="textarea"
        placeholder="Leave a comment here"
        style={{ height: height }}
        border={border}
        onChange={onChangeHandler}
        defaultValue={defaultValue}
        maxLength={maxLength}
        value={value}
      />
    </StTextArea>
  );
};

export default TextArea;

const StTextArea = styled(FloatingLabel)(({ width, margin, height }) => ({
  width: width || "auto",
  color: "black",
  margin: margin || "auto",
  height: height,
}));
