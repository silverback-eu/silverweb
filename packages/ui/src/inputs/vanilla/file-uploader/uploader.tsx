import { Fragment } from "react";
import type { LucideIcon } from "lucide-react";
import { File, FileImage, FileText, UploadCloud, X } from "lucide-react";
import { ErrorCode } from "react-dropzone";
import { Button, Card, CardContent } from "../../../shared";
import { uicn } from "../../../lib";
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
      className={uicn(
        "ui-relative ui-h-48 ui-w-full ui-space-y-3 ui-overflow-hidden ui-px-4 ui-py-8 ui-text-center ui-transition-all hover:ui-ring-1 hover:ui-ring-secondary focus-visible:ui-outline-none focus-visible:ui-ring-1 focus-visible:ui-ring-ring",
        (isDragActive || isFileDialogActive) && "ui-ring-1 ui-ring-ring",
        status === "success" && "!ui-text-green-500",
        status === "error" && "!ui-text-red-500",
        disabled && "ui-cursor-not-allowed ui-select-none ui-opacity-50",
        readOnly && "ui-select-none",
      )}
    >
      <input {...getInputProps()} />
      <Fragment>
        <div className="ui-mx-auto !ui-mt-0 ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
          <UploadCloud className="ui-h-6 ui-w-6" />
        </div>
        <p className="ui-text-sm ui-font-bold ui-tracking-tight">
          {isDragActive
            ? dragHeading || "Drop now the file to upload"
            : heading || "Click or drag file to this area to upload"}
        </p>
        <p
          className={uicn(
            "ui-text-xs ui-text-warm",
            status === "success" && "!ui-text-green-500 ui-opacity-70",
            status === "error" && "!ui-text-red-500 ui-opacity-70",
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
      <CardContent className="ui-flex ui-items-center ui-gap-2 ui-p-2">
        <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
          <Icon className="ui-h-6 ui-w-6" />
        </div>
        <div className="ui-grid ui-w-[calc(100%-92px)] ui-content-center">
          <p className="ui-truncate ui-text-start ui-text-sm ui-font-semibold">
            {name}
          </p>
          <p className="ui-truncate ui-text-start ui-text-xs ui-opacity-50">
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
          <X className="ui-h-5 ui-w-5" />
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
    <Card className="ui-text-red-500">
      <CardContent className="ui-flex ui-items-center ui-gap-2 ui-p-2">
        <div className="ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted">
          <Icon className="ui-h-6 ui-w-6" />
        </div>
        <div className="ui-grid ui-w-[calc(100%-92px)] ui-content-center">
          <p className="ui-truncate ui-text-start ui-text-sm ui-font-semibold">
            {name}
          </p>
          <p className="ui-truncate ui-text-start ui-text-xs ui-opacity-50">
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
          <X className="ui-h-5 ui-w-5" />
        </Button>
      </CardContent>
    </Card>
  );
}
