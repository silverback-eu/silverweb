import { Card, CardContent, Skeleton } from "../shared";

export interface LoadingInputProps {
  variant:
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
    | "radio";
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
      <Skeleton className="w-full rounded-xl flex items-center justify-center py-[120px]" />
      <div className="grid gap-2 my-2">
        <Card>
          <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Skeleton className="flex justify-center items-center bg-muted rounded-xl h-8 w-8" />
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
          <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Skeleton className="flex justify-center items-center bg-muted rounded-xl h-8 w-8" />
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
          <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
              <Skeleton className="flex justify-center items-center bg-muted rounded-xl h-8 w-8" />
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
        <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Skeleton className="flex justify-center items-center bg-muted rounded-xl h-10 w-10" />
            <div className="grid content-center gap-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-36" />
            </div>
          </div>
          <Skeleton className="h-4 w-4 rounded-sm" />
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
        <CardContent className="p-2 pr-5 flex gap-2 items-center justify-between">
          <div className="flex gap-2 items-center">
            <Skeleton className="flex justify-center items-center bg-muted rounded-xl h-10 w-10" />
            <div className="grid content-center gap-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-3 w-36" />
            </div>
          </div>
          <Skeleton className="h-4 w-4 rounded-full" />
        </CardContent>
      </Card>
    );
  }

  return <Skeleton className="h-4 w-4 rounded-full" />;
}

export function LoadingInput({
  variant,
  ...rest
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
    return <LoadingRadioInput big={rest.checkboxRadioBig} />;
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Just to have a default if the variant is not handled
  if (variant === "checkbox") {
    return <LoadingCheckboxInput big={rest.checkboxRadioBig} />;
  }

  return <div>Loading</div>;
}
