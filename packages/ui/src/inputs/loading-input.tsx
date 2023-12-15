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
  return <Skeleton className="ui-h-9 ui-w-full ui-rounded-md" />;
}

function LoadingTextAreaInput(): JSX.Element {
  return <Skeleton className="ui-h-[60px] ui- ui-w-full ui-rounded-md" />;
}

function LoadingFileInput(): JSX.Element {
  return (
    <div>
      <Card className="ui-relative ui-h-48 ui-w-full ui-space-y-3 ui-overflow-hidden ui-px-4 ui-py-8 ui-text-center ui-transition-all">
        <Skeleton className="ui-mx-auto !ui-mt-0 ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted" />
        <Skeleton className="ui-mx-auto ui-h-5 ui-w-64" />
        <p className="ui-text-xs">
          <span className="ui-animate-pulse ui-select-none ui-rounded-md ui-bg-primary/10 ui-box-decoration-clone ui-text-transparent">
            Support for single or bulk upload. Only *.pdf, *.png, *jpg, *.doc
            and *.docx file types are supported.
          </span>
        </p>
      </Card>
      <div className="ui-my-4 ui-grid ui-gap-2">
        <Card>
          <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2 ui-pr-5">
            <div className="ui-flex ui-items-center ui-gap-2">
              <Skeleton className="ui-flex ui-h-8 ui-w-8 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted" />
              <div className="ui-grid ui-content-center ui-gap-[7px]">
                <Skeleton className="ui-h-4 ui-w-28" />
                <div className="ui-flex ui-gap-2">
                  <Skeleton className="ui-h-3 ui-w-20" />{" "}
                  <Skeleton className="ui-h-3 ui-w-12" />
                </div>
              </div>
            </div>
            <Skeleton className="ui-h-4 ui-w-4 ui-rounded-sm" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2 ui-pr-5">
            <div className="ui-flex ui-items-center ui-gap-2">
              <Skeleton className="ui-flex ui-h-8 ui-w-8 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted" />
              <div className="ui-grid ui-content-center ui-gap-[7px]">
                <Skeleton className="ui-h-4 ui-w-28" />
                <div className="ui-flex ui-gap-2">
                  <Skeleton className="ui-h-3 ui-w-20" />{" "}
                  <Skeleton className="ui-h-3 ui-w-12" />
                </div>
              </div>
            </div>
            <Skeleton className="ui-h-4 ui-w-4 ui-rounded-sm" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2 ui-pr-5">
            <div className="ui-flex ui-items-center ui-gap-2">
              <Skeleton className="ui-flex ui-h-8 ui-w-8 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted" />
              <div className="ui-grid ui-content-center ui-gap-[7px]">
                <Skeleton className="ui-h-4 ui-w-28" />
                <div className="ui-flex ui-gap-2">
                  <Skeleton className="ui-h-3 ui-w-20" />{" "}
                  <Skeleton className="ui-h-3 ui-w-12" />
                </div>
              </div>
            </div>
            <Skeleton className="ui-h-4 ui-w-4 ui-rounded-sm" />
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
        <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2">
          <div className="ui-flex ui-items-center ui-gap-2">
            <Skeleton className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted" />
            <div className="ui-grid ui-content-center ui-gap-1">
              <Skeleton className="ui-h-4 ui-w-20" />
              <Skeleton className="ui-h-3 ui-w-36" />
            </div>
          </div>
          <Skeleton className="ui-mr-2 ui-h-4 ui-w-4 ui-rounded-sm" />
        </CardContent>
      </Card>
    );
  }

  return <Skeleton className="ui-h-4 ui-w-4 ui-rounded-sm" />;
}

function LoadingRadioInput({ big }: { big?: boolean }): JSX.Element {
  if (big) {
    return (
      <Card>
        <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2">
          <div className="ui-flex ui-items-center ui-gap-2">
            <Skeleton className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted" />
            <div className="ui-grid ui-content-center ui-gap-1">
              <Skeleton className="ui-h-4 ui-w-20" />
              <Skeleton className="ui-h-3 ui-w-36" />
            </div>
          </div>
          <Skeleton className="ui-mr-2 ui-h-4 ui-w-4 ui-rounded-full" />
        </CardContent>
      </Card>
    );
  }

  return <Skeleton className="ui-h-4 ui-w-4 ui-rounded-full" />;
}

function LoadingSlider(): JSX.Element {
  return (
    <div className="ui-relative ui-flex ui-items-center ui-justify-center">
      <Skeleton className="ui-h-2 ui-w-full ui-rounded-full" />
      <div className="ui-absolute -ui-translate-x-12 ui-rounded-full ui-bg-background">
        <Skeleton className="ui-h-5 ui-w-5 ui-rounded-full ui-" />
      </div>
    </div>
  );
}

function LoadingSwitch({ big }: { big?: boolean }): JSX.Element {
  if (big) {
    return (
      <Card>
        <CardContent className="ui-flex ui-items-center ui-justify-between ui-gap-2 ui-p-2">
          <div className="ui-flex ui-items-center ui-gap-2">
            <Skeleton className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted" />
            <div className="ui-grid ui-content-center ui-gap-1">
              <Skeleton className="ui-h-4 ui-w-20" />
              <Skeleton className="ui-h-3 ui-w-36" />
            </div>
          </div>
          <Skeleton className="ui-mr-2 ui-h-5 ui-w-10 ui-rounded-full" />
        </CardContent>
      </Card>
    );
  }
  return <Skeleton className="ui-h-5 ui-w-10 ui-rounded-full" />;
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
