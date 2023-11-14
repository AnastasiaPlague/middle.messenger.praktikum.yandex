import { SignUpData, User } from "./AuthApi";
import { API } from "./api";

export type UserProfile = Omit<User, "id" | "avatar">;

export type UserPassword = {
  oldPassword: string;
  newPassword: string;
};

export class UserAPI extends API {
  constructor() {
    super("/user");
  }

  updateProfile(data: UserProfile): Promise<SignUpData> {
    return this.http.put("/profile", { data });
  }

  updatePassword(data: UserPassword): Promise<void> {
    return this.http.put("/password", { data });
  }

  updateAvatar(data: FormData): Promise<User> {
    return this.http.put("/profile/avatar", { data });
  }

  searchUser(data: { login: string }): Promise<User[]> {
    return this.http.post("/search", { data });
  }
}
