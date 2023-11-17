import type { Control } from "react-hook-form";
import type { TextFieldProps } from "../../apps/form-gen/types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "../../shared/form";
import type { TextInputProps } from "../default/text-input";
import { TextInput as DTextInput } from "../default/text-input";

export function TextInput(
  props: TextFieldProps & { name: string; control: Control }
): JSX.Element {
  const { control, name, label, placeholder, description } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <HandledErrorField placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
          <FormDescription>{description}</FormDescription>
        </FormItem>
      )}
    />
  );
}

function HandledErrorField(props: TextInputProps): JSX.Element {
  const { error } = useFormField();
  return <DTextInput {...props} status={error ? "error" : "default"} />;
}
