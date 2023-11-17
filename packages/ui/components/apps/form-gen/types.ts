import type { ReactNode } from "react";
import type { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
import type { ZodTypeAny, z } from "zod";

interface FieldSchema {
  type:
    | "text"
    | "checkbox"
    | "combo"
    | "date"
    | "date-range"
    | "email"
    | "file"
    | "number"
    | "password"
    | "radio"
    | "textarea";
}

interface DefaultProps {
  label: string;
  placeholder?: string;
  description?: string;
  rules?: ZodTypeAny;
}

export type TextFieldProps = DefaultProps &
  FieldSchema & {
    type: "text";
    rules?: z.ZodString;
  };

export type Field = TextFieldProps;

interface MagicPage {
  name: string;
  header: string;
  description: ReactNode;
  fields: Record<string, Field>;
}

export type Fields = Record<string, Field> | MagicPage[];

export interface FormGeneratorProps {
  fields: Fields;
  onSubmit: SubmitHandler<FieldValues>;
}
