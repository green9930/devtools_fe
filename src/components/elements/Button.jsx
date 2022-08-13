import styled from "styled-components";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Btn = ({ children, variant, size, color, height, margin }) => {
  return (
    <MyButton
      variant={variant}
      size={size}
      color={color}
      height={height}
      margin={margin}
    >
      {children}
    </MyButton>
  );
};

export default Btn;

const MyButton = styled(Button)(({ size, color, margin, height }) => ({
  width: size || "auto",
  color: color || "black",
  margin: margin || "auto",
  height: height,
}));
