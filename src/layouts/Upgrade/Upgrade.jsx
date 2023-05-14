/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withFormik, FieldArray } from "formik";

import { ButtonIcon, Checkbox, Input, PriceLabel } from "@base-components";
import { getTotalPrice } from "@utils";
import {
  Container,
  Item,
  Title,
  Image,
  ItemCenterAlone,
} from "./Upgrade.styled";

const Upgrade = (props) => {
  const {
    values,
    name,
    description,
    image,
    basicPrice,
    upgrades,
    upgradesBoughtIds,
    isSubmitting,
    handleSubmit,
  } = props;

  useEffect(() => {
    values.totalPrice = getTotalPrice(
      basicPrice,
      upgrades?.filter((upg) => values.upgradesBoughtIds.includes(upg._id))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.upgradesBoughtIds.length]);

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
        <Image src={image ?? ""} />
      </Item>
      <ItemCenterAlone>
        <Input label="Description:" readOnly value={description} />
      </ItemCenterAlone>
      <FieldArray name="upgradesBoughtIds">
        {({ remove, push }) => {
          return upgrades
            ?.sort((e1, e2) => e1.order - e2.order)
            .map(({ _id, name: upgradeName, price }) => (
              <Item key={_id} xs={3}>
                <Checkbox
                  checked={upgradesBoughtIds?.includes(_id)}
                  label={`${upgradeName} ($${price})`}
                  onChange={() => {
                    const upgradeIndex = values.upgradesBoughtIds?.indexOf(_id);
                    if (upgradeIndex >= 0) remove(upgradeIndex);
                    else push(_id);
                  }}
                />
              </Item>
            ));
        }}
      </FieldArray>
      <ItemCenterAlone mt={2}>
        <ButtonIcon
          disabled={isSubmitting}
          onClick={() => {
            handleSubmit();
          }}
        >
          <PriceLabel label="Upgrade" price={values.totalPrice} />
        </ButtonIcon>
      </ItemCenterAlone>
    </Container>
  );
};

export default withFormik({
  validateOnMount: false,
  validateOnChange: false,

  mapPropsToValues: (props) => ({
    totalPrice: props.price,
    upgradesBoughtIds: [],
  }),

  validate: (values) => {
    const errors = {};

    if (!values.upgradesBoughtIds.length) {
      errors.upgradesBoughtIds = "At least 1 upgrade required";
      alert(errors.upgradesBoughtIds);
    }

    return errors;
  },

  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    alert(`Congrats for the upgrades, it will cost: $${values.totalPrice}`);
    setSubmitting(false);
    resetForm();
  },

  displayName: "WeaponUpgradeForm",
})(Upgrade);

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
