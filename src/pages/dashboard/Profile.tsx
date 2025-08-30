import toast from "react-hot-toast";
import { QueryApi } from "../../api/Query";
import ButtonLoader from "../../common/ButtonLoader";
import GeneralButton from "../../common/GeneralButton";
import { logOutUser } from "../../features/authSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";

const Profile = () => {
  const auth = useAuth();
  const dispatch = useAppDispatch();

  const [createWalletMutation, createWalletMutationResults] = QueryApi.useCreateWalletMutation();
  const getWallet = QueryApi.useGetWalletQuery({});
  const userWalletDetails = getWallet?.data;
  const getWalletBalances = QueryApi.useGetBalancesQuery({});

  console.log(getWalletBalances);

  const createWallet = async () => {
    try {
      const result = await createWalletMutation({}).unwrap();
      toast.success(result.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data?.message);
    }
  };

  return (
    <main className="relative w-full flex flex-col h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-pink-950 to-indigo-950">
      <header className="relative top-0 left-0 border-b-1 text-3xl border-[#FF670030] flex flex-col justify-center text-white items-center w-full py-2">
        <span className="flex items-center gap-3">
          Welcome <span className="capitalize">{auth?.userPayload?.data?.data?.name}</span>
          <Link to={"/dashboard"} className="w-fit text-yellow-200 rounded-lg overflow-hidden">
            <p>Go to Dashboard</p>
          </Link>{" "}
        </span>
        <span className="text-sm">Your total balance is ${getWalletBalances?.data?.total_usd}</span>
      </header>

      <div className="w-full flex flex-col justify-center items-center py-10 text-white">
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          {getWallet.isLoading ? (
            <p>Getting Wallet Id....</p>
          ) : userWalletDetails?.data?.id ? (
            <div>
              <p>Here is your wallet id {userWalletDetails?.data?.id}</p>
            </div>
          ) : (
            <>
              <p className="text my-2">Thank you for choosing Fx-Exchange to get started please</p>
              <div className="w-fit cursor-pointer border-white border rounded-lg overflow-hidden">
                <GeneralButton text="Create Wallet" onclick={createWallet} loading={createWalletMutationResults.isLoading} loaderComponent={<ButtonLoader />} />
              </div>{" "}
            </>
          )}
        </div>
        <div className="my-3">
          <p className="text-2xl text-teal-100">PortFolio</p>
          {getWalletBalances?.data?.balances &&
            Object.entries(getWalletBalances?.data?.balances).map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ([key, value]: [any, any]) =>
                value > 0 && (
                  <div key={key}>
                    {key}: {value}
                  </div>
                )
            )}
        </div>

        <p className="text-white text-2xl mb-4">
          Email: <span>{auth?.userPayload?.data?.data?.email}</span>
        </p>

        <div className="w-fit">
          <GeneralButton text="Log Out" onclick={() => dispatch(logOutUser())} />
        </div>
      </div>
    </main>
  );
};

export default Profile;
