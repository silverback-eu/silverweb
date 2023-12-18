import { useDropzone } from "react-dropzone";
import type { UseFileUploader, UseFileUploaderProps } from "./types";

export function useFileUploader(props: UseFileUploaderProps): UseFileUploader {
  const { accept, maxSize, multiple, ...rest } = props;
  const {
    acceptedFiles,
    fileRejections,
    isDragActive,
    isFileDialogActive,
    inputRef,
    isDragAccept,
    isDragReject,
    isFocused,
    open,
    rootRef,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: accept || {
      "image/jpeg": [],
      "image/png": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
    },
    maxSize: maxSize || 5242880,
    multiple: multiple || true,
    ...rest,
  });
  return {
    acceptedFiles,
    fileRejections,
    isDragActive,
    isFileDialogActive,
    inputRef,
    isDragAccept,
    isDragReject,
    isFocused,
    open,
    rootRef,
    getRootProps,
    getInputProps,
  };
}
