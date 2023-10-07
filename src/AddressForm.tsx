import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { FormWrapper } from "./FormWrapper"
import { FormData } from "./type"

export function AddressForm({register,
  errors
  }:{
  register:UseFormRegister<FormData>,
  errors:FieldErrors<FormData>
  }) {
  return (
    <FormWrapper title="Address">
      <label>Street</label>
      <input
        autoFocus
        type="text"
        {...register("address",{required:"address  is required"})}
      />
      <span>{errors.address?.message}</span>
      <label>City</label>
      <input
        type="text"
        {...register("city",{required:"city  is required"})}
      />
      <span>{errors.city?.message}</span>
      <label>State</label>
      <input
        type="text"
        {...register("state",{required:"state is required"})}
      />
      <span>{errors.state?.message}</span>
      <label>Zip</label>
      <input
        type="text"
        {...register("zip",{required:"zip is required"})}
      />
      <span>{errors.zip?.message}</span>
    </FormWrapper>
  )
}
