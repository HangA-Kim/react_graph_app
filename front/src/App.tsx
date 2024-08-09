import LeftSidebar from "components/LeftSidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "redux/store";
import { darkTheme, lightTheme } from "./theme/theme";
import { Box, Paper, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardScreen from "components/dashboard/DashboardScreen";
import { globalSize } from "theme/globalSize";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if (theme.darkTheme) {
      document.body.style.backgroundColor =
        darkTheme.palette.background.default;
      document.body.style.color = darkTheme.palette.text.primary || "#ffffff";
    } else {
      document.body.style.backgroundColor =
        lightTheme.palette.background.default;
      document.body.style.color = lightTheme.palette.text.primary || "#000000";
    }
  }, [theme.darkTheme]);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Paper className="App" sx={{ display: "flex", minHeight: "100vh" }}>
          <Box sx={{ width: globalSize.drawerWidth, flexShrink: 0 }}>
            <LeftSidebar />
          </Box>
          <Box sx={{ flexGrow: 1, padding: 1 }}>
            <Routes>
              <Route path="/" element={<DashboardScreen />} />
              <Route path="*" element={<div>ERR! 404</div>} />
            </Routes>
          </Box>
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
