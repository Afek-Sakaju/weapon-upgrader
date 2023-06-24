import React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MuiTypography from "@mui/material/Typography";

export const MuiCheckbox = styled(({ helperText, label, ...props }) => (
  <>
    <FormControlLabel
      control={<Checkbox {...props} />}
      label={<Typography>{label}</Typography>}
      sx={{ userSelect: "none" }}
    />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </>
))``;

export const Typography = styled(MuiTypography)(({ theme }) => ({
  fontSize: "1.1em",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9em",
    fontWeight: "bolder",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.45em",
  },
}));
