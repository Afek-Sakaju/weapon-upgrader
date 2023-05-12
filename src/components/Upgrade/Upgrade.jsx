import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { ButtonIcon, Checkbox, Input } from "@base-components";
import { Container, Item, Title } from "./Upgrade.styled";

export default function Upgrade({
  name,
  description,
  image,
  basicPrice,
  upgrades,
}) {
  return (
    <Container>
      <Item>
        <Title>
          Call of duty MW <br /> Weapon upgrade form:
        </Title>
      </Item>

      {/* label: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium"]),
    color: PropTypes.string,
    muiColor: PropTypes.string,
    checked: PropTypes.bool,
    icon: PropTypes.node,
    checkedIcon: PropTypes.node,
    defaultChecked: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    labelPlacement: PropTypes.oneOf(["top", "start", "bottom", "end"]),
    helperText: PropTypes.string,
    fontSize: PropTypes.string, */}
      {upgrades.map((upgrade) => {
        const { name, price } = upgrade;
        return (
          <Item key={uuid()} xs={6}>
            <Checkbox label={`${name} ($${price})`}></Checkbox>
          </Item>
        );
      })}

      <Item>
        <Input label="Weapon:" readOnly value={name} />
      </Item>
      <Item>
        <Input label="Description:" readOnly value={description} />
      </Item>
      {/* variant: PropTypes.oneOf(["contained", "outlined", "text"]),
    disabled: PropTypes.bool,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    onClick: PropTypes.func, */}
      <Item>
        <ButtonIcon endIcon={<span>{basicPrice}$</span>}>Submit</ButtonIcon>
      </Item>
    </Container>
  );
}

Upgrade.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  basicPrice: PropTypes.number,
  upgrades: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, price: PropTypes.number })
  ),
};

Upgrade.defaultProps = {
  name: undefined,
  description: undefined,
  image: undefined,
  basicPrice: 0,
  upgrades: undefined,
};
