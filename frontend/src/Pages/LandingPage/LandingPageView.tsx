import React from "react";
import LandingPageVM from "./LandingPageVM";
import { observer } from "mobx-react";

interface LandingPageProps {
    LandingPageVMObj: LandingPageVM;
}

const LandingPage: React.FC<LandingPageProps> = observer((props) => {
  return <div>{props.LandingPageVMObj.selectedStack}</div>;
});

export default LandingPage;
