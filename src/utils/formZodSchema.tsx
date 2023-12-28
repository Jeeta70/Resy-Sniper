import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Must be valid email").min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
});

export const signupFormSchema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string(),
    email: z.string().email("Must be valid email"),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], 
  });

  export const createAccountCardSchema = z.object({
    email: z.string().email("Must be valid email !").min(1),
    password: z.string().min(2),
  });