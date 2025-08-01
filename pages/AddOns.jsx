import BackButton from "../componantes/BackButton";
import Header from "../componantes/Header";
import NextButton from "../componantes/NextButton";
import AddOnsBox from "../componantes/AddOnsBox";
import { useNavigate } from "react-router";
const addOns = [
  {
    header: "online service",
    details: "Access to multiplayer games",
    price: 1,
    active: false,
  },
  {
    header: "Large Storage",
    details: "Extra 1TB of cloud save",
    price: 2,
    active: false,
  },
  {
    header: "Customizable Profile",
    details: "Custom theme on your profile",
    price: 2,
    active: false,
  },
];
function AddOns() {
  const navigate = useNavigate();
  function handelClick() {
    navigate("/summary");
  }
  return (
    <>
      <div className="header">
        <Header
          title={"Pick add-ons"}
          details={"Add-ons help enhance your gaming experince"}
        />
      </div>
      <div className="container flex flex-col justify-between flex-1 mt-8">
        <div className="flex flex-col gap-5">
          {addOns.map((item) => {
            return <AddOnsBox item={item} key={item.header} />;
          })}
        </div>
        <div className="btn flex justify-between w-[80%]">
          <BackButton path={"/selectplan"} />
          <NextButton
            type={"button"}
            style={"bg-blue-950"}
            onClick={handelClick}
          >
            Next Step
          </NextButton>
        </div>
      </div>
    </>
  );
}

export default AddOns;
