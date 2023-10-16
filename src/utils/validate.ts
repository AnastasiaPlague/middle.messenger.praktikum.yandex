import { VALIDATORS, VALIDATOR_ERRORS } from "const";

export const validate = (type: string, ...values: string[]): string => {
  if (!VALIDATORS[type]) {
    return "";
  }
  const matches = VALIDATORS[type](values);
  return matches ? "" : VALIDATOR_ERRORS[type];
};
