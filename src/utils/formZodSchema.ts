import * as z from "zod";

const passwordValidation = z.string()
  .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
  .regex(new RegExp(".*[a-z].*"), "One lowercase character")
  .regex(new RegExp(".*\\d.*"), "One number")
  .regex(
    new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
    "One special character"
  )
  .min(8, "Must be at least 8 characters in length")

export const loginFormSchema = z.object({
  email: z
    .string()
    .email("Must be valid email")
    .min(2, { message: "Email must be at least 2 characters." }),
  password: z.string()
  // passwordValidation
});

export const signupFormSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required!" }),
    lastName: z.string().min(1, { message: "Last name is required!" }),
    email: z.string().email("Must be valid email"),
    countryCode: z.string().min(1, { message: "Country Code is required" }),
    phoneNumber: z
      .string()
      .length(10, "Phone number must have exactly 10 digits.")
      .regex(/^[0-9]+/),
    password: passwordValidation,
    confirmPassword: z.string(),
    termAndConditions: z.literal(false, { errorMap: () => ({ message: "You must accept Terms and conditions" }) })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const connectResyAccountSchema = z.object({
  email: z.string().email("Must be valid email !").min(1),
  password: z.string().min(2),
});

export const connectOpenTableAccountSchema = z.object({
  countryCode: z.string().min(1, { message: "Country Code is required" }),
  phoneNumber: z
    .string()
    .length(10, "Phone number must have exactly 10 digits.")
    .regex(/^[0-9]+/),
});

export const enterCodeSechema = z.object({
  code: z.string()
})

export const updateProfileSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  email: z.string().email("Must be valid email"),
  countryCode: z.string().min(1, { message: "Country Code is required" }),
  phoneNumber: z
    .string()
    .length(10, "Phone number must have exactly 10 digits.")
    .regex(/^[0-9]+/),
});


export const resetPasswordSchema = z.object({
  password: passwordValidation,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});