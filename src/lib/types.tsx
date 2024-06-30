import { z } from "zod";

export const signUpSchema = z.object({
  username : z.string().min(1, { message: "Username is required" }),
  email : z.string().min(1, { message: "Email is required" }).email("Invalid Email"),
  password : z.string().min(5, "Password must be minimum of 5 charecters"),
  cpassword : z.string().min(1, { message: "Confirm Password is required" })
}).refine(data => data.password === data.cpassword,
  {
    message : "Passwords must match",
    path : ["cpassword"],
  }
)

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const logInSchema = z.object({
  username : z.string().min(1, { message: "Username is required" }),
  password : z.string().min(5, "Password must be minimum of 5 charecters")
})

export type TLogInSchema = z.infer<typeof logInSchema>;

export type SignUpUserDataResponse = {
  id : string,
  username : string,
  email : string,
  password : string
}

export type LogInUserDataResponse = {
  id : string,
  username : string,
  email : string,
  password : string
}

export type SignUpServerResponse = {
  errors : null | {
    username? : string,
    email? : string,
    password? : string,
    cpassword? : string,
  },
  userData : null | {
    msg : string,
    user : SignUpUserDataResponse
  }
}

export type LogInServerResponse = {
  errors : null | {
    username? : string,
    password? : string,
  },
  userData : null | {
    msg : string,
    user : LogInUserDataResponse
  }
}

export type CookieData = {
  username : string
}