import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage/LandingPageView";
import LandingPageVM from "../Pages/LandingPage/LandingPageVM";

const RouterConfig = () => {

const LandingPageVMObj = new LandingPageVM()

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/LandingPage" />} />
      <Route path="/LandingPage" element={<LandingPage LandingPageVMObj={LandingPageVMObj}/>} />
    </Routes>
  );
};

export default RouterConfig;
