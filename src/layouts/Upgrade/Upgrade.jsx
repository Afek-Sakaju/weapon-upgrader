/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "./Upgrade.styled";

const Upgrade = (props) => {
  const {
    basicPrice,
    description,
    handleSubmit,
    image,
    isSubmitting,
    name,
    onWeaponChange,
    upgradedIds,
    upgradesList,
    values,
    weaponsList,
  } = props;

  const [shouldRender, setShouldRender] = useState(true);

  const reRenderHandler = () => {
    setShouldRender(false);
    setTimeout(() => setShouldRender(true));
  };

  values.totalPrice = useMemo(
    () =>
      getTotalPrice(
        basicPrice,
        upgradesList?.filter((upg) => values.upgradedIds.includes(upg._id))
      ),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values.upgradedIds.length]
  );

  useEffect(() => {
    if (values.totalPrice === 0) reRenderHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  useEffect(() => {
    values.upgradedIds = [];
    reRenderHandler();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <Container>
      <ItemCenterAlone>
        <Title variant="h3">
          Call of duty MW <br /> Weapon upgrade form:
        </Title>
      </ItemCenterAlone>
      <Item>
        <FormControl fullWidth variant="standard">
          <InputLabel>Weapon:</InputLabel>
          <Select value={name} onChange={(e) => onWeaponChange(e.target.value)}>
            <MenuItem value={name}>{name}</MenuItem>
            {weaponsList
              ?.filter((w) => w !== name)
              ?.map((weaponName) => (
                <MenuItem key={weaponName} value={weaponName}>
                  {weaponName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Item>
      <Item>
        <Image src={image ?? ""} />
      </Item>
      <ItemCenterAlone>
        <Input
          label="Description:"
          readOnly
          value={description}
          variant="standard"
        />
      </ItemCenterAlone>
      <FieldArray name="upgradedIds">
        {({ remove, push }) => {
          return upgradesList
            ?.sort((u1, u2) => u2.price - u1.price)
            .map(({ _id, name: upgradeName, price }) => (
              <Item key={_id} xs={3}>
                {shouldRender ? (
                  <Checkbox
                    checked={upgradedIds?.includes(_id)}
                    label={`${upgradeName} ($${price})`}
                    onChange={() => {
                      const upgradeIndex = values.upgradedIds?.indexOf(_id);
                      if (upgradeIndex >= 0) remove(upgradeIndex);
                      else push(_id);
                    }}
                  />
                ) : null}
              </Item>
            ));
        }}
      </FieldArray>
      <ItemCenterAlone mt={2}>
        {shouldRender ? (
          <ButtonIcon disabled={isSubmitting} onClick={() => handleSubmit()}>
            <PriceLabel label="Upgrade" price={values.totalPrice} />
          </ButtonIcon>
        ) : null}
      </ItemCenterAlone>
    </Container>
  );
};

export default withFormik({
  validateOnMount: false,
  validateOnChange: false,
  enableReinitialize: true,

  mapPropsToValues: (props) => ({
    totalPrice: props.basicPrice,
    upgradedIds: [],
  }),

  validate: (values) => {
    const errors = {};

    if (!values.upgradedIds.length) {
      errors.upgradedIds = "No upgrade selected, can't proceed !";
      alert(errors.upgradedIds);
    }

    return errors;
  },

  handleSubmit: async (values, { setSubmitting, resetForm }) => {
    alert(`Weapon upgraded successfully, it will cost $${values.totalPrice}`);
    values.upgradedIds = [];
    setSubmitting(false);
    resetForm();
  },

  displayName: "WeaponUpgradeForm",
})(Upgrade);

Upgrade.propTypes = {
  basicPrice: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  onWeaponChange: PropTypes.func,
  upgradesList: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, price: PropTypes.number })
  ),
  weaponsList: PropTypes.arrayOf(PropTypes.string),
};

Upgrade.defaultProps = {
  basicPrice: 0,
  description: undefined,
  image: undefined,
  name: undefined,
  onWeaponChange: undefined,
  upgradesList: undefined,
  weaponsList: undefined,
};
