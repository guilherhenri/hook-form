import type { UseFormReturn, FieldValues } from "react-hook-form";
import type { CreateFormType } from "./Create";
import type { UpdateFormType } from "./Update";

interface FormProps<TFormValues extends FieldValues> {
  form: UseFormReturn<TFormValues>
}

export function Form({ form: { register } }: FormProps<CreateFormType | UpdateFormType>) {
  return (
    <form>
      <div>
        <label>Nome</label>
        <input {...register('name')} />
      </div>
    </form>
  )
}