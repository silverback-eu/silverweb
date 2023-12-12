import { Card, CardContent, Skeleton } from "../shared";

export interface LoadingInputProps {
  variant?:
    | "combo"
    | "date"
    | "range"
    | "email"
    | "file"
    | "number"
    | "password"
    | "phone"
    | "text"
    | "textarea"
    | "checkbox"
    | "radio"
    | "slider"
    | "switch";
  checkboxRadioBig?: boolean;
}

function LoadingTextInput(): JSX.Element {
  return <Skeleton className="h-9 w-full rounded-md" />;
}

function LoadingTextAreaInput(): JSX.Element {
  return <Skeleton className="h-[60px]  w-full rounded-md" />;
}

function LoadingFileInput(): JSX.Element {
  return (
    <div>
      <Card className="relative h-48 w-full space-y-3 overflow-hidden px-4 py-8 text-center transition-all">
        <Skeleton className="mx-auto !mt-0 flex h-10 w-10 items-center justify-center rounded-xl bg-muted" />
        <Skeleton className="mx-auto h-5 w-64" />
        <p className="text-xs">
          <span className="animate-pulse select-none rounded-md bg-primary/10 box-decoration-clone text-transparent">
            Support for single or bulk upload. Only *.pdf, *.png, *jpg, *.doc
            and *.docx file types are supported.
          </span>
        </p>
      </Card>
      <div className="my-4 grid gap-2">
        <Card>
          <CardContent className="flex items-center justify-between gap-2 p-2 pr-5">
            <div className="flex items-center gap-2">
              <Skeleton className="flex h-8 w-8 items-center justify-center rounded-xl bg-muted" />
              <div className="grid content-center gap-[7px]">
                <Skeleton className="h-4 w-28" />
                <div className="flex gap-2">
                  <Skeleton className="h-3 w-20" />{" "}
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
            </div>
            <Skeleton className="h-4 w-4 rounded-sm" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between gap-2 p-2 pr-5">
            <div className="flex items-center gap-2">
              <Skeleton className="flex h-8 w-8 items-center justify-center rounded-xl bg-muted" />
              <div className="grid content-center gap-[7px]">
                <Skeleton className="h-4 w-28" />
                <div className="flex gap-2">
                  <Skeleton className="h-3 w-20" />{" "}
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
            </div>
            <Skeleton className="h-4 w-4 rounded-sm" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-between gap-2 p-2 pr-5">
            <div className="flex items-center gap-2">
              <Skeleton className="flex h-8 w-8 items-center justify-center rounded-xl bg-muted" />
              <div className="grid content-center gap-[7px]">
                <Skeleton className="h-4 w-28" />
                <div className="flex gap-2">
                  <Skeleton className="h-3 w-20" />{" "}
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
            </div>
            <Skeleton className="h-4 w-4 rounded-sm" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function LoadingCheckboxInput({ big }: { big?: boolean }): JSX.Element {
  if (big) {
    return (
      <Card>
        <CardContent className="flex items-center justify-between gap-2 p-2">
          <div className="flex items-center gap-2">
            <Skeleton className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted" />
            <div className="grid content-center gap-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-36" />
            </div>
          </div>
          <Skeleton className="mr-2 h-4 w-4 rounded-sm" />
        </CardContent>
      </Card>
    );
  }

  return <Skeleton className="h-4 w-4 rounded-sm" />;
}

function LoadingRadioInput({ big }: { big?: boolean }): JSX.Element {
  if (big) {
    return (
      <Card>
        <CardContent className="flex items-center justify-between gap-2 p-2">
          <div className="flex items-center gap-2">
            <Skeleton className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted" />
            <div className="grid content-center gap-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-36" />
            </div>
          </div>
          <Skeleton className="mr-2 h-4 w-4 rounded-full" />
        </CardContent>
      </Card>
    );
  }

  return <Skeleton className="h-4 w-4 rounded-full" />;
}

function LoadingSlider(): JSX.Element {
  return (
    <div className="relative flex items-center justify-center">
      <Skeleton className="h-2 w-full rounded-full" />
      <div className="absolute -translate-x-12 rounded-full bg-background">
        <Skeleton className="h-5 w-5 rounded-full " />
      </div>
    </div>
  );
}

function LoadingSwitch({ big }: { big?: boolean }): JSX.Element {
  if (big) {
    return (
      <Card>
        <CardContent className="flex items-center justify-between gap-2 p-2">
          <div className="flex items-center gap-2">
            <Skeleton className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted" />
            <div className="grid content-center gap-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-36" />
            </div>
          </div>
          <Skeleton className="mr-2 h-5 w-10 rounded-full" />
        </CardContent>
      </Card>
    );
  }
  return <Skeleton className="h-5 w-10 rounded-full" />;
}

export function LoadingInput({
  variant,
  checkboxRadioBig,
}: LoadingInputProps): JSX.Element {
  if (
    variant === "combo" ||
    variant === "date" ||
    variant === "email" ||
    variant === "password" ||
    variant === "phone" ||
    variant === "text" ||
    variant === "range" ||
    variant === "number"
  ) {
    return <LoadingTextInput />;
  }
  if (variant === "textarea") {
    return <LoadingTextAreaInput />;
  }
  if (variant === "file") {
    return <LoadingFileInput />;
  }
  if (variant === "radio") {
    return <LoadingRadioInput big={checkboxRadioBig} />;
  }

  if (variant === "checkbox") {
    return <LoadingCheckboxInput big={checkboxRadioBig} />;
  }

  if (variant === "slider") {
    return <LoadingSlider />;
  }

  if (variant === "switch") {
    return <LoadingSwitch big={checkboxRadioBig} />;
  }

  return <div>Loading</div>;
}
