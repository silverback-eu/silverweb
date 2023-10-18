import React from "react";
import { FormProps } from ".";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Field } from "./types";

export function FormBuilder({ fields, onSubmit }: FormProps) {
  const formContext = useForm();
  const { handleSubmit } = formContext;
  return (
    <FormProvider {...formContext}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.entries(fields).map(renderFields)}
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}

function renderFields([name, fieldProps]: [string, Field]) {
  return <div>Unknown type of {fieldProps.type}</div>;
}
