"use client";

import type { Column } from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";
import { Check, PlusCircle } from "lucide-react";
import { Fragment } from "react";
import { CommandSeparator } from "cmdk";
import {
  Badge,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
} from "../../shared";
import { cn } from "../../../lib/utils";

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

export function FilterDropdown<TData, TValue>({
  column,
  title,
  searchPlaceholder,
  fullSearchParam,
  options,
}: FilterDropdownProps<TData, TValue>): JSX.Element {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);

  const nestedCounts: Record<string, number> = {};

  if ((fullSearchParam?.split(".").length ?? 0) > 1 && fullSearchParam) {
    facets?.forEach((count, valueObj) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- TODO: fix
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
        <Button className="h-8 border-dashed" size="sm" variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" />
          {title}
          {selectedValues.size > 0 && (
            <Fragment>
              <Separator className="mx-2 h-4" orientation="vertical" />
              <Badge
                className="rounded-sm px-1 font-normal lg:hidden"
                variant="secondary"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    className="rounded-sm px-1 font-normal"
                    variant="secondary"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        className="rounded-sm px-1 font-normal"
                        key={option.value}
                        variant="secondary"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </Fragment>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-0">
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
                        filterValues.length ? filterValues : undefined
                      );
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <Check className={cn("h-4 w-4")} />
                    </div>
                    {typeof option.icon === "string" ? (
                      <div className="pr-0.5">{option.icon}</div>
                    ) : (
                      option.icon && (
                        <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                      )
                    )}
                    <span>{option.label}</span>
                    {facets?.get(option.label) ? (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-bold text-xs">
                        {facets.get(option.label)}
                      </span>
                    ) : (
                      Object.entries(nestedCounts).length > 0 &&
                      nestedCounts[option.label] && (
                        <span className="ml-auto flex h-4 w-4 items-center justify-center font-bold text-xs">
                          {nestedCounts[option.label]}
                        </span>
                      )
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <Fragment>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    className="justify-center text-center"
                    onSelect={() => column?.setFilterValue(undefined)}
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </Fragment>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
