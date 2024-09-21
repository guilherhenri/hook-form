import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "./Form"
import { z } from "zod"

const createFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(3),
  confirmPassword: z.string().min(3),
})
export type CreateFormType = z.infer<typeof createFormSchema>

export function Create() {
  const form = useForm<CreateFormType>({
    resolver: zodResolver(createFormSchema)
  })

  return (
    <Form form={form} />
  )
}