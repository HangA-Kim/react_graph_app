import { AppBar, Toolbar, Typography } from "@mui/material";
import { globalSize } from "theme/globalSize";
import React from "react";

const TopAppbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${globalSize.drawerWidth}px)`,
        ml: `${globalSize.drawerWidth}px`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          pannel................
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppbar;
