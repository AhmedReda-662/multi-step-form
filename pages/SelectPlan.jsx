import { useState } from "react";
import Header from "../componantes/Header";
import NextButton from "../componantes/NextButton";
import BackButton from "../componantes/BackButton";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";

const plansDetail = [
  { path: "/icon-arcade.svg", title: "Arcade", price: 9 },
  { path: "/icon-advanced.svg", title: "Advanced", price: 12 },
  { path: "/icon-pro.svg", title: "Pro", price: 15 },
];

function SelectPlan() {
  const navigate = useNavigate();
  const { selectedPlan, dispatch } = useData();
  const [plan, setPlan] = useState(() => {
    return selectedPlan?.title;
  });
  function handleClick(value) {
    setPlan(value.title);
    dispatch({ type: "setSelectedPlan", payload: value });
  }
  function handleSelect() {
    if (selectedPlan) navigate("/addons");
    return;
  }
  return (
    <>
      <div className="header">
        <Header
          title={"Select your plan"}
          details={"You have the option of montholy or yearly billing."}
        />
      </div>
      <div className="container flex flex-col justify-between flex-1">
        <div className="mt-8 flex gap-5">
          {plansDetail.map((value) => {
            return (
              <div
                className={`border-1  ${
                  plan === value.title
                    ? "bg-indigo-50 border-indigo-700"
                    : "bg-white border-gray-300"
                } p-5 w-[150px] h-[175px] flex flex-col justify-between rounded-md cursor-pointer`}
                key={value.title}
                onClick={() => handleClick(value)}
              >
                <div className="image">
                  <img src={value.path} alt={value.title} />
                </div>
                <div className="details">
                  <p className="font-bold">{value.title}</p>
                  <span className="text-gray-400">${value.price}/mo</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center w-[87%]">
          <BackButton path={"/"} />
          <NextButton
            type={"button"}
            path={"/addons"}
            style={"bg-blue-950"}
            onClick={handleSelect}
          >
            Next Step
          </NextButton>
        </div>
      </div>
    </>
  );
}

export default SelectPlan;
