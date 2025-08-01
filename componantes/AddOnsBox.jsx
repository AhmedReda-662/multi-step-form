import { useData } from "../context/DataContext";

function AddOnsBox({ item }) {
  const { selectedServices, dispatch } = useData();
  function handleSelect() {
    let x = item;
    if (!item.active) {
      x.active = true;
      dispatch({
        type: "setSelectedServices",
        payload: [...selectedServices, x],
      });
    } else {
      x.active = false;
      let filterd = selectedServices.filter((i) => i.header !== item.header);
      dispatch({ type: "setSelectedServices", payload: [...filterd] });
    }
  }
  return (
    <div
      className={`box flex justify-between items-center border-1 border-indigo-700 w-[80%] p-5 rounded-md ${
        item.active ? "bg-gray-50" : "bg-white"
      }`}
      key={item.header}
    >
      <div className="flex gap-7">
        <input
          type="checkbox"
          className="accent-indigo-600 w-4"
          onChange={handleSelect}
          checked={item.active}
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
