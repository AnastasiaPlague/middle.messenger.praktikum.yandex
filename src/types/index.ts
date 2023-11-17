export type InputProps = Partial<HTMLInputElement> & {
  label?: string;
  optional?: boolean;
};

export type ValidatorType = (arg: string[]) => boolean;

export type Indexed<T = any> = {
  [key in string]: T;
};
