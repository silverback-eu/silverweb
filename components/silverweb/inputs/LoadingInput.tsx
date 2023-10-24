import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export type LoadingInputProps = {
  variant:
  | "combo"
  | "date"
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
};
export default function LoadingInput({ variant, ...rest }: LoadingInputProps) {
  if (
    variant === "combo"
    || variant === "date"
    || variant === "email"
    || variant === "password"
    || variant === "phone"
    || variant === "text"
    || variant === "range"
    || variant === "number"
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
  if (variant === "checkbox") {
    return <LoadingCheckboxInput big={rest.checkboxRadioBig} />;
  }

  return <div>Loading</div>;
}

function LoadingTextInput() {
  return <Skeleton className="h-9 w-full rounded-md" />;
}

function LoadingTextAreaInput() {
  return <Skeleton className="h-[60px]  w-full rounded-md" />;
}

function LoadingFileInput() {
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
                  <Skeleton className="h-3 w-20" />
                  {" "}
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
                  <Skeleton className="h-3 w-20" />
                  {" "}
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
                  <Skeleton className="h-3 w-20" />
                  {" "}
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

function LoadingCheckboxInput({ big }: { big?: boolean }) {
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

function LoadingRadioInput({ big }: { big?: boolean }) {
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
