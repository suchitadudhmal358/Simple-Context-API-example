import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";

const Mission = () => <MissionOne />;

const MissionOne = () => <MissionTwo />;
const MissionTwo = () => <MissionThree />;
const MissionThree = () => <MissionRussia />;

const MissionRussia = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h2>Mission Information</h2>
          <p>Mission Name : {context.data.mname}</p>
          <p>Agent Code : {context.data.agent}</p>
          <p>Mission Status : {context.data.accept}</p>
          <button onClick={context.isMissionAccepted}>Change to Accept</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};
const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Mission />
      </Provider>
    </div>
  );
};

export default App;
