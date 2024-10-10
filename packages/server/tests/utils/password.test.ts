import { hashPassword, verifyPassword } from "../../src/utils/password";

describe("password utility functions", () => {
  const password = "secretPassword123";

  describe("hashPassword", () => {
    it("should hash a password successfully", async () => {
      const hash = await hashPassword(password);
      expect(hash).toBeDefined();
      expect(hash).not.toBe(password);
    });
  });

  describe("verifyPassword", () => {
    it("should verify a password successfully", async () => {
      const hash = await hashPassword(password);
      const isValid = await verifyPassword(password, hash);
      expect(isValid).toBe(true);
    });

    it("should fail to verify an incorrect password", async () => {
      const hash = await hashPassword(password);
      const isValid = await verifyPassword("wrongPassword", hash);
      expect(isValid).toBe(false);
    });
  });
});
