export const storage = {
  getAuthStatus: () => {
    return JSON.parse(window.localStorage.getItem(`user_token`) || "");
  },
  setAuthStatus: (value: boolean) => {
    window.localStorage.setItem(`user_token`, JSON.stringify(value));
  },
  clearAuthStatus: () => {
    window.localStorage.removeItem(`user_token`);
  },
};
