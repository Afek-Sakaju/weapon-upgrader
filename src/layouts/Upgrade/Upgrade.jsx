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
} from "./Upgrade.styled";

const Upgrade = (props) => {
  const {
    values,
    name,
    description,
    image,
    basicPrice,
    upgradesList,
    upgradedIds,
    isSubmitting,
    handleSubmit,
  } = props;

  const [shouldRender, setShouldRender] = useState(true);

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
    if (values.totalPrice === 0) {
      setShouldRender(false);
      setTimeout(() => setShouldRender(true));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  return (
    <Container>
      <ItemCenterAlone>
        <Title variant="h3">
          Call of duty MW <br /> Weapon upgrade form:
        </Title>
      </ItemCenterAlone>
      <Item>
        <Input label="Weapon:" readOnly value={name} />
      </Item>
      <Item>
        <Image src={image ?? ""} />
      </Item>
      <ItemCenterAlone>
        <Input label="Description:" readOnly value={description} />
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
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  basicPrice: PropTypes.number,
  upgradesList: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, price: PropTypes.number })
  ),
};

Upgrade.defaultProps = {
  name: undefined,
  description: undefined,
  image: undefined,
  basicPrice: 0,
  upgradesList: undefined,
};
