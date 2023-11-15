"use client";

/**
 *
 * Copyright (c) SilverBack Staffing Ltd., affiliates and Frederik W. Grimm.
 *
 * This source code is licensed under the AGPL license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  File,
  FileArchive,
  FileImage,
  FilePieChart,
  FileSpreadsheet,
  FileText,
  FileType,
  FileVideo,
  RotateCw,
  X,
} from "lucide-react";
import type { ChangeEvent, DragEvent, InputHTMLAttributes } from "react";
import { Fragment, forwardRef, useEffect, useState } from "react";
import { Button, Card, CardContent, Input, Label } from "../../../shared";
import { cn } from "../../../lib/utils";

export interface FileIconProps {
  name: string;
  lastModified: number;
  uri: string;
  type: string;
  size: string;
  status:
    | {
        loading: true;
        error?: false;
        default?: false;
      }
    | {
        loading?: false;
        error: true;
        default?: false;
      }
    | {
        loading?: false;
        error?: false;
        default: true;
      };
}

export function DisplayedFile({
  name,
  type,
  size,
  status,
  onDelete,
}: FileIconProps & {
  onDelete?: () => void;
  status:
    | {
        loading: true;
        error?: false;
        default?: false;
      }
    | {
        loading?: false;
        error: true;
        default?: false;
      }
    | {
        loading?: false;
        error?: false;
        default: true;
      };
}): JSX.Element {
  let FileIcon = <FileText size={16} />;

  switch (type) {
    case "text/plain":
      FileIcon = <FileType size={16} />;
      break;
    case "application/pdf":
      FileIcon = <FileText size={16} />;
      break;
    case "image/png":
      FileIcon = <FileImage size={16} />;
      break;
    case "image/jpeg":
      FileIcon = <FileImage size={16} />;
      break;
    case "application/msword":
      FileIcon = <FileText size={16} />;
      break;
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      FileIcon = <FileText size={16} />;
      break;
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      FileIcon = <FileSpreadsheet size={16} />;
      break;
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      FileIcon = <FilePieChart size={16} />;
      break;
    case "text/csv":
      FileIcon = <FileSpreadsheet size={16} />;
      break;
    case "image/svg+xml":
      FileIcon = <FileImage size={16} />;
      break;
    case "application/zip":
      FileIcon = <FileArchive size={16} />;
      break;
    case "video/mp4":
      FileIcon = <FileVideo size={16} />;
      break;
    case "video/mpeg":
      FileIcon = <FileVideo size={16} />;
      break;
    default:
      FileIcon = <File size={16} />;
      break;
  }

  function getIconDisplayed(): JSX.Element {
    if (status.loading) {
      return <RotateCw size={16} />;
    }
    if (status.error) {
      return (
        <div className="relative">
          <X
            className="absolute text-red-500 animate-[ping_1s_ease-in-out]"
            size={16}
          />
          <X className="text-red-500" size={16} />
        </div>
      );
    }
    return FileIcon;
  }

  return (
    <Card>
      <CardContent
        className={cn(
          "p-2 flex justify-between items-center",
          status.loading && "animate-pulse"
        )}
      >
        <div className="flex gap-2 w-[calc(100%-36px)] items-center">
          <div className="flex justify-center items-center bg-muted rounded-xl h-8 w-8">
            {getIconDisplayed()}
          </div>
          <div className="grid content-center w-[calc(100%-32px-16px)]">
            <p
              className={cn(
                "text-sm font-semibold text-start truncate",
                status.error && "text-red-500"
              )}
            >
              {name}
            </p>
            <p className="text-xs opacity-50 text-start truncate">
              {type} {size}
            </p>
          </div>
        </div>
        <Button
          className={cn(status.loading && "cursor-wait")}
          disabled={status.loading}
          onClick={() => {
            if (onDelete) onDelete();
          }}
          size="icon"
          variant="link"
        >
          <X size={16} />
        </Button>
      </CardContent>
    </Card>
  );
}

export interface FileUploaderProps
  extends InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
  defaultItems?: FileIconProps[];
  onUploadChanged?: (items: FileIconProps[]) => void;
  onDropFile?: (items: FileList) => void;
  onUploadFile?: (items: FileList) => void;
  files?: FileIconProps[];
}

interface FileProps {
  name: string;
  uri: string;
  lastModified: number;
  type: string;
  size: string;
}

const FileUploader = forwardRef<HTMLInputElement, FileUploaderProps>(
  (props, ref) => {
    const {
      className,
      status,
      files,
      defaultItems,
      readOnly,
      disabled,
      onUploadChanged,
      onDropFile,
      onUploadFile,
      onChange,
      id,
      ...rest
    } = props;

    const [items, setItems] = useState<
      (FileIconProps & {
        status:
          | {
              loading: true;
              error?: false;
              default?: false;
            }
          | {
              loading?: false;
              error: true;
              default?: false;
            }
          | {
              loading?: false;
              error?: false;
              default: true;
            };
      })[]
    >(
      defaultItems?.map((item) => ({ ...item, status: { default: true } })) ||
        []
    );

    async function handleFileConvert(
      file: File | null
    ): Promise<FileProps | null> {
      if (!file) return null;

      const fileString =
        file.size < 1024 * 1024 * 5
          ? await new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                resolve(reader.result as string);
              };
              reader.onerror = reject;
            })
          : "zugross";

      return {
        name: file.name,
        uri: fileString as string,
        lastModified: file.lastModified,
        type: file.type,
        size: `${Math.round((file.size / 1024) * 100) / 100} KB`,
      };
    }

    // File input via click
    async function handleFile(e: ChangeEvent<HTMLInputElement>): Promise<void> {
      if (e.target.files && e.target.files.length !== 0) {
        const convertedFiles = await Promise.all(
          [...(e.target.files as unknown as File[])].map((file) => {
            setItems((prev) => [
              ...prev,
              {
                name: file.name,
                type: file.type,
                size: `${Math.round((file.size / 1024) * 100) / 100} KB`,
                uri: "",
                lastModified: file.lastModified,
                status: { loading: true as const },
              },
            ]);

            return handleFileConvert(file);
          })
        );
        setItems((prev) => [
          ...prev.filter(
            (item) =>
              !convertedFiles
                .map((file) => file?.lastModified)
                .includes(item.lastModified)
          ),
          ...convertedFiles.map((file) => {
            if (file) {
              return {
                ...file,
                lastModified: file.lastModified,
                uri: file.uri,
                status:
                  file.uri === "zugross"
                    ? { error: true as const }
                    : { default: true as const },
              };
            }

            return {
              name: "",
              type: "",
              size: "",
              uri: "",
              lastModified: 0,
              status: { loading: true as const },
            };
          }),
        ]);
      }
    }
    // File input via drop
    async function handleDrop(e: DragEvent<HTMLLabelElement>): Promise<void> {
      e.preventDefault();
      if (e.dataTransfer.files.length !== 0) {
        const convertedFiles = await Promise.all(
          [...(e.dataTransfer.files as unknown as File[])].map((file) => {
            setItems((prev) => [
              ...prev,
              {
                name: file.name,
                type: file.type,
                size: `${Math.round((file.size / 1024) * 100) / 100} KB`,
                uri: "",
                lastModified: file.lastModified,
                status: { loading: true as const },
              },
            ]);

            return handleFileConvert(file);
          })
        );
        setItems((prev) => [
          ...prev.filter(
            (item) =>
              !convertedFiles
                .map((file) => file?.lastModified)
                .includes(item.lastModified)
          ),
          ...convertedFiles.map((file) => {
            if (file) {
              return {
                ...file,
                lastModified: file.lastModified,
                uri: `${file.uri}`,
                status:
                  file.uri === "zugross"
                    ? { error: true as const }
                    : { default: true as const },
              };
            }

            return {
              name: "",
              type: "",
              size: "",
              uri: "",
              lastModified: 0,
              status: { loading: true as const },
            };
          }),
        ]);
      }
    }

    useEffect(() => {
      if (onUploadChanged) onUploadChanged(items);
    }, [items, onUploadChanged]);

    return (
      <div className={cn(disabled && "opacity-50")}>
        <Label
          htmlFor={id || "file-uploader-input"}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(ev) => {
            if (!readOnly && !disabled) {
              if (onDropFile) {
                ev.preventDefault();
                onDropFile(ev.dataTransfer.files);
              } else {
                handleDrop(ev).catch((err) => {
                  console.error(err);
                });
              }
            }
          }}
        >
          <Card
            className={cn(
              "w-full flex items-center justify-center py-28 hover:bg-accent/10 transition-all cursor-pointer",
              status === "success" &&
                "border-lime-600 text-lime-600 hover:text-lime-600",
              status === "error" &&
                "border-red-500 text-red-500 hover:text-red-500",
              disabled && "cursor-not-allowed hover:bg-inherit",
              readOnly && "cursor-auto hover:bg-inherit",
              className
            )}
          >
            Drop or click
          </Card>
        </Label>
        <div className="grid gap-2 my-2">
          {files ? (
            <Fragment>
              {files.map((item) => (
                <DisplayedFile
                  key={item.name}
                  lastModified={item.lastModified}
                  name={item.name}
                  onDelete={() => {
                    if (!readOnly && !disabled) {
                      const filteredFiles = files.filter(
                        (prevItem) =>
                          prevItem.lastModified !== item.lastModified
                      );
                      if (onUploadChanged) {
                        onUploadChanged(filteredFiles);
                      } else {
                        console.error("onUploadChanged not found");
                      }
                    }
                  }}
                  size={item.size}
                  status={item.status}
                  type={item.type}
                  uri=""
                />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              {items.map((item) => (
                <DisplayedFile
                  key={item.name}
                  lastModified={item.lastModified}
                  name={item.name}
                  onDelete={() => {
                    if (!readOnly && !disabled) {
                      setItems((prev) =>
                        prev.filter(
                          (prevItem) =>
                            prevItem.lastModified !== item.lastModified
                        )
                      );
                    }
                  }}
                  size={item.size}
                  status={item.status}
                  type={item.type}
                  uri=""
                />
              ))}
            </Fragment>
          )}
          {items.map((item) => (
            <DisplayedFile
              key={item.name}
              lastModified={item.lastModified}
              name={item.name}
              onDelete={() => {
                if (!readOnly && !disabled) {
                  setItems((prev) =>
                    prev.filter(
                      (prevItem) => prevItem.lastModified !== item.lastModified
                    )
                  );
                }
              }}
              size={item.size}
              status={item.status}
              type={item.type}
              uri=""
            />
          ))}
        </div>
        <Input
          className={cn("hidden")}
          disabled={disabled || readOnly}
          id={id || "file-uploader-input"}
          multiple
          onChange={(ev) => {
            if (!readOnly && !disabled) {
              if (onUploadFile) {
                if (ev.target.files && ev.target.files.length !== 0) {
                  onUploadFile(ev.target.files);
                }
              } else {
                handleFile(ev).catch((err) => {
                  console.error(err);
                });
              }
              if (onChange) onChange(ev);
            }
          }}
          ref={ref}
          type="file"
          {...rest}
        />
      </div>
    );
  }
);

FileUploader.displayName = "FileUploader";

export { FileUploader };
