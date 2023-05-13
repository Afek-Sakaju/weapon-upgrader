import React from "react";
import PropTypes from "prop-types";

import { Button } from "./ButtonIcon.styled";

export default function ButtonIcon({
  variant,
  disabled,
  startIcon,
  endIcon,
  onClick,
  ...props
}) {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      {...props}
    />
  );
}

ButtonIcon.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  variant: "contained",
  disabled: false,
  startIcon: undefined,
  endIcon: undefined,
  onClick: undefined,
};
