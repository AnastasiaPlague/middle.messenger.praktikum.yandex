export type InputProps = Partial<HTMLInputElement> & {
  label: string;
};

export type ValidatorType = (arg: string[]) => boolean;
