import { Loader2 } from "lucide-react";
import { Toaster as PToaster } from "sonner";
import type { ToasterProps } from "./types";

export function Toaster(props: ToasterProps): JSX.Element {
  return (
    <PToaster
      className="toaster group"
      closeButton
      duration={5000}
      loadingIcon={
        <Loader2 className="ui-mr-2 ui-h-5 ui-w-5 ui-animate-spin " />
      }
      toastOptions={{
        classNames: {
          closeButton:
            "!ui-right-[0.75rem] !ui-left-auto !ui-translate-y-[25%] !ui-translate-x-[35%] !ui-bg-transparent !ui-border-none !ui-text-card-foreground [&>_svg]:ui-w-[15px] [&>_svg]:ui-h-[15px] [&>_svg]:ui-opacity-50 [&>_svg]:ui-transition-opacity [&>_svg]:ui-stroke-2 [&_>svg]:hover:ui-opacity-100",
          toast:
            "ui-w-full ui-graphik ui-rounded-xl ui-border ui-bg-card ui-text-card-foreground ui-shadow ui-flex ui-p-3 ui-gap-1 [&>div[data-icon]]:ui-w-[20px] [&>div[data-icon]]:ui-h-[20px] [&>div>.loader]:!ui-p-0 [&>div>.loader]:!ui-border-none [&[data-type='loading']>*]:ui-opacity-50 data-[type='loading']:ui-select-none data-[type='loading']:ui-pointer-events-none",
          description: "!ui-text-sm ui-opacity-90",
          title: "!ui-text-sm ui-font-bold",
          actionButton: "!ui-bg-primary !ui-text-primary-foreground ui-mt-auto",
          cancelButton: "!ui-bg-muted !ui-text-muted-foreground ui-mt-auto",
          error: "ui-text-red-500",
          info: "ui-text-blue-500",
          success: "ui-text-green-500",
          warning: "ui-text-yellow-500",
        },
        unstyled: true,
      }}
      visibleToasts={9}
      {...props}
    />
  );
}
