import { login, signup } from "./auth.services.js";

export const signupController = async (req, res) => {
	try {
		const user = await signup(req.body);
		return res.status(201).json({ message: "Signup successful", user });
	} catch (error) {
		return res.status(error.message === "Email is already registered" ? 409 : 400).json({
			message: error.message,
		});
	}
};

export const loginController = async (req, res) => {
	try {
		const user = await login(req.body);
		return res.status(200).json({ message: "Login successful", user });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};
