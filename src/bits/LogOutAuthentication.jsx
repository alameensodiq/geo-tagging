export const LogOutAuthentication = () => {
  sessionStorage.clear();
  window.location.pathname = "/corporate-login";
};

export const LogOutAuthenticationSuperAdmin = () => {
  sessionStorage.clear();
  window.location.pathname = "/super-login";
};
