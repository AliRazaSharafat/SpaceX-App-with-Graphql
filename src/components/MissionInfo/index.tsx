import React from "react";
import { useLaunchMissionInfoQuery } from "../../generated/graphql";
import LaunchMissinList from "./LaunchMissionList";

const LaunchMissionInfo = () => {
  const { error, loading, data } = useLaunchMissionInfoQuery({
    variables: {
      id: "25",
    },
  });
  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error || !data) {
    return <h2>Error Occured</h2>;
  }
  console.log("Data", data);

  return <LaunchMissinList data={data} />;
};

export default LaunchMissionInfo;
