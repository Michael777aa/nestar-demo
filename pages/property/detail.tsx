/** @format */

import { Container, Stack } from "@mui/material";
import useDeviceDetect from "../../libs/hook/useDeviceDetect";
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";

const PropertyDetail = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return (
      <>
        <Stack>Mobile Detail</Stack>
      </>
    );
  } else {
    return <Container> Property Detail</Container>;
  }
};

export default withLayoutBasic(PropertyDetail);
