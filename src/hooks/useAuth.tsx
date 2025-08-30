import { useAppSelector } from "./reduxHooks";

const useAuth = () => {
  return useAppSelector((store) => store.auth);
};

export default useAuth;
