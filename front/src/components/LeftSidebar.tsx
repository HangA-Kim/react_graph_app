import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { globalSize } from "theme/globalSize";
import { Avatar } from "@mui/material";
import { Icons } from "../assets/icons";
import { globalColors } from "theme/globalColors";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { MENU_LISTS } from "constants/menuLists";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  const [currentTab, setCurrentTab] = React.useState(0);
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: globalSize.drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: globalSize.drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{
                bgcolor: globalColors.blue,
                borderRadius: "8px",
              }}
              variant="rounded"
            >
              <img src={Icons.LogoWhite} alt="Logo" />
            </Avatar>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "left", marginLeft: "10px" }}
            >
              Hang A
            </Typography>
          </Box>
          <HighlightOffRoundedIcon />
        </Toolbar>
        <List sx={{ padding: "10px" }}>
          {MENU_LISTS.map((item, idx) => (
            <ListItem
              key={idx}
              disablePadding
              sx={{
                background: currentTab === idx ? globalColors.blue : "",
                borderRadius: "3px",
              }}
            >
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => setCurrentTab(idx)}
              >
                <ListItemIcon>
                  <img src={item.icon} style={{ width: "20px" }} />
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ textAlign: "left" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
