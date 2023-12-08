import { ErrorCode, useDropzone } from "react-dropzone";
import { Fragment } from "react";
import { UploadCloud, X } from "lucide-react";
import { Button, Card, CardContent } from "../../../shared";
import { cn } from "../../../lib";

export function FileUploader(): JSX.Element {
  const {
    acceptedFiles,
    fileRejections,
    isDragActive,
    isFileDialogActive,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "application/pdf": [],
    },
    maxSize: 5242880,
    multiple: true,
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.name}>
      <Card>
        <CardContent className="p-2 flex gap-2 items-center">
          <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
            <UploadCloud className="h-6 w-6" />
          </div>
          <div className="grid content-center w-[calc(100%-92px)]">
            <p className="text-sm font-semibold text-start truncate">
              {file.name}
            </p>
            <p className="text-xs opacity-50 text-start truncate">
              image/png {Math.round(file.size * 0.001 * 100) / 100} KB
            </p>
          </div>
          <Button size="icon" variant="link">
            <X className="w-5 h-5" />
          </Button>
        </CardContent>
      </Card>
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    const ErrorMessage = errors.map((error) => {
      switch (error.code) {
        case ErrorCode.FileInvalidType.toString():
          return "The file type is not a *.pdf, *.png, *jpg, *.doc nor *.docx. ";
        case ErrorCode.FileTooLarge.toString():
          return "The file is larger then 5 MB. ";
        case ErrorCode.FileTooSmall.toString():
          return "The file is too small. ";
        default:
          return error.message;
      }
    });

    return (
      <li key={file.name}>
        <Card className="text-red-500">
          <CardContent className="p-2 flex gap-2 items-center">
            <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
              <UploadCloud className="h-6 w-6" />
            </div>
            <div className="grid content-center w-[calc(100%-92px)]">
              <p className="text-sm font-semibold text-start truncate">
                {file.name}
              </p>
              <p className="text-xs opacity-50 text-start truncate">
                {ErrorMessage}
              </p>
            </div>
            <Button size="icon" variant="link">
              <X className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      </li>
    );
  });

  return (
    <Fragment>
      <Card
        {...getRootProps({ className: "dropzone" })}
        className={cn(
          "overflow-hidden relative px-4 py-8 w-full text-center space-y-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:ring-1 hover:ring-secondary transition-all",
          (isDragActive || isFileDialogActive) && "ring-1 ring-ring"
        )}
      >
        <input {...getInputProps()} />
        <Fragment>
          <div className="flex justify-center items-center !mt-0 bg-muted mx-auto rounded-xl h-10 w-10">
            <UploadCloud className="h-6 w-6" />
          </div>
          <p className="text-sm font-bold tracking-tight">
            {isDragActive
              ? "Drop now the file to upload"
              : "Click or drag file to this area to upload"}
          </p>
          <p className="text-xs text-warm">
            Support for single or bulk upload. Only *.pdf, *.png, *jpg, *.doc
            and *.docx file types are supported.
          </p>
        </Fragment>
      </Card>
      <aside>
        <ul className="space-y-2 mt-2">{fileRejectionItems}</ul>
        <ul className="space-y-2 mt-2">{acceptedFileItems}</ul>
      </aside>
      <pre>
        <code>{JSON.stringify(process.env, null, 2)}</code>
        {process.env.NODE_ENV}
      </pre>
    </Fragment>
  );
}
