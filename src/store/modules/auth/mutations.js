export const SET_AUTH_REQUEST = (state) => {
  state.status = "loading";
};

export const SET_AUTH_SUCCESS = (state, token) => {
  (state.status = "success"), (state.token = token);
};

export const SET_AUTH_FAILURE = (state) => {
  state.status = "error";
};
