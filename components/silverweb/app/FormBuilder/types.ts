import { SubmitHandler, FieldValues } from "react-hook-form";

type FieldSchema = {
  type: "text" | "number"
};

type DefaultProps = {
  label : string;
  placeholder ?: string;
};

export type TextFieldProps = FieldSchema & DefaultProps & {
  type: "text"
};

export type Field = TextFieldProps;

type Fields = Record<string, Field>;

export interface FormProps {
  fields: Fields,
  onSubmit: SubmitHandler<FieldValues>
}
