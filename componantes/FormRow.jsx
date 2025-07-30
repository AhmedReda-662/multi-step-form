import { useData } from "../context/DataContext";

function FormRow({
  name,
  placeholder,
  register,
  errorsMessage,
  type,
  validation,
}) {
  const { data } = useData();
  return (
    <div className="row flex flex-col gap-0.5">
      <div className="flex justify-between mb-0.5">
        <label className="text-slate-800 font-bold text-sm">{name}</label>
        {errorsMessage && (
          <span className="text-red-600 text-sm font-bold">
            {errorsMessage}
          </span>
        )}
      </div>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        className={`border-1 ${
          errorsMessage ? "border-red-600" : "border-gray-500"
        } rounded-md py-2 px-3 outline-0`}
        {...register(`${name}`, {
          required: "This field is required",
          validate: validation,
        })}
        defaultValue={
          name === "Name"
            ? data?.Name
            : name === "Email Address"
            ? data?.["Email Address"]
            : data?.["Phone Number"]
        }
      />
    </div>
  );
}

export default FormRow;
