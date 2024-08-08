import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TopAppbar from "../topAppBar/TopAppbar";
import TotalRevenue from "./TotalRevenue";

const DashboardScreen = () => {
  return (
    <Box>
      <TopAppbar title="Dashboard"/>
      <Typography sx={{marginTop:'64px'}}>aaaaaaa</Typography>
      <TotalRevenue/>
    </Box>
  );
};

export default DashboardScreen;
