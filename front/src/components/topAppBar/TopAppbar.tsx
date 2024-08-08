import { AppBar, Badge, Box, IconButton, InputBase, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { globalSize } from "theme/globalSize";
import React from "react";

import { Icons } from '../../assets/icons';
import Languages from "./Languages";
import SearchText from "./SearchText";
import AlarmBadge from "./AlarmBadge";
import Profile from "./Profile";
import ModeCtrl from "./ModeCtrl";


interface TopAppbarProps {
  title:string
}

const TopAppbar = ({title}:TopAppbarProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${globalSize.drawerWidth}px)`,
        ml: `${globalSize.drawerWidth}px`,
        paddingTop:'5px',
        paddingBottom:'5px'
      }}
    >
      <Toolbar sx={{justifyContent:'space-between'}}>
        <Typography>{title}</Typography>
        <Stack direction={'row'}>
          <SearchText/>
          <Languages/>
          <AlarmBadge/>
          <Profile/>
          <ModeCtrl/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppbar;
