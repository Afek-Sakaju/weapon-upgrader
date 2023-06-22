import React from "react";
import { styled } from "@mui/material/styles";
import MuiZoom from "@mui/material/Zoom";
import MuiGrid from "@mui/material/Grid";
import MuiTypography from "@mui/material/Typography";
import MuiStack from "@mui/material/Stack";
import MuiFormControl from "@mui/material/FormControl";
import MuiInputLabel from "@mui/material/InputLabel";
import MuiSelect from "@mui/material/Select";
import MuiMenuItem from "@mui/material/MenuItem";
import MuiSnackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { Image as MuiImage } from "mui-image";

export const Stack = styled(MuiStack)`
  display: flex;
  width: 100%;
`;

export const Image = styled(({ ...props }) => (
  <MuiImage width="100%" height="150px" fit="contain" {...props} />
))``;

export const Zoom = styled(MuiZoom)`
  transition-delay: 250ms;
`;

export const Grid = styled(MuiGrid)(({ theme }) => ({
  height: "700px",
  width: "920px",
  [theme.breakpoints.down("md")]: {
    height: "400px",
    width: "600px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "400px",
    width: "350px",
  },
}));

export const Container = styled(({ ...props }) => (
  <Zoom in>
    <Grid container spacing={4} {...props} />
  </Zoom>
))``;

export const Title = styled(MuiTypography)(({ theme }) => ({
  padding: "20px",
  textAlign: "center",
  userSelect: "none",
  margin: "30px 0 50px 0",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
    margin: "20px 0 30px 0",
  },
  [theme.breakpoints.down("sm")]: {
    padding: 0,
    margin: "20px 0 30px 0",
    fontSize: "2em",
  },
}));

export const Item = styled(({ ...props }) => (
  <MuiGrid item xs={6} {...props} />
))``;

export const ItemCenterAlone = styled(({ ...props }) => (
  <MuiGrid xs={12} item {...props} />
))`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormControl = MuiFormControl;

export const InputLabel = MuiInputLabel;

export const Select = MuiSelect;

export const MenuItem = MuiMenuItem;

export const Snackbar = MuiSnackbar;

export const Alert = MuiAlert;
