import React from "react";
import PropTypes from "prop-types";

import { InputAdornment, TextField } from "./Input.styled";

export default function Input({
  autoComplete,
  endCmp,
  error,
  focused,
  fullWidth,
  helperText,
  id,
  label,
  margin,
  maxRows,
  multiline,
  name,
  onChange,
  readOnly,
  required,
  rows,
  startCmp,
  type,
  value,
  variant,
  ...props
}) {
  return (
    <TextField
      autoComplete={autoComplete}
      error={error}
      focused={focused}
      fullWidth={fullWidth}
      helpertext={helperText}
      id={id}
      label={label}
      margin={margin}
      maxRows={maxRows}
      multiline={multiline}
      name={name}
      onChange={onChange}
      required={required}
      rows={rows}
      type={type}
      value={value}
      variant={variant}
      InputProps={{
        readOnly,
        ...(startCmp && {
          startAdornment: (
            <InputAdornment position="start">{startCmp}</InputAdornment>
          ),
        }),
        ...(endCmp && {
          endAdornment: (
            <InputAdornment position="end">{endCmp}</InputAdornment>
          ),
        }),
      }}
      {...props}
    />
  );
}

Input.propTypes = {
  autoComplete: PropTypes.string,
  endCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  error: PropTypes.bool,
  focused: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.oneOf(["normal", "dense"]),
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  startCmp: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  type: PropTypes.oneOf(["text", "number", "password"]),
  value: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "standard", "outlined"]),
};

Input.defaultProps = {
  autoComplete: "off",
  endCmp: undefined,
  error: undefined,
  focused: undefined,
  fullWidth: true,
  helperText: undefined,
  id: undefined,
  label: undefined,
  margin: undefined,
  maxRows: undefined,
  multiline: undefined,
  name: undefined,
  onChange: undefined,
  readOnly: undefined,
  required: undefined,
  rows: undefined,
  startCmp: undefined,
  type: "text",
  value: undefined,
  variant: "outlined",
};
