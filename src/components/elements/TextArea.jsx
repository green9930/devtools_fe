import styled from "styled-components";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const TextArea = ({ width, margin }) => {
  return (
    <>
      <MyButton
        width={width}
        margin={margin}
        controlId="floatingTextarea2"
        label="내용을 입력해주세요"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </MyButton>
    </>
  );
};

export default TextArea;

const MyButton = styled(FloatingLabel)(({ width, margin, height }) => ({
  width: width || "auto",
  color: "black",
  margin: margin || "auto",
  height: height,
}));
