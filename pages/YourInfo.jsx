import { useNavigate } from "react-router";
import FormRow from "../componantes/FormRow";
import NextButton from "../componantes/NextButton";
import { useForm } from "react-hook-form";
import Header from "../componantes/Header";
import { useData } from "../context/DataContext";

function YourInfo() {
  const { dispatch } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  return (
    <>
      <div className="Header">
        <Header
          title={"Personal info"}
          details={"Please provide your name, email address, and phone number."}
        />
      </div>
      <form
        className="mt-8 flex flex-col justify-between flex-1 w-[80%]"
        onSubmit={handleSubmit(function (data) {
          console.log(data);
          dispatch({ type: "setData", payload: data });
          navigate("/selectplan");
        })}
      >
        <FormRow
          name={"Name"}
          placeholder={"e.g. Stephen King"}
          register={register}
          errorsMessage={errors?.Name?.message}
          type={"text"}
          validation={(value) => {
            if (value.length > 10) {
              return "Name Should Be Less Than 100 Character";
            } else {
              return;
            }
          }}
        />
        <FormRow
          name={"Email Address"}
          placeholder={"e.g. stephenking@lorem.com"}
          register={register}
          errorsMessage={errors?.["Email Address"]?.message}
          type={"text"}
          validation={(value) => {
            // eslint-disable-next-line no-useless-escape
            let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
            if (re.test(value)) {
              return;
            } else {
              return "Please Revalidate Your Email";
            }
          }}
        />
        <FormRow
          name="Phone Number"
          placeholder="e.g. +1 234 567 890"
          register={register}
          errorsMessage={errors?.["Phone Number"]?.message}
          type={"text"}
          validation={(value) => {
            // eslint-disable-next-line no-useless-escape
            let re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
            if (value.length === 11 && re.test(value)) {
              return;
            } else {
              return "Please Revalidate Your Phone Number";
            }
          }}
        />
        <NextButton type={"submit"} style={"bg-blue-950"}>
          Next Step
        </NextButton>
      </form>
    </>
  );
}

export default YourInfo;
