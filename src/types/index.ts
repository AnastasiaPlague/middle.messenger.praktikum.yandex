export type InputProps = Partial<HTMLInputElement> & {
  label?: string;
  optional?: boolean;
};

export type ValidatorType = (arg: string[]) => boolean;
