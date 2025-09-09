import bcrypt from "bcryptjs";
import { User } from "../models/user.model";
import { signJwt } from "../utils/jwt";

export const authService = {
    async register(data: { name: string; email: string; password: string }) {
        const existing = await User.findOne({ email: data.email });
        if (existing) throw new Error("Email already registered");

        const hashed = await bcrypt.hash(data.password, 10);
        const user = await User.create({ ...data, password: hashed });
        const token = signJwt({ id: user._id, email: user.email });

        return { user, token };
    },

    async login(email: string, password: string) {
        const user = await User.findOne({ email });
        if (!user) throw new Error("Invalid credentials");

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) throw new Error("Invalid credentials");

        const token = signJwt({ id: user._id, email: user.email });
        return { user, token };
    },
};
