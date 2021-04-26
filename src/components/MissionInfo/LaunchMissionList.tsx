import React from "react";
import { LaunchMissionInfoQuery } from "../../generated/graphql";

interface Props {
  data: LaunchMissionInfoQuery;
}

const MissionList: React.FC<Props> = ({ data }) => {
  return <div>{data?.launch?.details}</div>;
};

export default MissionList;
