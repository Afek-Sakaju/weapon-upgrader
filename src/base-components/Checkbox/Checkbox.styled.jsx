import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";

export const MuiCheckbox = styled(({ helperText, label, ...props }) => (
  <>
    <FormControlLabel
      control={<Checkbox {...props} />}
      label={label}
      sx={{ userSelect: "none" }}
    />
    {helperText && <FormHelperText>{helperText}</FormHelperText>}
  </>
))``;
