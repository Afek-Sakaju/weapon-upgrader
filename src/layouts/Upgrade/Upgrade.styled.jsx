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

export const Grid = styled(MuiGrid)`
  height: 700px;
  width: 1000px;
`;

export const Container = styled(({ ...props }) => (
  <Zoom in>
    <Grid container spacing={4} {...props} />
  </Zoom>
))``;

export const Title = styled(MuiTypography)`
  padding: 20px;
  text-align: center;
  user-select: none;
  margin: 30px 0 50px 0;
`;

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
