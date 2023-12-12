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
}: UploaderProps): JSX.Element {
  return (
    <Card
      {...getRootProps({ className: "dropzone" })}
      className={cn(
        "not-sr-only select-none overflow-hidden relative px-4 py-8 w-full text-center space-y-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:ring-1 hover:ring-secondary transition-all",
        (isDragActive || isFileDialogActive) && "ring-1 ring-ring",
        status === "success" && "!text-green-500",
        status === "error" && "!text-red-500"
      )}
    >
      <input {...getInputProps()} />
      <Fragment>
        <div className="flex justify-center items-center !mt-0 bg-muted mx-auto rounded-xl h-10 w-10">
          <UploadCloud className="h-6 w-6" />
        </div>
        <p className="text-sm font-bold tracking-tight">
          {isDragActive
            ? dragHeading || "Drop now the file to upload"
            : heading || "Click or drag file to this area to upload"}
        </p>
        <p className="text-xs text-warm">
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
    <Card
      className={cn(
        status === "success" && "!text-green-500",
        status === "error" && "!text-red-500"
      )}
    >
      <CardContent className="p-2 flex gap-2 items-center">
        <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
          <Icon className="h-6 w-6" />
        </div>
        <div className="grid content-center w-[calc(100%-92px)]">
          <p className="text-sm font-semibold text-start truncate">{name}</p>
          <p className="text-xs opacity-50 text-start truncate">
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
          <X className="w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
}

export function RejectedFile({ name, errors }: RejectedFileProps): JSX.Element {
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
      <CardContent className="p-2 flex gap-2 items-center">
        <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
          <Icon className="h-6 w-6" />
        </div>
        <div className="grid content-center w-[calc(100%-92px)]">
          <p className="text-sm font-semibold text-start truncate">{name}</p>
          <p className="text-xs opacity-50 text-start truncate">
            {ErrorMessage}
          </p>
        </div>
        <Button size="icon" variant="link">
          <X className="w-5 h-5" />
        </Button>
      </CardContent>
    </Card>
  );
}
