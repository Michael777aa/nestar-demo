/** @format */
import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";
import useDeviceDetect from "../../libs/hook/useDeviceDetect";

const CS: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>mobile CS</Stack>;
  } else {
    return (
      <>
        <div style={{ margin: "20px 0" }}>
          <Stack className="container">CS CENTER</Stack>
        </div>
      </>
    );
  }
};

export default withLayoutBasic(CS);
