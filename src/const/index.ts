import { ValidatorType } from "types";

export const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const nameRegexp = /^[А-ЯЁA-Z][А-ЯЁа-яёA-z-]*$/; // буквы, дефис, обязательно с заглавной
export const loginRegexp = /^(?!^\d+$)[A-z-_\d]{3,20}$/; // не из цифр, можно латиница, дефис, подчеркивание

export const passwordRegexp = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/; // хотя бы одна заглавная буква или цифра

export const phoneRegexp = /^\+?[\d]{10,15}/; // может начинаться с плюса, цифры

export const VALIDATORS: { [key: string]: ValidatorType } = {
  email: ([value]) => emailRegExp.test(value),
  login: ([value]) => loginRegexp.test(value),
  first_name: ([value]) => nameRegexp.test(value),
  second_name: ([value]) => nameRegexp.test(value),
  phone: ([value]) => phoneRegexp.test(value),
  password: ([value]) => passwordRegexp.test(value),
  newPassword: ([value]) => passwordRegexp.test(value),
  message: ([value]) => !!value,
  title: ([value]) => !!value,
};

export const VALIDATOR_ERRORS: Record<string, string> = {
  email: "Неверный email",
  login: "Допустимы дефис, подчеркивание, латиница",
  first_name: "Укажите с заглавной буквы, от 3 до 20 символов",
  second_name: "Укажите с заглавной буквы, от 3 до 20 символов",
  phone: "Укажите верный формат без дефисов, от 10 до 15 символов",
  password: "Должен содержать заглавную букву или цифру, от 8 до 40 символов",
  newPassword:
    "Должен содержать заглавную букву или цифру, от 8 до 40 символов",
  title: "Введите название",
};

export enum Routes {
  Index = "/",
  Register = "/sign-up",
  Chats = "/chats",
  Profile = "/profile",
  ChangeProfile = "/change-profile",
  ChangePassword = "/change-password",
  Error404 = "/404",
  Error500 = "/500",
}
