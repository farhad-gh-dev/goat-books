export const getToken = () => {
  return localStorage.getItem("user_token");
};
export const clearToken = () => {
  localStorage.removeItem(`user_token`);
};

export const setToken = (token: string) => {
  localStorage.setItem("user_token", token);
};
