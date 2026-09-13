import { hash } from "bcrypt"

export const signup = async (req, res) => {
    let { firstname, lastname, DOB, gender, password, confirmPassword } = req.body
    const hashed = hash(password, 12)
    
}