/** @format */

import { Stack } from "@mui/material";
import { NextPage } from "next";
import withLayoutMain from "../libs/components/layout/LayoutHome";
import TrendProperties from "../libs/components/homepage/TrendProperties";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PopularProperties from "../libs/components/homepage/PopularProperties";
import TopProperties from "../libs/components/homepage/TopProperties";
import TopAgents from "../libs/components/homepage/TopAgents";
import Advertisement from "../libs/components/homepage/Advertisement";

import { useQuery } from "@apollo/client";
import { GET_PROPERTIES } from "../apollo/user/query";
import useDeviceDetect from "@/libs/hook/useDeviceDetect";

const Home: NextPage = () => {
  const device = useDeviceDetect();
  const {
    loading: getPropertiesLoading,
    data: getPropertiesData,
    error: getPropertiesErro,
    refetch: getPropertiesRefetch,
  } = useQuery(GET_PROPERTIES, {
    fetchPolicy: "network-only",
    variables: {
      input: {
        page: 1,
        limit: 5,
        sort: "propertyRank",
        direction: "DESC",
        search: {},
      },
    },
  });
  console.log("getPropertiesData", getPropertiesData);

  if (device === "mobile") {
    return <Stack>HOME PAGE MOBILE</Stack>;
  } else {
    return (
      <Stack className="home-page">
        <TrendProperties />
        <PopularProperties />
        <Advertisement />
        <TopProperties />
        <TopAgents />
      </Stack>
    );
  }
};

export default withLayoutMain(Home);
