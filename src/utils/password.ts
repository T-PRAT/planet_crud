import argon2 from "argon2";

export const hashPassword = async (password: string) => {
  try {
    const hash = await argon2.hash(password);
    return hash;
  } catch (error) {
    throw new Error("Error hashing password");
  }
};

export const verifyPassword = async (password: string, hash: string) => {
  try {
    const isValid = await argon2.verify(hash, password);
    return isValid;
  } catch (error) {
    throw new Error("Error verifying password");
  }
};
