import { Box, Typography } from "@mui/material";
import { fetchVisitors } from "features/api/thunks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { CustomBox } from "styles/CustomBox.style";

const Visitors = () => {
  const dispatch = useDispatch<AppDispatch>();
  const visitors = useSelector((state: RootState) => state.visitors.data);
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    dispatch(fetchVisitors());
  }, []);

  console.log("visitors:", visitors);

  return (
    <CustomBox widthPercent={40} isDark={theme.darkTheme}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Visitors Insights
      </Typography>
      <Box
        sx={{
          margin: "10px",
          height: "250px",
          width: "100%",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={visitors}
            margin={{
              top: 5,
              right: 30,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              stroke="#333"
              horizontal={true}
              vertical={false}
              strokeDasharray="3 0"
            />
            <XAxis
              dataKey="month"
              tickSize={0}
              axisLine={false}
              padding={{ left: 20 }}
              tick={({ payload, x, y, dy }) => (
                <text
                  x={x}
                  y={y + 20}
                  dy={dy}
                  textAnchor="middle"
                  fill="#777"
                  fontSize={14}
                >
                  {payload.value.charAt(0).toUpperCase() +
                    payload.value.slice(1)}
                </text>
              )}
            />
            <YAxis
              tickSize={0}
              axisLine={false}
              ticks={[0, 100, 200, 300, 400]}
              tick={{
                fill: "#777",
                fontSize: 14,
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              dot={false}
              strokeWidth={3}
              type="basis"
              dataKey="loyal_customer"
              stroke="#a700ff"
            />

            <Line
              dot={false}
              strokeWidth={3}
              type="basis"
              dataKey="new_customer"
              stroke="#f64e60"
            />

            <Line
              dot={false}
              strokeWidth={3}
              type="basis"
              dataKey="unique_customer"
              stroke="#3cd856"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </CustomBox>
  );
};

export default Visitors;
