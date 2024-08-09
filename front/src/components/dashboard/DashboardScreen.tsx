import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TopAppbar from "../topAppBar/TopAppbar";
import TotalRevenue from "./TotalRevenue";
import Sales from "./Sales";
import Visitors from "./Visitors";
import SalesMap from "./SalesMap";
import VolumeService from "./VolumeService";

const DashboardScreen = () => {
  return (
    <Box>
      <TopAppbar title="Dashboard" />
      <Box sx={{ marginTop: "75px" }}></Box>
      <Stack direction={"row"}>
        <Sales />
        <Visitors />
      </Stack>
      <Stack direction={"row"}>
        <TotalRevenue />
        <SalesMap />
        <VolumeService />
      </Stack>
    </Box>
  );
};

export default DashboardScreen;
