import { useForm, type SubmitHandler } from "react-hook-form";
import { QueryApi } from "../api/Query";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CustomInputField from "../common/CustomInputField";
import GeneralButton from "../common/GeneralButton";
import ButtonLoader from "../common/ButtonLoader";
import CustomSelect from "../common/CustomSelectField";
import toast from "react-hot-toast";

type FormValues = {
  receiver_id: string;
  currency: string;
  amount: number;
};

const Transfer = () => {
  const [swapMutation, { isLoading, isSuccess }] = QueryApi.useSwapMutation();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        receiver_id: Yup.string().required(),
        currency: Yup.string().required(),
        amount: Yup.number().required(),
      })
    ),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await swapMutation({
        receiver_id: data.receiver_id,
        currency: data.currency,
        amount: data.amount,
      }).unwrap();

      toast.success("Swap successful");
      reset();
      console.log("success:", response);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.data);
      console.error("err:", err?.data);
    }
  };
  return (
    <div className="my-2 w-full">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-3 justify-center items-center">
        <div className="flex flex-col gap-3 bg-inherit">
          <CustomInputField control={control} name="receiver_id" placeholder="Enter Reciever Id" label="Receiver" />

          <CustomSelect
            control={control}
            name="currency"
            options={[
              { label: "Naira", value: "cNGN" },
              { label: "Cefa", value: "cXAF" },
              { label: "Dollar", value: "USDx" },
              { label: "Euro", value: "EURx" },
            ]}
            label="Currency"
          />
          <CustomInputField control={control} name="amount" placeholder="Enter Amount" label="Amount" />
        </div>
        <div className="w-fit border border-white rounded-lg overflow-hidden">
          <GeneralButton text="Transfer" loaderComponent={<ButtonLoader />} loading={isLoading} />
        </div>{" "}
        {isSuccess && <p className="text-green-500 mt-2">Deposit successful!</p>}
      </form>{" "}
    </div>
  );
};

export default Transfer;
