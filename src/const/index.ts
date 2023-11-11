import { ValidatorType } from "types";

export const USER_MOCK_DATA = {
  avatar: "/kesha.jpg",
  email: "toad@mushroom.com",
  login: "coolesttoad",
  first_name: "Иннокентий",
  second_name: "Константинопольский",
  display_name: "Кеша",
  phone: "+79067991209",
};

export const CHAT_MOCK_DATA = [
  {
    user: {
      name: "Michael Scott",
      avatar: "/michael_scott.jpg",
    },
    message: {
      content: "I am running away from my responsibilities and it feels good.",
      timestamp: "12:01",
    },
    unreadMessages: 100,
  },
  {
    user: {
      name: "Dwight Shrute",
      avatar: "/dwight_shrute.jpg",
    },
    message: {
      content:
        "Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.",
      timestamp: "18:23",
    },
    unreadMessages: 0,
  },
  {
    user: {
      name: "Stanley Hudson",
      avatar: "/stanley_hudson.jpg",
    },
    message: {
      content: "If I don't have some cake soon, I might die.",
      timestamp: "20 апреля 2000",
    },
    unreadMessages: 1,
  },
];

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
