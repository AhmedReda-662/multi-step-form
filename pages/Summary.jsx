import { Link } from "react-router";
import Header from "../componantes/Header";
import { useData } from "../context/DataContext";
import BackButton from "../componantes/BackButton";
import NextButton from "../componantes/NextButton";
import { useState } from "react";

function Summary() {
  const [confirm, setConfirm] = useState(false);
  const { selectedPlan, selectedServices } = useData();
  let sum = 0;
  if (selectedServices.length) {
    sum = selectedServices.map((item) => item.price);
    sum = sum.reduce((acc, cur) => acc + cur, 0);
  }

  sum += selectedPlan.price;
  if (!confirm) {
    return (
      <>
        <div className="header">
          <Header
            title={"Finishing Up"}
            details={"Double-Check everything looks Ok before confirming."}
          />
        </div>
        <div className="container flex flex-col justify-between flex-1 mt-8">
          <div className="w-[80%]">
            <div className="bill  p-5 bg-slate-50 rounded-md">
              <div className="plan flex justify-between  border-b-1 border-b-gray-200 pb-7 pt-4">
                <div>
                  <h3 className="font-bold text-[16px] text-slate-600">
                    {selectedPlan.title}
                  </h3>
                  <span>
                    <Link
                      to={"/selectplan"}
                      className="text-sm text-gray-400 underline"
                    >
                      Change
                    </Link>
                  </span>
                </div>
                <span className="font-bold text-sm text-slate-600">
                  ${selectedPlan.price}/mo
                </span>
              </div>
              <div className="services my-6 flex flex-col gap-4">
                {selectedServices.map((item) => {
                  return (
                    <div
                      className="flex justify-between items-center"
                      key={item.header}
                    >
                      <span className="capitalize text-gray-400 text-sm">
                        {item.header}
                      </span>
                      <span className="font-bold text-sm text-slate-600">
                        +${item.price}/mo
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="total mt-3 flex justify-between items-center mx-[20px]">
              <span className="text-sm text-gray-400">Total (per month)</span>
              <span className="text-indigo-700 font-bold text-2xl">
                +${sum}/mo
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center w-[80%]">
            <BackButton path={"/addons"} />
            <NextButton
              onClick={() => setConfirm((e) => !e)}
              type={"button"}
              style={"bg-indigo-600"}
            >
              Confirm
            </NextButton>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-1 text-center w-[80%]">
        <div className="message">
          <div className="image flex justify-center mb-4">
            <img src="/icon-thank-you.svg" alt="icon" />
          </div>
          <p className="font-bold text-2xl mb-2">Thank you</p>
          <p className="text-gray-400">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    );
  }
}

export default Summary;
