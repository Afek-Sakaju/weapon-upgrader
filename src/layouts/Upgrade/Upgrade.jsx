import React from "react";
import PropTypes from "prop-types";

import { ButtonIcon, Checkbox, Input } from "@base-components";
import {
  Container,
  Item,
  SmallItem,
  Title,
  Image,
  Stack,
} from "./Upgrade.styled";

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
      <Item>
        <Input label="Weapon:" readOnly value={name} />
      </Item>
      <Item>
        <Input label="Description:" readOnly value={description} />
      </Item>
      {upgrades
        ?.sort((upg1, upg2) => upg2?.price - upg1?.price)
        .map(({ _id, name, price }) => (
          <SmallItem key={_id}>
            <Checkbox label={`${name} (${price}$)`} />
          </SmallItem>
        ))}
      <Item>
        <ButtonIcon onClick={() => alert("You'v paid:" + basicPrice + "$")}>
          {`Upgrade $${basicPrice}`}
        </ButtonIcon>
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
