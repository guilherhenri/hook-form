import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "./Form"

const updateFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(3).optional(),
  confirmPassword: z.string().min(3).optional(),
})
export type UpdateFormType = z.infer<typeof updateFormSchema>

export function Update() {
  const form = useForm<UpdateFormType>({
    resolver: zodResolver(updateFormSchema)
  })

  return (
    <Form form={form} />
  )
}