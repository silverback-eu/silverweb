import type { ReactNode } from "react";

export interface ContextMenuProps {
  items?: ContextMenuItemType[];
  selected?: string;
}

export type ContextMenuItemType =
  | {
      label: string;
      type: "item";
      onClick: (event: Event) => void;
      shortcut?: ReactNode;
    }
  | {
      type: "separator";
    }
  | {
      label: string;
      type: "submenu";
      items: ContextMenuItemType[];
    }
  | {
      label: string;
      type: "group";
      items: ContextMenuItemType[];
    };
