import { FieldErrors, UseFormRegister } from "react-hook-form"
import { FormWrapper } from "./FormWrapper"
import { FormData } from "./type"


export function AccountForm({register,
  errors
  }:{
  register:UseFormRegister<FormData>,
  errors:FieldErrors<FormData>
  }) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        autoFocus
       type="email"
        {...register("email",{required:"Email is required"})}
      />
      <span>{errors.email?.message}</span>
      <label>Password</label>
      <input
        type="password"
        {...register("password",{required:"Password is required"})}
      />
      <span>{errors.password?.message}</span>
    </FormWrapper>
  )
}
