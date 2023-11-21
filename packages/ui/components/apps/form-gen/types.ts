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

export type CheckboxFieldProps =
  | (DefaultProps &
      FieldSchema & {
        type: "checkbox";
        variant?: "checkbox";
        items: { label: string; value: string }[];
        rules?: z.ZodArray<z.ZodString>;
        placeholder?: undefined;
      })
  | (DefaultProps &
      FieldSchema & {
        type: "checkbox";
        variant?: "card";
        items: {
          cardLabel: string;
          cardDescription: string;
          icon: JSX.Element;
          value: string;
        }[];
        rules?: z.ZodArray<z.ZodString>;
        placeholder?: undefined;
      });

export type ComboFieldProps =
  | (DefaultProps &
      FieldSchema & {
        type: "combo";
        items: { label: string; value: string }[];
        rules?: z.ZodString;
      } & {
        items: Record<string, { label: string; value: string }[]>;
        grouped: true;
      })
  | (DefaultProps &
      FieldSchema & {
        type: "combo";
        items: { label: string; value: string }[];
        rules?: z.ZodString;
      } & {
        items: { label: string; value: string }[];
        grouped?: false;
      });

export type DateFieldProps = DefaultProps &
  FieldSchema & {
    type: "date";
    rules?: z.ZodDate;
  };

export type DateRangeFieldProps = DefaultProps &
  FieldSchema & {
    type: "date-range";
    rules?: z.ZodObject<{ from: z.ZodDate; to: z.ZodDate }>;
  };

export type EmailFieldProps = DefaultProps &
  FieldSchema & {
    type: "email";
    rules?: z.ZodString;
  };

export type NumberFieldProps = DefaultProps &
  FieldSchema & {
    type: "number";
    rules?: z.ZodNumber;
  };

export type PasswordFieldProps = DefaultProps &
  FieldSchema & {
    type: "password";
    rules?: z.ZodString;
  };

export type RadioFieldProps =
  | (DefaultProps &
      FieldSchema & {
        type: "radio";
        variant?: "radio";
        items: { label: string; value: string }[];
        rules?: z.ZodArray<z.ZodString>;
      })
  | (DefaultProps &
      FieldSchema & {
        type: "radio";
        variant?: "card";
        items: {
          cardLabel: string;
          cardDescription: string;
          icon: JSX.Element;
          value: string;
        }[];
        rules?: z.ZodString;
      });

export type TextAreaFieldProps = DefaultProps &
  FieldSchema & {
    type: "textarea";
    rules?: z.ZodString;
  };

export type Field =
  | TextFieldProps
  | CheckboxFieldProps
  | ComboFieldProps
  | DateFieldProps
  | DateRangeFieldProps
  | EmailFieldProps
  | NumberFieldProps
  | PasswordFieldProps
  | RadioFieldProps
  | TextAreaFieldProps;

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
