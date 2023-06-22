import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const Button = styled(MuiButton)(({ theme }) => ({
  fontSize: "1.2em",
  gap: "1px",
  textTransform: "unset",
  [theme.breakpoints.down("md")]: { fontSize: "1em" },
  [theme.breakpoints.down("sm")]: { fontSize: "0.8em" },
}));
