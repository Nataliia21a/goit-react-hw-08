export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectError = (state) => state.auth.error;

export const selectLoading = (state) => state.auth.loading;

export const selectRefreshing = (state) => state.auth.isRefreshing;
