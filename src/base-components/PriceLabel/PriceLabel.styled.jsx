import { styled } from "@mui/material/styles";
import MuiTypography from "@mui/material/Typography";
import MuiBox from "@mui/material/Box";
import Money from "@mui/icons-material/MonetizationOn";

export const Typography = styled(MuiTypography)`
  font-size: 1.1em;
`;

export const Container = styled(MuiBox)``;

export const PriceBox = styled(MuiBox)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 3px;
`;

export const Item = styled(({ ...props }) => <Grid {...props} item></Grid>)``;

export const MoneyIcon = styled(Money)`
  font-size: 1.2em;
  margin-bottom: 1px;
`;
