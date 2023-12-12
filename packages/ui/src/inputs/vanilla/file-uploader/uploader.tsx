import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";
import { File, FileImage, FileText, UploadCloud, X } from "lucide-react";
import { ErrorCode } from "react-dropzone";
import { Button, Card, CardContent } from "../../../shared";
import { cn } from "../../../lib";
import type {
  AcceptedFileProps,
  RejectedFileProps,
  UploaderProps,
} from "./types";

export function Uploader({
  getRootProps,
  getInputProps,
  isDragActive,
  isFileDialogActive,
  status,
  dragHeading,
  heading,
  disabled,
  readOnly,
}: UploaderProps): JSX.Element {
  return (
    <Card
      {...getRootProps({ className: "dropzone" })}
      className={cn(
        "relative h-48 w-full space-y-3 overflow-hidden px-4 py-8 text-center transition-all hover:ring-1 hover:ring-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        (isDragActive || isFileDialogActive) && "ring-1 ring-ring",
        status === "success" && "!text-green-500",
        status === "error" && "!text-red-500",
        disabled && "cursor-not-allowed select-none opacity-50",
        readOnly && "select-none",
      )}
    >
      <input {...getInputProps()} />
      <Fragment>
        <div className="mx-auto !mt-0 flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
          <UploadCloud className="h-6 w-6" />
        </div>
        <p className="text-sm font-bold tracking-tight">
          {isDragActive
            ? dragHeading || "Drop now the file to upload"
            : heading || "Click or drag file to this area to upload"}
        </p>
        <p
          className={cn(
            "text-xs text-warm",
            status === "success" && "!text-green-500 opacity-70",
            status === "error" && "!text-red-500 opacity-70",
          )}
        >
          Support for single or bulk upload. Only *.pdf, *.png, *jpg, *.doc and
          *.docx file types are supported.
        </p>
      </Fragment>
    </Card>
  );
}

export function AcceptedFile({
  name,
  size,
  delFunction,
}: AcceptedFileProps): JSX.Element {
  let typeGroup = "plain";
  let Icon: LucideIcon = File;
  switch (name.split(".")[name.split(".").length - 1]) {
    case "jpeg":
    case "jpg":
    case "png":
      Icon = FileImage;
      typeGroup = "image";
      break;
    case "doc":
    case "docx":
    case "pdf":
      Icon = FileText;
      typeGroup = "application";
      break;
  }
  return (
    <Card>
      <CardContent className="flex items-center gap-2 p-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
          <Icon className="h-6 w-6" />
        </div>
        <div className="grid w-[calc(100%-92px)] content-center">
          <p className="truncate text-start text-sm font-semibold">{name}</p>
          <p className="truncate text-start text-xs opacity-50">
            {typeGroup}/{name.split(".")[name.split(".").length - 1]}{" "}
            {Math.round(size * 0.001 * 100) / 100} KB
          </p>
        </div>
        <Button
          onClick={() => {
            delFunction(name);
          }}
          size="icon"
          variant="link"
        >
          <X className="h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  );
}

export function RejectedFile({
  name,
  errors,
  delFunction,
}: RejectedFileProps): JSX.Element {
  let Icon: LucideIcon = File;
  switch (name.split(".")[name.split(".").length - 1]) {
    case "jpeg":
    case "jpg":
    case "png":
      Icon = FileImage;
      break;
    case "doc":
    case "docx":
    case "pdf":
      Icon = FileText;
      break;
  }
  const ErrorMessage = errors.map((error) => {
    switch (error.code) {
      case ErrorCode.FileInvalidType.toString():
        return "The file type is not a *.pdf, *.png, *jpg, *.doc nor *.docx. ";
      case ErrorCode.FileTooLarge.toString():
        return "The file is larger then 5000.00 KB. ";
      case ErrorCode.FileTooSmall.toString():
        return "The file is too small. ";
      default:
        return error.message;
    }
  });
  return (
    <Card className="text-red-500">
      <CardContent className="flex items-center gap-2 p-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
          <Icon className="h-6 w-6" />
        </div>
        <div className="grid w-[calc(100%-92px)] content-center">
          <p className="truncate text-start text-sm font-semibold">{name}</p>
          <p className="truncate text-start text-xs opacity-50">
            {ErrorMessage}
          </p>
        </div>
        <Button
          onClick={() => {
            delFunction(name);
          }}
          size="icon"
          variant="link"
        >
          <X className="h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  );
}
