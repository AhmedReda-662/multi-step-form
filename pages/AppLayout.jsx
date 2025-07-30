import { Outlet } from "react-router";
import Steps from "../componantes/Steps";

function AppLayout() {
  return (
    <main className="p-7 bg-blue-100 flex justify-center items-center h-[100vh]">
      <div className="container flex gap-16 bg-white w-5xl p-3 rounded-2xl h-[80vh]">
        <div className="left-side basis-[30%]">
          <Steps />
        </div>
        <div className="right-side p-7 flex flex-col flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
