import {
  Box,
  Grid,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import cursor from "../../../assets/images/cursor.png";
import SlideBar from "../SlideBar";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { DohghnutChart, LineChart } from "./Chart";

const Dashboard = () => {
  return (
    <>
      <Grid
        minH={"100vh"}
        templateColumns={["1fr", "5fr 1fr"]}
        css={{
          cursor: `url(${cursor}),default`,
        }}
      >
        <Box boxSizing={"border-box"} py={16} px={["4", "0"]}>
          <Text
            textAlign={"center"}
            children={`Last change was on ${
              new Date().toString().split("G")[0]
            }`}
            opacity={"0.5"}
          />

          <Heading
            children={"DashBoard"}
            ml={["0", "16"]}
            mb={16}
            textAlign={["center", "left"]}
          />

          <Stack
            direction={["column", "row"]}
            minH={"24"}
            justifyContent={"space-evenly"}
          >
            <Databox
              title={"veiws"}
              qty={123}
              qtypercentage={30}
              profit={true}
            />
            <Databox
              title={"veiws"}
              qty={123}
              qtypercentage={30}
              profit={true}
            />
            <Databox
              title={"veiws"}
              qty={123}
              qtypercentage={30}
              profit={true}
            />
          </Stack>

          <Box
            m={["0", "16"]}
            borderRadius={"lg"}
            p={["0", "16"]}
            mt={["4", "16"]}
            boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
          >
            <Heading
              textAlign={["center", "left"]}
              children={"Veiws Graph"}
              size={"md"}
              pt={["8", "0"]}
              ml={["0", "16"]}
            />

            {/* line grapgh here */}
            <LineChart></LineChart>
          </Box>

          <Grid templateColumns={["1fr", "2fr 1fr"]}>
            <Box p={4}>
              <Heading
                children={"Progress Bar"}
                textAlign={["center", "left"]}
                size={"md"}
                ml={["0", "16"]}
                my={"8"}
              />
              <Box>
                <Bar title="views" value={30} profit={true} />
                <Bar title="users" value={78} profit={false} />
                <Bar title="subscriptions" value={0} profit={true} />
              </Box>
            </Box>

            <Box p={["0", "16"]} boxSizing={"border-box"} py={["4", "8"]}>
              <Heading
                textAlign={"center"}
                children={"users"}
                size={"md"}
                mb={"4"}
              />
              <DohghnutChart />
            </Box>
          </Grid>
        </Box>

        <SlideBar />
      </Grid>
    </>
  );
};

export default Dashboard;

function Databox({ title, qty, qtypercentage, profit }) {
  return (
    <>
      <Box
        w={["full", "20%"]}
        boxShadow={"-2px 0 10px rgba(107,70,193,0.5)"}
        p={8}
        borderRadius={"lg"}
      >
        <Text children={`${title}`} />

        <HStack spacing={6}>
          <Text children={qty} fontSize={"2xl"} fontWeight={"bold"} />
          <HStack>
            <Text children={`${qtypercentage}%`} />
            {profit ? (
              <>
                <RiArrowUpLine color={"green"} />
              </>
            ) : (
              <>
                <RiArrowDownLine color={"red"} />
              </>
            )}
          </HStack>
        </HStack>

        <Text children={"since last month"} opacity={"0.6"} />
      </Box>
    </>
  );
}

function Bar({ title, value, profit }) {
  return (
    <>
      <Box py={4} px={["0", "20"]}>
        <Heading children={title} size={"sm"} mb={"2"} />
        <HStack w={"full"} alignItems={"center"}>
          <Text children={profit ? "0%" : `-${value}%`} />
          <Progress
            w={"full"}
            value={profit ? value : 0}
            colorScheme={"purple"}
          />
          <Text children={`${value > 100 ? value : 100}%`} />
        </HStack>
      </Box>
    </>
  );
}
