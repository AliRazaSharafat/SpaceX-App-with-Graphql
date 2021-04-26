import React from "react";
import MissionContainer from "./components/Mission";
import LaunchMissionInfo from "./components/MissionInfo";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <MissionContainer />
      <LaunchMissionInfo />
    </div>
  );
}

export default App;
