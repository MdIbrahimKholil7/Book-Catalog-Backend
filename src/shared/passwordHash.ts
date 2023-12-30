import * as bcrypt from "bcrypt";

// Generate a salt and hash the password
async function hashPassword(password: string): Promise<string> {
  const saltRounds: number = 10;

  try {
    const salt: string = await bcrypt.genSalt(saltRounds);
    const hash: string = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error("Error hashing password");
  }
}

// Compare the provided password with the hashed password
async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  try {
    const match: boolean = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
}

export { hashPassword, comparePassword };
