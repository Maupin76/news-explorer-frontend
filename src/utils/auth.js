export const authorize = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "fake-jwt-token" });
    }, 500);
  });
};

export const checkToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "Douglas",
          email: "douglas@example.com",
          _id: "fake-user-id",
        },
      });
    }, 500);
  });
};
