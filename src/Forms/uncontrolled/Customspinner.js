import { Audio } from "react-loader-spinner";

const Customspinner = (prop) => {
  const { color = "green" } = prop;
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color={color}
      ariaLabel="three-dots-loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export default Customspinner;