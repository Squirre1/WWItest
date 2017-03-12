export const AuthSelector = state => {
  const { auth } = state.status;

  return {
    auth,
  };
};
