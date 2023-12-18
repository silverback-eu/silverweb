import type { Column } from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";
import { Check, PlusCircle } from "lucide-react";
import { CommandSeparator } from "cmdk";
import { Fragment } from "react";
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
import { uicn } from "../../lib";

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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- FIX: any
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
        <Button className="ui-h-8 ui-border-dashed" size="sm" variant="outline">
          <PlusCircle className="ui-mr-2 ui-h-4 ui-w-4" />
          {title}
          {selectedValues.size > 0 && (
            <Fragment>
              <Separator className="ui-mx-2 ui-h-4" orientation="vertical" />
              <Badge
                className="ui-rounded-sm ui-px-1 ui-font-normal lg:ui-hidden"
                variant="secondary"
              >
                {selectedValues.size}
              </Badge>
              <div className="ui-hidden ui-space-x-1 lg:ui-flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    className="ui-rounded-sm ui-px-1 ui-font-normal"
                    variant="secondary"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        className="ui-rounded-sm ui-px-1 ui-font-normal"
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
      <PopoverContent align="start" className="ui-w-[200px] ui-p-0">
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
                      className={uicn(
                        "ui-mr-2 ui-flex ui-h-4 ui-w-4 ui-items-center ui-justify-center ui-rounded-sm ui-border ui-border-primary",
                        isSelected
                          ? "ui-bg-primary ui-text-primary-foreground"
                          : "ui-opacity-50 [&_svg]:ui-invisible",
                      )}
                    >
                      <Check className="ui-h-4 ui-w-4" />
                    </div>
                    {typeof option.icon === "string" ? (
                      <div className="ui-pr-0.5">{option.icon}</div>
                    ) : (
                      option.icon && (
                        <option.icon className="ui-mr-2 ui-h-4 ui-w-4 ui-text-muted-foreground" />
                      )
                    )}
                    <span>{option.label}</span>
                    {facets?.get(option.label) ? (
                      <span className="ui-ml-auto ui-flex ui-h-4 ui-w-4 ui-items-center ui-justify-center ui-text-xs ui-font-bold">
                        {facets.get(option.label)}
                      </span>
                    ) : (
                      Object.entries(nestedCounts).length > 0 &&
                      nestedCounts[option.label] && (
                        <span className="ui-ml-auto ui-flex ui-h-4 ui-w-4 ui-items-center ui-justify-center ui-text-xs ui-font-bold">
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
                    className="ui-justify-center ui-text-center"
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
