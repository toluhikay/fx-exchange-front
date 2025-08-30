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
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const Register = () => {
  const [registerMutation, { isLoading, isSuccess, error }] = QueryApi.useRegisterMutation();

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
        confirm_password: Yup.string()
          .required("Please confirm your password")
          .oneOf([Yup.ref("password")], "Passwords must match"),
      })
    ),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await registerMutation({
        name: data.name,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password,
      }).unwrap();

      console.log("✅ Registration successful:", response);
      // maybe navigate to login page here
    } catch (err) {
      console.error("❌ Registration failed:", err);
    }
  };

  return (
    <AuthWrapper h1="Create an account" subHeader="Please fill in your details">
      <div className="my-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <CustomInputField control={control} name="name" placeholder="Enter your name" label="Name" />
            <CustomInputField control={control} name="email" placeholder="Enter your email address" label="Email" />
            <CustomInputField control={control} name="password" placeholder="Enter your password" label="Password" type="password" />
            <CustomInputField control={control} name="confirm_password" placeholder="Confirm your password" label="Confirm Password" type="password" />
          </div>
          <div className="flex items-center justify-end mb-3">
            <Link to={RouterEnum.LOGIN}>
              <p className="pt-2 text-[#DC3545] cursor-pointer">Already Registered?</p>
            </Link>
          </div>
          <GeneralButton text={isLoading ? "Registering..." : "Register"} loaderComponent={<ButtonLoader />} loading={isLoading} />
          {error && <p className="text-red-500 mt-2">Registration failed.</p>}
          {isSuccess && <p className="text-green-500 mt-2">Registration successful!</p>}
        </form>
      </div>
    </AuthWrapper>
  );
};

export default Register;
