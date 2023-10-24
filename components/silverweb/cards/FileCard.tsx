import { format } from "date-fns";
import {
  Calendar,
  File,
  FileArchive,
  FileImage,
  FilePieChart,
  FileSpreadsheet,
  FileText,
  FileType,
  FileVideo,
  Ruler,
} from "lucide-react";
import React from "react";

import { CardPopoverItem } from "./Tools";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export default function FileCard({
  info,
}: {
  info: {
    name: string;
    type: string;
    size: string;
    lastModified: number;
    uri: string;
  };
}) {
  let FileIcon = <FileText size={24} />;

  switch (info.type) {
    case "text/plain":
      FileIcon = <FileType size={24} />;
      break;
    case "application/pdf":
      FileIcon = <FileText size={24} />;
      break;
    case "image/png":
      FileIcon = <FileImage size={24} />;
      break;
    case "image/jpeg":
      FileIcon = <FileImage size={24} />;
      break;
    case "application/msword":
      FileIcon = <FileText size={24} />;
      break;
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      FileIcon = <FileText size={24} />;
      break;
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      FileIcon = <FileSpreadsheet size={24} />;
      break;
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      FileIcon = <FilePieChart size={24} />;
      break;
    case "text/csv":
      FileIcon = <FileSpreadsheet size={24} />;
      break;
    case "image/svg+xml":
      FileIcon = <FileImage size={24} />;
      break;
    case "application/zip":
      FileIcon = <FileArchive size={24} />;
      break;
    case "video/mp4":
      FileIcon = <FileVideo size={24} />;
      break;
    case "video/mpeg":
      FileIcon = <FileVideo size={24} />;
      break;
    default:
      FileIcon = <File size={24} />;
      break;
  }

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <Card>
          <CardContent className="p-2 flex gap-2">
            <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
              {FileIcon}
            </div>
            <div className="grid content-center w-[calc(100%-40px)]">
              <p className="text-sm font-semibold text-start truncate">
                {info.name}
              </p>
              <p className="text-xs opacity-50 text-start truncate">
                {info.type}
              </p>
            </div>
          </CardContent>
        </Card>
      </PopoverTrigger>
      <PopoverContent className="grid gap-3 w-[280px]">
        <div className="flex justify-between px-3">
          <div className="grid content-center">
            <p className="text-sm font-semibold text-start truncate">
              {info.name}
            </p>
            <p className="text-xs opacity-50 text-start truncate">
              {info.type}
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              const link = document.createElement("a");
              link.setAttribute("href", info.uri);
              link.setAttribute("download", info.name);
              link.style.display = "none";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Load
          </Button>
        </div>
        <Separator />
        <CardPopoverItem
          icon={<Ruler size={14} />}
          label="Size"
          name={info.size}
        />
        <CardPopoverItem
          icon={<Calendar size={14} />}
          label="Date"
          name={format(
            new Date(info.lastModified || Date.now()),
            "MMM dd, yyyy",
          )}
        />
      </PopoverContent>
    </Popover>
  );
}
