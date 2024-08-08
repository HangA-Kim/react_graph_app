import LeftSidebar from "components/LeftSidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "redux/store";
import { darkTheme, lightTheme } from "./theme/theme";
import { Paper, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardScreen from "components/DashboardScreen";

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
        <Paper className="App">
          {/* <Sidebar /> */}
          <LeftSidebar />
          <Routes>
            <Route path="/" element={<DashboardScreen />} />
            <Route path="*" element={<div>ERR! 404</div>} />
          </Routes>
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
