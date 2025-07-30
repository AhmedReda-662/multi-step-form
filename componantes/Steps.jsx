import { useLocation } from "react-router";

const list = Array.from({ length: 4 });
const obj = [
  { title: "Your Info", active: "/" },
  { title: "Select Plan", active: "/selectplan" },
  { title: "Add-ons", active: "/addons" },
  { title: "Summary", active: "/summary" },
];
function Steps() {
  const location = useLocation();
  return (
    <div className="p-8 flex rounded-2xl flex-col bg-[url(/bg-sidebar-desktop.svg)] bg-center bg-no-repeat bg-cover gap-6 h-[100%]">
      {list.map((step, i) => (
        <div className="row" key={obj.at(i).title}>
          <div className="flex gap-6 items-center">
            <div
              className={`step p-0.5 w-[34px] h-[34px] rounded-[50%] ${
                location.pathname === obj.at(i).active
                  ? "bg-blue-200 text-black"
                  : "text-white"
              } flex justify-center items-center border-[1px] border-white`}
            >
              {i + 1}
            </div>
            <div className="details uppercase">
              <span className="text-sm text-gray-300">Step {i + 1}</span>
              <h3 className="text-white text-[14px] font-bold">
                {obj.at(i).title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;
