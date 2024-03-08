import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import cursor from "../../../assets/images/cursor.png";
import SlideBar from "../SlideBar";

const CreateCourse = () => {
  return (
    <>
      <Grid
        minH={"100vh"}
        templateColumns={["1fr", "5fr 1fr"]}
        css={{
          cursor: `url(${cursor}),default`,
        }}
      >
        <Box
        ></Box>
        <SlideBar />
      </Grid>
    </>
  );
};

export default CreateCourse;
