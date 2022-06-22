import { TailSpin } from "react-loader-spinner";

const customLoaderStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const CustomLoader = () => (
  <div style={customLoaderStyle}>
    <TailSpin heigth="100" width="100" color="#1c1e54" ariaLabel="loading" />
  </div>
);

export default CustomLoader;
