import React, { useState } from "react";
import PackageContext from "./Context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: "Go to Russia",
    agent: "008",
    accept: "Not Accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPT" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default Provider;
