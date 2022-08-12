import styled from "styled-components";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Btn = ({ children, variant, size, height, margin }) => {
  return (
    <MyButton variant={variant} size={size} height={height} margin={margin}>
      {children}
    </MyButton>
  );
};
export default Btn;

const MyButton = styled(Button)(({ size, margin, height }) => ({
  width: size || "auto",
  color: "black",
  margin: margin || "auto",
  height: height,
}));
