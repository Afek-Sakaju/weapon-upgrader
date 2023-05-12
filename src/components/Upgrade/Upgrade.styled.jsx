import { styled } from "@mui/material/styles";
import MuiZoom from "@mui/material/Zoom";
import MuiGrid from "@mui/material/Grid";
import MuiTypography from "@mui/material/Typography";
import MuiImage from "@mui/material/Image";

export const Zoom = styled(MuiZoom)`
  transition-delay: 250ms;
`;

export const Container = styled(({ ...props }) => (
  <Zoom in>
    <MuiGrid container spacing={4} {...props} />
  </Zoom>
))`
  height: 100%;
`;

export const Title = styled(({ ...props }) => (
  <MuiTypography variant="h3" {...props} />
))`
  padding: 20px;
  text-align: center;
`;

export const Item = styled(({ ...props }) => (
  <MuiGrid xs={12} item {...props} />
))`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(MuiImage)``;
