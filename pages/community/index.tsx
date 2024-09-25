/** @format */
import { Stack } from "@mui/material";
import { NextPage } from "next";
import useDeviceDetect from "../../libs/hook/useDeviceDetect";
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";

const Community: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>Mobile Agent</Stack>;
  } else {
    return (
      <>
        <div style={{ margin: "20px 0" }}>
          <Stack className="container">Community</Stack>
        </div>
      </>
    );
  }
};

export default withLayoutBasic(Community);
