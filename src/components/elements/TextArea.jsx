import styled from "styled-components";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { colors } from "styles/theme";
import { useState } from "react";

const TextArea = ({
  width,
  margin,
  height,
  border,
  onChangeHandler,
  defaultValue, //추가
  maxLength, //추가
}) => {
  return (
    <>
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
          borer={border}
          onChange={onChangeHandler}
          defaultValue={defaultValue} //추가
          maxLength={maxLength} //추가
        />
      </StTextArea>
    </>
  );
};

export default TextArea;

const StTextArea = styled(FloatingLabel)(
  ({ width, margin, height, border }) => ({
    width: width || "auto",
    color: "black",
    margin: margin || "auto",
    height: height,
  })
);
