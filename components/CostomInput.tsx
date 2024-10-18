import { z } from "zod"
import {FormLabel, FormField, FormMessage, FormControl } from "./ui/form"
import { Input } from "./ui/input"
import { Control, Field, FieldPath } from "react-hook-form"
import { authFormSchema } from "@/lib/utils"


const formSchema = authFormSchema("sign-up");

interface CostomInputProps {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string
}

const CostomInput = ({ control, name, label, placeholder }: CostomInputProps) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div className="form-item">
        <FormLabel className="form-label">{label}</FormLabel>
        <div className="flex w-full flex-col">
          <FormControl>
            <Input
              placeholder={placeholder}
              className="input-class"
              {...field}
              type={name === "password" ? "password" : "text"}
            />
          </FormControl>
          <FormMessage className="form-message" />
        </div>
      </div>
    )}
  />
  )
}

export default CostomInput
