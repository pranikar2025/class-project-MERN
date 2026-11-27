import z from "zod"
export const registerschema = z.object({
    name: z.string().min(3, " name must contain 3 letter"),
    email: z.string().email("enter the valid email"),
    password : z.string().min(8,"password should be minimum 8"),
    age : z.coerce.number().min(18,"age should be minimum 18")
})