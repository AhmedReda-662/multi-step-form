import { useState } from "react";
import { useData } from "../context/DataContext";

function AddOnsBox({ item }) {
  const [select, setSelect] = useState(false);
  const { selectedServices, dispatch } = useData();
  function handleSelect() {
    setSelect((e) => !e);
    if (!select) {
      dispatch({
        type: "setSelectedServices",
        payload: [...selectedServices, item],
      });
    } else {
      const filterServices = selectedServices.filter(
        (i) => i.header !== item.header
      );
      dispatch({ type: "setSelectedServices", payload: [...filterServices] });
    }
  }
  return (
    <div
      className={`box flex justify-between items-center border-1 border-indigo-700 w-[80%] p-5 rounded-md ${
        select ? "bg-gray-50" : "bg-white"
      }`}
      key={item.header}
    >
      <div className="flex gap-7">
        <input
          type="checkbox"
          className="accent-indigo-600 w-4"
          onChange={handleSelect}
        />
        <div className="text">
          <h3 className="font-bold text-slate-800 capitalize">{item.header}</h3>
          <p className="text-sm text-gray-400">{item.details}</p>
        </div>
      </div>
      <div className="price text-sm text-indigo-600">+${item.price}/mo</div>
    </div>
  );
}

export default AddOnsBox;
