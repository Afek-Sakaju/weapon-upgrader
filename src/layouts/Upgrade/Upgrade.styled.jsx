import { styled } from "@mui/material/styles";
import MuiZoom from "@mui/material/Zoom";
import MuiGrid from "@mui/material/Grid";
import MuiTypography from "@mui/material/Typography";
import MuiStack from "@mui/material/Stack";
import { Image as MuiImage } from "mui-image";

export const Stack = styled(MuiStack)`
  display: flex;
  width: 100%;
`;

export const Image = styled(MuiImage)``;

export const Zoom = styled(MuiZoom)`
  transition-delay: 250ms;
`;

export const Container = styled(({ ...props }) => (
  <Zoom in>
    <MuiGrid container spacing={5} {...props} />
  </Zoom>
))`
  height: 100%;
`;

export const Title = styled(({ ...props }) => (
  <MuiTypography variant="h3" {...props} />
))`
  padding: 20px;
  text-align: center;
  user-select: none;
`;

export const Item = styled(({ ...props }) => (
  <MuiGrid xs={12} item {...props} />
))`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SmallItem = styled(({ ...props }) => (
  <MuiGrid xs={3} item {...props} />
))`
  justify-content: space-evenly;
`;
