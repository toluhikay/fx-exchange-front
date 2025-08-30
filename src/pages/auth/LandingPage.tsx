import { Link } from "react-router";
import GeneralButton from "../../common/GeneralButton";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[indigo] h-screen text-[aliceblue] px-4">
      <p className="text-4xl font-bold italic">Welcome To Fx-Exchange</p>
      <div className="flex w-full items-center justify-center gap-3 my-4">
        <Link to={"/login"}>
          <GeneralButton text="Login" />
        </Link>
        <Link to={"/register"}>
          <GeneralButton text="Register" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
