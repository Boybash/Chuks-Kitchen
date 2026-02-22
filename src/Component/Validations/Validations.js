import * as Yup from "yup";

// Reusable regex patterns
const phoneRegExp = /^(?:\+234|0)[789]\d{9}$/; // Nigerian phone format

export const orderSummarySchema = Yup.object().shape({
  // Promo codes are usually uppercase alphanumeric
  promoCode: Yup.string()
    .uppercase()
    .matches(/^[A-Z0-9]+$/, "Promo code must be letters and numbers only")
    .min(3, "Too short")
    .max(12, "Too long"),

  // Special instructions should have a cap to protect your database
  instructionForRestaurant: Yup.string()
    .max(300, "Instructions cannot exceed 300 characters")
    .nullable(), // Allows it to be empty
});

export const deliverySchema = Yup.object().shape({
  address: Yup.string()
    .min(10, "Please provide a more detailed address")
    .required("Contact address is required"),

  deliveryTime: Yup.string().required(
    "Please specify a preferred delivery time",
  ),

  deliveryInstructions: Yup.string()
    .max(200, "Keep instructions under 200 characters")
    .nullable(),

  // Adding a phone field because riders need it!
  phoneNumber: Yup.string()
    .matches(/^(?:\+234|0)[789]\d{9}$/, "Enter a valid Nigerian phone number")
    .required("Phone number is required"),
});

export const paymentSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, "Must be 16 digits")
    .required("Required"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Use MM/YY")
    .required("Required"),
  cvv: Yup.string().length(3, "Must be 3 digits").required("Required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password too short").required("Required"),
});

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^(?:\+234|0)[789]\d{9}$/, "Enter a valid Nigerian phone number")
    .required("Phone number is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),

  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions",
  ),
});

export const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name too short").required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Invalid Nigerian phone number"),
  message: Yup.string().min(10, "Tell us a bit more").required("Required"),
});
