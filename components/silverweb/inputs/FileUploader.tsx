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
import React, { ChangeEvent, DragEvent, forwardRef, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type FileIconProps = {
  name: string;
  // eslint-disable-next-line react/no-unused-prop-types
  lastModified: number;
  // eslint-disable-next-line react/no-unused-prop-types
  uri: string;
  type: string;
  size: string;
};

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
}) {
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

  return (
    <Card>
      <CardContent
        className={cn("p-2 flex justify-between items-center", status.loading && "animate-pulse")}
      >
        <div className="flex gap-2 w-[calc(100%-36px)] items-center">
          <div className="flex justify-center items-center bg-muted rounded-xl h-8 w-8">
            {status.loading ? (
              <RotateCw size={16} className="animate-spin" />
            ) : status.error ? (
              <div className="relative">
                <X size={16} className="absolute text-red-500 animate-[ping_1s_ease-in-out]" />
                <X size={16} className="text-red-500" />
              </div>
            ) : (
              FileIcon
            )}
          </div>
          <div className="grid content-center w-[calc(100%-32px-16px)]">
            <p
              className={cn(
                "text-sm font-semibold text-start truncate",
                status.error && "text-red-500",
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
          variant="link"
          size="icon"
          className={cn(status.loading && "cursor-wait")}
          disabled={status.loading}
          onClick={() => {
            if (onDelete) onDelete();
          }}
        >
          <X size={16} />
        </Button>
      </CardContent>
    </Card>
  );
}

export interface FileUploaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  status?: "success" | "error" | "default";
  defaultItems?: Array<FileIconProps>;
  onUploadChanged?: (items: Array<FileIconProps>) => void;
}

const FileUploader = forwardRef<HTMLInputElement, FileUploaderProps>((props, ref) => {
  const {
    className,
    status,
    defaultItems,
    readOnly,
    disabled,
    onUploadChanged,
    onChange,
    id,
    ...rest
  } = props;

  const [items, setItems] = React.useState<
    Array<
      FileIconProps & {
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
    >
  >(defaultItems?.map((item) => ({ ...item, status: { default: true } })) || []);

  async function handleFileConvert(file: File | null) {
    if (!file) return null;

    const fileString =
      file.size < 1024 * 1024 * 5
        ? await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
          })
        : "zugross";

    return {
      name: file.name,
      uri: fileString,
      lastModified: file.lastModified,
      type: file.type,
      size: `${Math.round((file.size / 1024) * 100) / 100} KB`,
    };
  }

  // File input via click
  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length !== 0) {
      const convertedFiles = await Promise.all(
        [...(e.target.files as unknown as Array<File>)].map((file) => {
          setItems((prev) => [
            ...prev,
            {
              name: file.name,
              type: file.type,
              size: `${Math.round((file.size / 1024) * 100) / 100} KB`,
              uri: "",
              lastModified: file.lastModified,
              status: { loading: true as true },
            },
          ]);

          return handleFileConvert(file);
        }),
      );
      setItems((prev) => [
        ...prev.filter(
          (item) => !convertedFiles.map((file) => file?.lastModified).includes(item.lastModified),
        ),
        ...convertedFiles.map((file) => {
          if (file) {
            return {
              ...file,
              lastModified: file.lastModified,
              uri: `${file.uri}`,
              status: file.uri === "zugross" ? { error: true as true } : { default: true as true },
            };
          }

          return {
            name: "",
            type: "",
            size: "",
            uri: "",
            lastModified: 0,
            status: { loading: true as true },
          };
        }),
      ]);
    }
  }
  // File input via drop
  async function handleDrop(e: DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    if (e.dataTransfer.files.length !== 0) {
      const convertedFiles = await Promise.all(
        [...(e.dataTransfer.files as unknown as Array<File>)].map((file) => {
          setItems((prev) => [
            ...prev,
            {
              name: file.name,
              type: file.type,
              size: `${Math.round((file.size / 1024) * 100) / 100} KB`,
              uri: "",
              lastModified: file.lastModified,
              status: { loading: true as true },
            },
          ]);

          return handleFileConvert(file);
        }),
      );
      setItems((prev) => [
        ...prev.filter(
          (item) => !convertedFiles.map((file) => file?.lastModified).includes(item.lastModified),
        ),
        ...convertedFiles.map((file) => {
          if (file) {
            return {
              ...file,
              lastModified: file.lastModified,
              uri: `${file.uri}`,
              status: file.uri === "zugross" ? { error: true as true } : { default: true as true },
            };
          }

          return {
            name: "",
            type: "",
            size: "",
            uri: "",
            lastModified: 0,
            status: { loading: true as true },
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
        onDrop={(ev) => {
          if (!readOnly && !disabled) handleDrop(ev);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        <Card
          className={cn(
            "w-full flex items-center justify-center py-28 hover:bg-accent/10 transition-all cursor-pointer",
            status === "success" && "border-lime-600 text-lime-600 hover:text-lime-600",
            status === "error" && "border-red-500 text-red-500 hover:text-red-500",
            disabled && "cursor-not-allowed hover:bg-inherit",
            readOnly && "cursor-auto hover:bg-inherit",
            className,
          )}
        >
          Drop or click
        </Card>
      </Label>
      <div className="grid gap-2 my-2">
        {items.map((item) => (
          <DisplayedFile
            key={item.name}
            name={item.name}
            type={item.type}
            size={item.size}
            uri=""
            lastModified={item.lastModified}
            status={item.status}
            onDelete={() => {
              if (!readOnly && !disabled) {
                setItems((prev) =>
                  prev.filter((prevItem) => prevItem.lastModified !== item.lastModified),
                );
              }
            }}
          />
        ))}
      </div>
      <Input
        id={id || "file-uploader-input"}
        type="file"
        multiple
        disabled={disabled || readOnly}
        onChange={(ev) => {
          if (!readOnly && !disabled) {
            handleFile(ev);
            if (onChange) onChange(ev);
          }
        }}
        className={cn("hidden")}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

FileUploader.displayName = "FileUploader";

export default FileUploader;
