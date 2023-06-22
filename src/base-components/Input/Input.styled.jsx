import { styled } from "@mui/material/styles";
import MuiInputAdornment from "@mui/material/InputAdornment";
import MuiTextField from "@mui/material/TextField";

export const TextField = styled(MuiTextField)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const InputAdornment = MuiInputAdornment;
