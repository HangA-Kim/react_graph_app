import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { globalSize } from "theme/globalSize";
import Languages from "./Languages";
import SearchText from "./SearchText";
import AlarmBadge from "./AlarmBadge";
import Profile from "./Profile";
import ModeCtrl from "./ModeCtrl";

interface TopAppbarProps {
  title: string;
}

const TopAppbar = ({ title }: TopAppbarProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${globalSize.drawerWidth}px)`,
        ml: `${globalSize.drawerWidth}px`,
        paddingTop: "5px",
        paddingBottom: "5px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography>{title}</Typography>
        <Stack direction={"row"}>
          <SearchText />
          <Languages />
          <AlarmBadge />
          <Profile />
          <ModeCtrl />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppbar;
