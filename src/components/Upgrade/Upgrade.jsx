import React from "react";
import PropTypes from "prop-types";

import { ButtonIcon, Checkbox, Input } from "@base-components";
import { Grid } from "./Upgrade.styled";

export default Upgrade = ({ name, description, image, basicPrice, extras }) => {
  return (
    <Grid>
      
    </Grid>
  );
};

Upgrade.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  basicPrice: PropTypes.string,
  upgrades: PropTypes.string,
};

Upgrade.defaultProps = {};
