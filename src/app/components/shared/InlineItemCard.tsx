import {Box} from "@mui/material";
import {ReactNode} from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const InlineItemCard = ({children}: Props) => (
  <Box
    sx={{
      display: {
        xs: "flex",
        sm: "inline-block",
      },
      flexDirection: {
        xs: "column",
        sm: "unset",
      },
      ".MuiChip-root, .MuiButton-root": {
        m: "5px",
      },
    }}
  >
    {children}
  </Box>
);

export default InlineItemCard;
