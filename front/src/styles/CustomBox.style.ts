import { globalColors } from "../theme/globalColors";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface authLinkProps {
  widthPercent: number;
  isDark: boolean;
}

export const CustomBox = styled(Box)(
  ({ widthPercent, isDark }: authLinkProps) => ({
    borderRadius: "10px",
    width: widthPercent + "%",
    margin: "10px",
    background: isDark ? globalColors.grey[200] : globalColors.grey[100],
    padding: "20px",
    alignContent: "center",
  })
);
