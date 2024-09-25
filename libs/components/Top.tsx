/** @format */

import { Logout } from "@mui/icons-material";
import { Box, Link, Menu, MenuItem, Stack } from "@mui/material";
import useDeviceDetect from "../hook/useDeviceDetect";

const Top = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return (
      <>
        <Stack className={"navbar"}>
          <Link href={"/"}>
            <div>Home</div>
          </Link>
          <Link href={"/property"}>
            <div>Properties</div>
          </Link>
          <Link href={"/agent"}>
            <div>Agents</div>
          </Link>
          <Link href={"/community"}>
            <div>Community</div>
          </Link>
          <Link href={"/cs"}>
            <div>CS</div>
          </Link>
        </Stack>
      </>
    );
  } else {
  }

  return (
    <Stack className={"navbar"}>
      <Stack className={"navbar-main"}>
        <Stack className={"container"}>
          <Box component={"div"} className={"logo-box"}>
            <Link href={"/"}>
              <img src={"/img/logo/logoWhite.svg"} alt="" />
            </Link>
          </Box>
          <Box component={"div"} className={"router-box"}>
            <Link href={"/"}>
              <div>Home</div>
            </Link>
            <Link href={"/property"}>
              <div>Properties</div>
            </Link>
            <Link href={"/agent"}>
              <div>Agents</div>
            </Link>
            <Link href={"/community"}>
              <div>Community</div>
            </Link>
            <Link href={"/cs"}>
              <div>CS</div>
            </Link>
          </Box>
          <Box component={"div"} className={"user-box"}>
            <>
              <div className={"login-user"}>
                <img src={"/img/profile/defaultUser.svg"} alt="" />
              </div>
              <Menu id="baisc-menu" sx={{ mt: "5px" }} open={false}>
                <MenuItem>
                  <Logout
                    fontSize="small"
                    style={{ color: "blue", marginLeft: "10px" }}
                  />
                  Logout
                </MenuItem>
              </Menu>
            </>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Top;
