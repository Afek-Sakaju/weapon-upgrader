import * as yup from "yup";

// eslint-disable-next-line import/prefer-default-export
export const upgradeFormSchema = yup.object().shape({
  totalPrice: yup.number().required(),
  upgradedIds: yup
    .array()
    .min(1, "Must have at least one upgrade to submit")
    .required(),
});
