import React from "react";
import PropTypes from "prop-types";
import MoneyIcon from "@mui/icons-material/MonetizationOn";

import { ButtonIcon, Checkbox, Input, PriceLabel } from "@base-components";
import {
  Container,
  Item,
  Title,
  Image,
  ItemCenterAlone,
  ButtonPriceLabel,
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
      <ItemCenterAlone>
        <Title variant="h3">
          Call of duty MW <br /> Weapon upgrade form:
        </Title>
      </ItemCenterAlone>
      <Item xs={6}>
        <Input label="Weapon:" readOnly value={name} />
      </Item>
      <Item xs={6}>
        <Image label="Weapon:" readOnly value={name} />
      </Item>
      <ItemCenterAlone>
        <Input label="Description:" readOnly value={description} />
      </ItemCenterAlone>
      {upgrades
        ?.sort((upg1, upg2) => upg2?.price - upg1?.price)
        .map(({ _id, name, price }) => (
          <Item key={_id} xs={3}>
            <Checkbox label={`${name} ($${price})`} />
          </Item>
        ))}
      <ItemCenterAlone>
        <ButtonIcon onClick={() => alert("You'v paid:" + basicPrice + "$")}>
          <PriceLabel label="Upgrade" price={basicPrice} />
        </ButtonIcon>
      </ItemCenterAlone>
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
