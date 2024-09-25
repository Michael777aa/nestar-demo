/** @format */
import { Stack } from "@mui/material";
import { NextPage } from "next";
import useDeviceDetect from "../../libs/hook/useDeviceDetect";
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";

const AgentList: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>Mobile Community</Stack>;
  } else {
    return (
      <>
        <div style={{ margin: "20px 0" }}>
          <Stack className="container">AGENT LIST</Stack>
        </div>
      </>
    );
  }
};

export default withLayoutBasic(AgentList);
