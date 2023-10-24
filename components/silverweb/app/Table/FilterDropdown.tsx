"use client";

import { Column } from "@tanstack/react-table";
import { Check, LucideIcon, PlusCircle } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface FilterDropdownProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  searchPlaceholder?: string;
  fullSearchParam?: string;
  options: {
    label: string;
    value: string;
    icon?: LucideIcon | string;
  }[];
}

export default function FilterDropdown<TData, TValue>({
  column,
  title,
  searchPlaceholder,
  fullSearchParam,
  options,
}: FilterDropdownProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  const nestedCounts: Record<string, number> = {};

  if ((fullSearchParam?.split(".").length ?? 0) > 1 && fullSearchParam) {
    facets?.forEach((count, valueObj) => {
      const value: string = valueObj[fullSearchParam.split(".")[1]];
      if (nestedCounts[value]) {
        nestedCounts[value] += count;
      } else {
        nestedCounts[value] = count;
      }
    });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircle className="mr-2 h-4 w-4" />
          {title}
          {selectedValues?.size > 0 && (
          <React.Fragment>
            <Separator orientation="vertical" className="mx-2 h-4" />
            <Badge
              variant="secondary"
              className="rounded-sm px-1 font-normal lg:hidden"
            >
              {selectedValues.size}
            </Badge>
            <div className="hidden space-x-1 lg:flex">
              {selectedValues.size > 2 ? (
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal"
                >
                  {selectedValues.size}
                  {" "}
                  selected
                </Badge>
              ) : (
                options
                  .filter((option) => selectedValues.has(option.value))
                  .map((option) => (
                    <Badge
                      variant="secondary"
                      key={option.value}
                      className="rounded-sm px-1 font-normal"
                    >
                      {option.label}
                    </Badge>
                  ))
              )}
            </div>
          </React.Fragment>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput
            placeholder={`${title || searchPlaceholder || "Search"}...`}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);

                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                      const filterValues = Array.from(selectedValues);
                      column?.setFilterValue(
                        filterValues.length ? filterValues : undefined,
                      );
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected ?
                          "bg-primary text-primary-foreground" :
                          "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <Check className={cn("h-4 w-4")} />
                    </div>
                    {option.icon && (typeof option.icon === "string" ? (
                      <div className="pr-0.5">{option.icon}</div>
                    ) : (
                      <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    ))}
                    <span>{option.label}</span>
                    {facets?.get(option.label) ? (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-bold text-xs">
                        {facets.get(option.label)}
                      </span>
                    ) : Object.entries(nestedCounts).length > 0 && nestedCounts[option.label] && (
                    <span className="ml-auto flex h-4 w-4 items-center justify-center font-bold text-xs">
                      {nestedCounts[option.label]}
                    </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
            <React.Fragment>
              <CommandSeparator />
              <CommandGroup>
                <CommandItem
                  onSelect={() => column?.setFilterValue(undefined)}
                  className="justify-center text-center"
                >
                  Clear filters
                </CommandItem>
              </CommandGroup>
            </React.Fragment>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
