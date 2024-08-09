import { Box, Typography } from "@mui/material";
import { fetchRevenues } from "features/api/thunks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { AppDispatch, RootState } from "redux/store";
import { CustomBox } from "styles/CustomBox.style";
import { globalColors } from "theme/globalColors";

const TotalRevenue = () => {
  const dispatch = useDispatch<AppDispatch>();
  const revenues = useSelector((state: RootState) => state.revenues.data);
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(fetchRevenues());
  }, []);

  console.log("revenues:", revenues);

  return (
    <CustomBox widthPercent={40} isDark={theme.darkTheme}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Total Revenue
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
            data={revenues}
            margin={{
              top: 5,
              right: 30,
              left: -20,
              bottom: -20,
            }}
          >
            <CartesianGrid
              stroke="#333"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 0"
            />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend
              iconType="circle"
              iconSize={10}
              style={{
                paddingTop: "10px",
              }}
            />
            <Bar
              dataKey="offline"
              fill={globalColors.blue}
              activeBar={<Rectangle fill="pink" stroke="blue" />}
              radius={[4, 4, 4, 4]}
            />
            <Bar
              dataKey="online"
              fill="#00e096"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
              radius={[4, 4, 4, 4]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </CustomBox>
  );
};

export default TotalRevenue;
