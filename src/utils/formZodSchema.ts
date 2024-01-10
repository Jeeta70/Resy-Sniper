import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Must be valid email").min(2, { message: "Email must be at least 2 characters." }),
  password: z.string().min(2, { message: "Email must be at least 2 characters." }),
});

export const signupFormSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required!" }),
    lastName: z.string().min(1, { message: "Last name is required!" }),
    email: z.string().email("Must be valid email"),
    countryCode: z.string().min(1, { message: "Country Code is required" }),
    phoneNumber: z.string().length(10, "Phone number must have exactly 10 digits.").regex(/^[0-9]+/),
    password: z.string().min(6),
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