import { ContextMenuSub } from "@radix-ui/react-context-menu";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenu as ContextMenuPrimitive,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./context-menu";
import type { ContextMenuItemType, ContextMenuProps } from "./types";

const selection = (): Selection | null => {
  return window.getSelection();
};

export function ContextProvider({
  children,
  items,
}: {
  children: React.ReactNode;
  items?: ContextMenuItemType[];
}): JSX.Element {
  const [selected, setSelected] = useState<string>();
  return (
    <ContextMenuPrimitive
      onOpenChange={() => {
        setSelected(selection()?.toString());
      }}
    >
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenu items={items} selected={selected} />
    </ContextMenuPrimitive>
  );
}

function DisplayItems(item: ContextMenuItemType): JSX.Element {
  if (item.type === "item") {
    return (
      <ContextMenuItem onSelect={item.onClick}>
        {item.label}
        {item.shortcut ? (
          <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
        ) : null}
      </ContextMenuItem>
    );
  }
  if (item.type === "separator") {
    return <ContextMenuSeparator />;
  }
  if (item.type === "submenu") {
    return (
      <ContextMenuSub>
        <ContextMenuSubTrigger>{item.label}</ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          {item.items.map((subitems) => DisplayItems(subitems))}
        </ContextMenuSubContent>
      </ContextMenuSub>
    );
  }
  if ((item.type as string) === "group") {
    return (
      <ContextMenuGroup>
        <ContextMenuLabel>{item.label}</ContextMenuLabel>
        {item.items.map((subitems) => DisplayItems(subitems))}
      </ContextMenuGroup>
    );
  }
  return <div>Unknown item type</div>;
}

function downloadPage(url: string, fileName: string): void {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function download() {
    if (xhr.status === 200) {
      const blob = new Blob([xhr.responseText], { type: "text/html" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", fileName);
      link.setAttribute("target", "_blank");
      link.click();
    } else {
      console.error("Error downloading page:", xhr.statusText);
    }
  };
  xhr.send();
}

export function ContextMenu({
  items,
  selected,
}: ContextMenuProps): JSX.Element {
  const [cmdKey, setCmdKey] = useState<ReactNode>("⌘");
  useEffect(() => {
    if (!window.navigator.userAgent.includes("Mac")) {
      setCmdKey(<span className="pr-1 tracking-tighter">CTRL</span>);
    }
  }, []);
  return (
    <ContextMenuContent className="min-w-[200px] max-w-[300px]">
      <ContextMenuItem
        onSelect={() => {
          history.back();
        }}
      >
        Back
        <ContextMenuShortcut>{cmdKey}[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem
        onSelect={() => {
          history.forward();
        }}
      >
        Forward
        <ContextMenuShortcut>{cmdKey}]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem
        onSelect={() => {
          location.reload();
        }}
      >
        Reload
        <ContextMenuShortcut>{cmdKey}R</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem
        disabled={!selected}
        onSelect={() => {
          window.open(`https://www.google.com/search?q=${selected}`);
        }}
      >
        <p className="max-w-[274px] truncate">
          Search Google for &quot;{selected ? selected : "..."}&quot;
        </p>
      </ContextMenuItem>
      <ContextMenuItem
        disabled={!selected}
        onClick={() => {
          if (selected)
            navigator.clipboard.writeText(selected).catch(() => {
              throw new Error("Failed to copy text to clipboard");
            });
        }}
      >
        Copy
        <ContextMenuShortcut>{cmdKey}C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem
        onSelect={() => {
          downloadPage(
            location.href,
            `${document.title.toLowerCase().replace(/ /g, "-")}.html`,
          );
        }}
      >
        Save Page
        <ContextMenuShortcut>{cmdKey}S</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem
        onSelect={() => {
          window.print();
        }}
      >
        Print...
        <ContextMenuShortcut>{cmdKey}P</ContextMenuShortcut>
      </ContextMenuItem>
      {items && items.length > 0 ? <ContextMenuSeparator /> : null}
      {items?.map(DisplayItems)}
    </ContextMenuContent>
  );
}
