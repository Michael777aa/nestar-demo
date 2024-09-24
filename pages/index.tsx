import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";
import withLayoutMain from "./libs/components/LayoutHome";

const Home: NextPage = () => {
  return (
    <Container>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
export default withLayoutMain(Home);
