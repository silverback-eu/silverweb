import type { Control } from "react-hook-form";
import type { ZodRawShape } from "zod";
import { TextInput } from "../../inputs/smart/text-input";
import type { Field, Fields } from "./types";

export function renderFields(
  [name, fieldProps]: [string, Field],
  control: Control
): JSX.Element {
  switch (fieldProps.type) {
    case "text":
      return (
        <TextInput key={name} {...fieldProps} control={control} name={name} />
      );
    default:
      return <div>Unknown field type: {fieldProps.type}</div>;
  }
}

export function getSchema(fieldsObject: Fields): ZodRawShape {
  const Schema = {};

  if (Array.isArray(fieldsObject)) {
    fieldsObject.map((fields): true => {
      Object.entries(fields.fields).map(([name, field]): boolean => {
        if (!field.rules) return false;
        Object.assign(Schema, { [name]: field.rules });
        return true;
      });
      return true;
    });
  } else {
    Object.entries(fieldsObject).map(([name, field]): boolean => {
      if (!field.rules) return false;
      Object.assign(Schema, { [name]: field.rules });
      return true;
    });
  }

  return Schema;
}
