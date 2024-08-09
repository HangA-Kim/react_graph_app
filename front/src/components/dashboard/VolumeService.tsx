import { Box, Typography } from "@mui/material";
import { fetchVolumService } from "features/api/thunks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import { AppDispatch, RootState } from "redux/store";
import { CustomBox } from "styles/CustomBox.style";

const VolumeService = () => {
  const dispatch = useDispatch<AppDispatch>();
  const voulmeService = useSelector(
    (state: RootState) => state.voulmeService.data
  );
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(fetchVolumService());
  }, []);
  return (
    <CustomBox widthPercent={30} isDark={theme.darkTheme}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Volume vs Services Level
      </Typography>
      <Box
        sx={{
          margin: "10px",
          height: "200px",
          width: "100%",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={voulmeService}
            margin={{
              top: 20,
              right: 30,
              left: -20,
              bottom: -20,
            }}
          >
            <CartesianGrid
              stroke="#333"
              strokeDasharray="3 0"
              vertical={false}
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="services" stackId="a" fill="#8884d8" />
            <Bar dataKey="volume" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </CustomBox>
  );
};

export default VolumeService;
