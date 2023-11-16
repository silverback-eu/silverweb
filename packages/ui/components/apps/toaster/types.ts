import type { CSSProperties, ReactNode } from "react";

export interface ToasterProps {
  invert?: boolean;
  theme?: "light" | "dark" | "system";
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  hotkey?: string[];
  richColors?: boolean;
  expand?: boolean;
  duration?: number;
  gap?: number;
  visibleToasts?: number;
  closeButton?: boolean;
  toastOptions?: ToastOptions;
  className?: string;
  style?: CSSProperties;
  offset?: string | number;
  dir?: "rtl" | "ltr" | "auto";
  loadingIcon?: ReactNode;
}

export interface ToastOptions {
  className?: string;
  descriptionClassName?: string;
  style?: CSSProperties;
  cancelButtonStyle?: CSSProperties;
  actionButtonStyle?: CSSProperties;
  duration?: number;
  unstyled?: boolean;
}
