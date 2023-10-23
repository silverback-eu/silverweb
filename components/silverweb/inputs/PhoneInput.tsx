"use client";

import { Input } from "@/components/ui/input";
import { phonePrefix } from "@/lib/phone-prefix.json";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { Fragment, forwardRef, useRef, useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
  onInputChange?: (value: string) => void;
  popoverClassName?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (props, ref) => {
    const {
      className,
      status,
      readOnly,
      disabled,
      onChange,
      onInputChange,
      onFocus,
      onBlur,
      value,
      prefix,
      popoverClassName,
      ...rest
    } = props;
    const suggestions = ["se", "ie", "de", "dk", "no", "ro", "pl"];
    const [inputValue, setInputValue] = useState("");
    const ContainerRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = React.useState(false);

    const selectedPrefix = phonePrefix
      .sort((a, b) => b.prefix.localeCompare(a.prefix))
      .find((prefix) => ("+" + inputValue).startsWith(prefix.prefix));
    return (
      <div
        ref={ContainerRef}
        className={cn(
          "items-center transition-all border border-input rounded-md h-9 flex disabled:cursor-not-allowed disabled:opacity-50 hover:ring-1 hover:ring-accent",
          status == "success" &&
            "hover:ring-lime-600 focus-visible:ring-1 focus-visible:ring-lime-500",
          status == "error" &&
            "hover:ring-red-600 focus-visible:ring-1 focus-visible:ring-red-500",
          readOnly && ""
        )}
      >
        <div className="">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                aria-expanded={open}
                className="py-1  w-10 px-3 justify-between -mr-2"
              >
                <Image
                  alt={(selectedPrefix?.country || "eu") + "-flag"}
                  src={`/flags/${selectedPrefix?.country || "eu"}.svg`}
                  width={20}
                  height={20}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className={cn("w-[300px] p-0", popoverClassName)} align="start">
              <Command>
                <CommandInput placeholder="Search prefix..." className="h-9" />
                <ScrollArea className="h-[300px]">
                  <CommandEmpty>No phone prefix found.</CommandEmpty>
                  {suggestions && (
                    <CommandGroup heading="Suggested">
                      {suggestions.map((suggestion) => (
                        <Fragment key={suggestion}>
                          {phonePrefix.find(
                            (prefix) => prefix.country === suggestion
                          ) && (
                            <CommandItem
                              key={
                                phonePrefix.find(
                                  (prefix) => prefix.country === suggestion
                                )?.prefix
                              }
                              value={
                                phonePrefix.find(
                                  (prefix) => prefix.country === suggestion
                                )?.name
                              }
                              className="gap-2"
                              onSelect={(currentValue) => {
                                setInputValue(
                                  phonePrefix.find(
                                    (prefix) => prefix.country === suggestion
                                  )?.prefix.replace(/[^0-9]/g, "") + ""
                                );
                                onInputChange &&
                                  onInputChange(
                                    phonePrefix.find(
                                      (prefix) => prefix.country === suggestion
                                    )?.prefix.replace(/[^0-9]/g, "") + ""
                                  );
                                setOpen(false);
                              }}
                            >
                              <Image
                                alt={
                                  phonePrefix.find(
                                    (prefix) => prefix.country === suggestion
                                  )?.country + "-flag"
                                }
                                src={`/flags/${
                                  phonePrefix.find(
                                    (prefix) => prefix.country === suggestion
                                  )?.country
                                }.svg`}
                                width={15}
                                height={15}
                              />
                              {
                                phonePrefix.find(
                                  (prefix) => prefix.country === suggestion
                                )?.name
                              }
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  selectedPrefix ===
                                    phonePrefix.find(
                                      (prefix) => prefix.country === suggestion
                                    )
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          )}
                        </Fragment>
                      ))}
                    </CommandGroup>
                  )}
                  <CommandGroup {...{heading: "All"}}>
                    {phonePrefix
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((prefix) => (
                        <CommandItem
                          key={prefix.prefix}
                          value={prefix.name}
                          className="gap-2"
                          onSelect={(currentValue) => {
                            setInputValue(prefix.prefix.replace(/[^0-9]/g, ""));
                            onInputChange &&
                              onInputChange(
                                prefix.prefix.replace(/[^0-9]/g, "")
                              );
                            setOpen(false);
                          }}
                        >
                          <Image
                            alt={prefix.country + "-flag"}
                            src={`/flags/${prefix.country}.svg`}
                            width={15}
                            height={15}
                          />
                          {prefix.name}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              selectedPrefix === prefix
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </ScrollArea>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
        <Input
          prefix="+ "
          type="text"
          noPrefixAnimation
          inputMode="tel"
          value={value ?? inputValue}
          onFocus={(ev) => {
            if (ContainerRef.current && !readOnly && !disabled) {
              Object.assign(ContainerRef.current.style, {
                boxShadow:
                  status == "success"
                    ? "0 0 0 1px rgb(132 204 22 / 0.8)"
                    : status == "error"
                    ? "0 0 0 1px rgb(220 38 38 / 0.8)"
                    : "0 0 0 1px rgb(255 255 255 / 0.8)",
                transform: "translateY(-1px)",
              });
            }
            onFocus && onFocus(ev);
          }}
          onBlur={(ev) => {
            if (ContainerRef.current) {
              Object.assign(ContainerRef.current.style, {
                boxShadow: "",
                transform: "translateY(0px)",
              });
            }
            onBlur && onBlur(ev);
          }}
          className={cn(
            "flex h-9 w-full rounded-md border-0 px-3 py-1 text-sm shadow-none transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent",
            status == "success" &&
              "text-lime-600 placeholder:opacity-80 placeholder:text-lime-600",
            status == "error" &&
              "text-red-500 placeholder:opacity-80 placeholder:text-red-500",
            className
          )}
          onChange={(ev) => {
            ev.target.value = ev.target.value.replace(/[^0-9]/g, "");
            setInputValue(ev.target.value);
            onInputChange && onInputChange(ev.target.value);
          }}
          readOnly={readOnly}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
