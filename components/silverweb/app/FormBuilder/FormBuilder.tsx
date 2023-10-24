import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Field, FormProps } from "./types";

import { Button } from "@/components/ui/button";

function renderFields([, fieldProps]: [string, Field]) {
  return (
    <div>
      Unknown type of
      {fieldProps.type}
    </div>
  );
}

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
