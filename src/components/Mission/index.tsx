import React from "react";
import { useMissionsInfoQuery } from "../../generated/graphql";
import MissionList from "./MissionList";

const MissionContainer = () => {
  const { error, loading, data } = useMissionsInfoQuery();
  if (loading) {
    return <h1>Loading</h1>;
  }

  if (error || !data) {
    return <h2>Error Occured</h2>;
  }
  console.log("Data", data);

  return <MissionList data={data} />;
};

export default MissionContainer;
