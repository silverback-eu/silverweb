import type { ButtonHTMLAttributes } from "react";
import { Fragment, forwardRef, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../shared";
import { uicn } from "../../lib";

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

  function getLabel(): string | undefined | JSX.Element {
    if (typeof value === "string") {
      if (grouped === true) {
        return Object.entries(items)
          .find(([, OptionList]) =>
            OptionList.find((item) => item.value === value),
          )?.[1]
          .find((item) => item.value === value)?.label;
      }
      return items.find((item) => item.value === value)?.label;
    }
    return <span className="ui-opacity-50">{placeholder}</span>;
  }

  return (
    <Popover onOpenChange={setOpen} open={readOnly ? false : open}>
      <PopoverTrigger asChild>
        {readOnly ? (
          <div
            className={uicn(
              "ui-inline-flex ui-h-9 ui-w-full ui-items-center ui-justify-between ui-rounded-md ui-border ui-border-input ui-bg-transparent ui-px-4 ui-py-2 ui-text-sm ui-font-medium ui-shadow-sm ui-transition-colors",
              className,
            )}
          >
            {getLabel()}
            <ChevronsUpDown className="ui-ml-2 ui-h-4 ui-w-4 ui-shrink-0 ui-opacity-50" />
          </div>
        ) : (
          <Button
            aria-expanded={open}
            className={uicn(
              "ui-w-full ui-justify-between",
              status === "success" &&
                "ui-border-lime-600 ui-text-lime-600 hover:ui-text-lime-600",
              status === "error" &&
                "ui-border-red-500 ui-text-red-500 hover:ui-text-red-500",
              className,
            )}
            ref={ref}
            role="combobox"
            variant="outline"
            {...rest}
          >
            {getLabel()}
            <ChevronsUpDown className="ui-ml-2 ui-h-4 ui-w-4 ui-shrink-0 ui-opacity-50" />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className={uicn("ui-w-[200px] ui-p-0", popoverClassName)}>
        <Command>
          <CommandInput className="ui-h-9" placeholder={placeholder} />
          <CommandEmpty>No framework found.</CommandEmpty>
          {grouped === true ? (
            <Fragment>
              {Object.entries(items).map(([key, OptionListGrouped]) => (
                <CommandGroup heading={key} key={key}>
                  {OptionListGrouped.map((item) => (
                    <CommandItem
                      key={item.value}
                      onSelect={(currentValue: string) => {
                        setValue(currentValue === value ? "" : currentValue);
                        if (onChange)
                          onChange(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                      value={item.value}
                    >
                      {item.label}
                      <Check
                        className={uicn(
                          "ui-ml-auto ui-h-4 ui-w-4",
                          value === item.value
                            ? "ui-opacity-100"
                            : "ui-opacity-0",
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
                  onSelect={(currentValue: string) => {
                    setValue(currentValue === value ? "" : currentValue);
                    if (onChange)
                      onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  value={item.value}
                >
                  {item.label}
                  <Check
                    className={uicn(
                      "ui-ml-auto ui-h-4 ui-w-4",
                      value === item.value ? "ui-opacity-100" : "ui-opacity-0",
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

export { ComboBox };
