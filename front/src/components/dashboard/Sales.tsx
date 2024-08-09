import { Icons } from "../../assets/icons";
import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { SALES_LISTS } from "./../../constants/menuLists";
import { CustomBox } from "styles/CustomBox.style";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Sales = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <CustomBox widthPercent={60} isDark={theme.darkTheme}>
      <Stack direction={"row"} justifyContent={"space-between"} margin={"20px"}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Today's Sales
        </Typography>
        <Button
          variant="outlined"
          startIcon={
            <Avatar sx={{ width: "20px", height: "20px" }}>
              <img src={Icons.ExportDark} />
            </Avatar>
          }
          sx={{
            borderColor: theme.darkTheme ? "white" : "",
            color: theme.darkTheme ? "white" : "",
          }}
        >
          Export
        </Button>
      </Stack>
      <Grid container justifyContent={"space-between"} height={"80%"}>
        {SALES_LISTS.map((item, idx) => (
          <Grid
            key={idx}
            xs={12 / SALES_LISTS.length}
            item
            display="flex"
            flexDirection="column"
            height={"100%"}
          >
            <Box
              display="flex"
              flexDirection="column"
              border={1}
              borderColor="#555"
              borderRadius="10px"
              flexGrow={1}
              margin="5px"
              justifyContent="space-between"
              alignItems="center"
              padding="10px"
              width={"95%"}
            >
              <Avatar
                sx={{
                  bgcolor: "#444",
                  borderColor: "white",
                }}
              >
                <img src={item.src} />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.value}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                {item.title}
              </Typography>
              <Typography variant="body1">{item.text}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </CustomBox>
  );
};

export default Sales;
