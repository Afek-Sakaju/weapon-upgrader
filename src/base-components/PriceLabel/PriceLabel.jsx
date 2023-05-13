import React from "react";
import PropTypes from "prop-types";

import {
  Typography,
  MoneyIcon,
  Container,
  PriceBox,
} from "./PriceLabel.styled";

export default function PriceLabel({
  label,
  price,
  iconStyle,
  priceBoxStyle,
  ContainerStyle,
  ...props
}) {
  return (
    <Container sx={ContainerStyle}>
      <Typography {...props}>{label}</Typography>
      <PriceBox sx={priceBoxStyle}>
        <Typography {...props}>{price}</Typography>
        <MoneyIcon sx={iconStyle} />
      </PriceBox>
    </Container>
  );
}

PriceLabel.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number,
  iconStyle: PropTypes.object,
  priceBoxStyle: PropTypes.object,
  ContainerStyle: PropTypes.object,
};

PriceLabel.defaultProps = {
  label: "",
  price: 0,
  iconStyle: {},
  priceBoxStyle: {},
  ContainerStyle: {},
};
