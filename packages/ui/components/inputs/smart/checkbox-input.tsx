import type { Control } from "react-hook-form";
import { Fragment } from "react";
import type { CheckboxFieldProps } from "../../apps/form-gen/types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "../../shared/form";
import type { CheckboxInputProps } from "../default/checkbox-input";
import { CheckboxInput as DCheckboxInput } from "../default/checkbox-input";

export function CheckboxInput(
  props: CheckboxFieldProps & { name: string; control: Control }
): JSX.Element {
  const { control, name, label, description, items, variant } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          {items.map((item) => (
            <FormField
              control={control}
              key={item.value}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    className="flex flex-row items-start space-x-3 space-y-0"
                    key={item.value}
                  >
                    {variant === "card" ? (
                      <FormControl>
                        <HandledErrorField
                          variant="big"
                          {...item}
                          checked={(
                            field.value as string[] | undefined
                          )?.includes(item.value)}
                          onCheckedChange={(checked) => {
                            checked
                              ? field.onChange([...field.value, item.value])
                              : field.onChange(
                                  (field.value as string[] | undefined)?.filter(
                                    (value) => value !== item.value
                                  )
                                );
                          }}
                        />
                      </FormControl>
                    ) : (
                      <Fragment>
                        <FormControl>
                          <HandledErrorField
                            variant="default"
                            {...item}
                            checked={(
                              field.value as string[] | undefined
                            )?.includes(item.value)}
                            onCheckedChange={(checked) => {
                              checked
                                ? field.onChange([...field.value, item.value])
                                : field.onChange(
                                    (
                                      field.value as string[] | undefined
                                    )?.filter((value) => value !== item.value)
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {(item as { value: string; label: string }).label}
                        </FormLabel>
                      </Fragment>
                    )}
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function HandledErrorField(props: CheckboxInputProps): JSX.Element {
  const { error } = useFormField();
  return (
    <DCheckboxInput
      {...props}
      className={
        error
          ? "border-red-500 data-[state=checked]:bg-red-500 [&_>_div_>button]:border-red-500 [&_>_div_>button[data-state=checked]]:!bg-red-500"
          : "default"
      }
    />
  );
}
