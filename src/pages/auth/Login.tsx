import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomInputField from "../../common/CustomInputField";
import AuthWrapper from "../../common/AuthWrapper";
import GeneralButton from "../../common/GeneralButton";
import { Link } from "react-router";
import { RouterEnum } from "../../constants/RouterEnum";
import ButtonLoader from "../../common/ButtonLoader";
import { QueryApi } from "../../api/Query";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [loginMutation, { isLoading, isSuccess, error }] = QueryApi.useLoginMutation();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
      })
    ),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await loginMutation({
        email: data.email,
        password: data.password,
      }).unwrap();

      console.log("✅ Registration successful:", response);
      // maybe navigate to login page here
    } catch (err) {
      console.error("❌ Registration failed:", err);
    }
  };

  return (
    <AuthWrapper h1="Log In" subHeader="Welcome back! Please enter your details">
      <div className="my-2 w-full">
        <form action="" onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="flex flex-col gap-3">
            <CustomInputField control={control} name="email" placeholder="Enter your email address" label="Email" />
            <CustomInputField control={control} name="password" placeholder="Enter your password" label="Password" />
          </div>
          <div className="flex items-center justify-end mb-3 w-full">
            <Link to={RouterEnum.SIGN_UP}>
              <p className="pt-2 text-[#DC3545] text text-end cursor-pointer">No Account?</p>
            </Link>
          </div>
          <GeneralButton text="Login" loaderComponent={<ButtonLoader />} loading={isLoading} />
          {error && <p className="text-red-500 mt-2">login failed.</p>}
          {isSuccess && <p className="text-green-500 mt-2">Login successful!</p>}
        </form>{" "}
      </div>
    </AuthWrapper>
  );
};

export default Login;
