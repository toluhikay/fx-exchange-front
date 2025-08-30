import { FadeLoader } from "react-spinners";

const ButtonLoader = () => {
  return <FadeLoader color="white" width={1} height={1} margin={1} radius={2} cssOverride={{ width: "5px", height: "5px", position: "relative" }} />;
};

export default ButtonLoader;
