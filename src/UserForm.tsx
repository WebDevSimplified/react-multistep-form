import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { FormWrapper } from "./FormWrapper"
import { FormData } from "./type"

export function UserForm(
  {register,
  errors
  }:{
  register:UseFormRegister<FormData>,
  errors:FieldErrors<FormData>
  }
) {
  return (
    <FormWrapper title="User Details">
      <label>First Namne </label>
      <input
        autoFocus
        type="text"
        {...register("firstName",{required:"First Name is required"})}
        
      />
      <span>{errors.firstName?.message}</span>
      <label>Last Name</label>
      <input
        type="text"
        {...register("lastName",{required:"Last Name is required"})}
      />
      <span>{errors.lastName?.message}</span>
      <label>Age</label>
      <input
        min={1}
        type="number"
        {...register("age",{required:"age is required"})}
      />
      <span>{errors.age?.message}</span>
    </FormWrapper>
  )
}
