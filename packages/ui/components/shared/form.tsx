"use client";

import type { Root } from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import type {
  HTMLAttributes,
  ComponentPropsWithoutRef,
  ElementRef,
} from "react";
import { useContext, useMemo, createContext, forwardRef, useId } from "react";
import type {
  ControllerProps,
  FieldError,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { cn } from "../../lib/utils";
import { Label } from "./label";

const Form = FormProvider;

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
}

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: ControllerProps<TFieldValues, TName>): JSX.Element {
  const name = useMemo(() => ({ name: props.name }), [props.name]);

  return (
    <FormFieldContext.Provider value={name}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}
interface FormItemContextValue {
  id: string;
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

interface UseFormFieldReturnType {
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  error?: FieldError | undefined;
  id: string;
  name: string;
  formItemId: string;
  formDescriptionId: string;
  formMessageId: string;
}

const useFormField = (): UseFormFieldReturnType => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- to get an expansion of why its crashed
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemProps = {
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    const idForUseMemo = useId();
    const id = useMemo(() => ({ id: idForUseMemo }), [idForUseMemo]);

    return (
      <FormItemContext.Provider value={id}>
        <div className={cn("space-y-2", className)} ref={ref} {...props} />
      </FormItemContext.Provider>
    );
  }
);
FormItem.displayName = "FormItem";

type FormLabelProps = {
  className?: string;
} & ComponentPropsWithoutRef<typeof Root>;

const FormLabel = forwardRef<ElementRef<typeof Root>, FormLabelProps>(
  ({ className, ...props }, ref) => {
    const { error, formItemId } = useFormField();

    return (
      <Label
        className={cn(error && "text-destructive", className)}
        htmlFor={formItemId}
        ref={ref}
        {...props}
      />
    );
  }
);
FormLabel.displayName = "FormLabel";

const FormControl = forwardRef<
  ElementRef<typeof Slot>,
  ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={Boolean(error)}
      id={formItemId}
      ref={ref}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

type FormDescriptionProps = {
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

const FormDescription = forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return (
      <p
        className={cn("text-[0.8rem] text-muted-foreground", className)}
        id={formDescriptionId}
        ref={ref}
        {...props}
      />
    );
  }
);
FormDescription.displayName = "FormDescription";

type FormMessageProps = {
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p
        className={cn("text-[0.8rem] font-medium text-destructive", className)}
        id={formMessageId}
        ref={ref}
        {...props}
      >
        {body}
      </p>
    );
  }
);
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
