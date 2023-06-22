import * as yup from "yup";

// eslint-disable-next-line import/prefer-default-export
export const upgradeSchema = yup.object().shape({
  upgradedIds: yup
    .array()
    .min(1, "You must pick at least 1 upgrade!")
    .required("You must pick at least 1 upgrade!"),
});
