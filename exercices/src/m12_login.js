import bcrypt from "bcrypt";

const loginUser = async (password, hash) => {
  const matchPass = await bcrypt.compare(password, hash);

  if (!matchPass) return console.log("Login incorrect !");

  return console.log("Login correct!");
};

loginUser(
  "123",
  "$2b$10$SXZL.tgAhZkVuVVDNYDf0eRNVOsUhO.LgmiE01DUvWHPsh5DLcN4a",
);
loginUser(
  "123456",
  "$2b$10$SXZL.tgAhZkVuVVDNYDf0eRNVOsUhO.LgmiE01DUvWHPsh5DLcN4a",
);
