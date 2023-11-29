import { Loader2 } from "lucide-react";
import { Toaster as PToaster } from "sonner";
import type { ToasterProps } from "./types";

export function Toaster(props: ToasterProps): JSX.Element {
  return (
    <PToaster
      closeButton
      duration={500000}
      loadingIcon={<Loader2 className="animate-spin mr-2 h-5 w-5" />}
      toastOptions={{
        style: {
          borderRadius: "0.75rem",
          border: "1px solid hsl(var(--border))",
          backgroundColor: "hsl(var(--card))",
          color: "hsl(var(--card-foreground))",
          padding: "1.5rem",
          boxShadow:
            "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000), 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)",
          fontFamily: "var(--graphik-webfont), sans-serif",
        },
        unstyled: true,
      }}
      {...props}
    />
  );
}
