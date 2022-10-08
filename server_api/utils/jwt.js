import jsonwebtoken from "jsonwebtoken";

export const generateAccessToken = (user) => {
  return jsonwebtoken.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "5m",
  });
};
export const generateRefreshToken = (user, jti) => {
  return jsonwebtoken.sign(
    {
      userId: user.id,
      jti,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "10h",
    }
  );
};
export const generateTokens = (user, jti) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user, jti);

  return {
    accessToken,
    refreshToken,
  };
};
