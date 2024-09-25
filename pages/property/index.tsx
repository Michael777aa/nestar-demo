/** @format */

import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";

import { useState } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import useDeviceDetect from "../../libs/hook/useDeviceDetect";
import Filter from "../../libs/components/property/Filter";
import PropertyCard from "../../libs/components/property/PropertyCard";
import withLayoutBasic from "../../libs/components/layout/LayoutBasic";

const PropertyList: NextPage = () => {
  const device = useDeviceDetect();
  const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  if (device === "mobile") {
    return <Stack>Property List Mobile</Stack>;
  } else {
    return (
      <>
        <div
          id="property-list-page"
          style={{ margin: "20px 0", position: "relative" }}
        >
          <Stack className="container">
            <Box className={"right"}>
              <span>Sort</span>
              <Button endIcon={<KeyboardArrowDown />}>New</Button>
            </Box>
            <Stack className="property-page">
              <Stack className="filter-config">
                <Filter />
              </Stack>
              <Stack className="main-config" mb="76px">
                <Stack className="list-config">
                  {properties.map((property, index) => {
                    return <PropertyCard key={index} />;
                  })}
                </Stack>

                <Stack className="pagination-config">
                  <Stack className="pagination-box">
                    <Pagination
                      page={1}
                      count={5}
                      shape="circular"
                      color="primary"
                    />
                  </Stack>

                  <Stack className="total-result">
                    <Typography>Total 6 properties available</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </>
    );
  }
};

export default withLayoutBasic(PropertyList);
