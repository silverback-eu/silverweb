import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { ButtonHTMLAttributes, Fragment, forwardRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type ComboBoxProps =
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      status?: "success" | "error" | "default";
      items: { label: string; value: string }[];
      readOnly?: boolean;
      grouped?: false;
      selected?: string;
      onChange?: (value: string) => void;
      placeholder?: string;
      popoverClassName?: string;
    })
  | (ButtonHTMLAttributes<HTMLButtonElement> & {
      status?: "success" | "error" | "default";
      grouped: true;
      readOnly?: boolean;
      items: Record<string, { label: string; value: string }[]>;
      selected?: string;
      onChange?: (value: string) => void;
      placeholder?: string;
      popoverClassName?: string;
    });

const ComboBox = forwardRef<HTMLButtonElement, ComboBoxProps>((props, ref) => {
  const {
    className,
    status,
    items,
    grouped,
    selected,
    onChange,
    readOnly,
    placeholder,
    popoverClassName,
    ...rest
  } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selected);

  return (
    <Popover open={readOnly ? false : open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {readOnly ? (
          <div
            className={cn(
              "inline-flex items-center rounded-md text-sm font-medium transition-colors border border-input bg-transparent shadow-sm h-9 px-4 py-2 w-full justify-between",
              className,
            )}
          >
            {value ? (
              grouped === true ? (
                Object.entries(items)
                  .find(([, OptionList]) => OptionList.find((item) => item.value === value))?.[1]
                  .find((item) => item.value === value)?.label
              ) : (
                items.find((item) => item.value === value)?.label
              )
            ) : (
              <span className="opacity-50">{placeholder}</span>
            )}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </div>
        ) : (
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between",
              status === "success" && "border-lime-600 text-lime-600 hover:text-lime-600",
              status === "error" && "border-red-500 text-red-500 hover:text-red-500",
              className,
            )}
            {...rest}
          >
            {value ? (
              grouped === true ? (
                Object.entries(items)
                  .find(([, OptionList]) => OptionList.find((item) => item.value === value))?.[1]
                  .find((item) => item.value === value)?.label
              ) : (
                items.find((item) => item.value === value)?.label
              )
            ) : (
              <span className="opacity-50">{placeholder}</span>
            )}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className={cn("w-[200px] p-0", popoverClassName)}>
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          {grouped === true ? (
            <Fragment>
              {Object.entries(items).map(([key, OptionListGrouped]) => (
                <CommandGroup heading={key} key={key}>
                  {OptionListGrouped.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        if (onChange) onChange(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {item.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === item.value ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </Fragment>
          ) : (
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    if (onChange) onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
});

ComboBox.displayName = "ComboBox";

export default ComboBox;
