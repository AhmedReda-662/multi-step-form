import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "../pages/AppLayout";
import YourInfo from "../pages/YourInfo";
import SelectPlan from "../pages/SelectPlan";
import AddOns from "../pages/AddOns";
import Summary from "../pages/Summary";
import { DataProvider } from "../context/DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<YourInfo />} />
            <Route path="/selectplan" element={<SelectPlan />} />
            <Route path="/addons" element={<AddOns />} />
            <Route path="/summary" element={<Summary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
