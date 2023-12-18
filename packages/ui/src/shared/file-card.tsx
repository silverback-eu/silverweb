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
import dayjs from "dayjs";
import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { CardPopoverItem } from "./card-helper";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Separator } from "./separator";
import { DisplayCard } from "./display-card";

type FileCardProps = HTMLAttributes<HTMLDivElement> &
  (
    | {
        info: {
          name: string;
          type: string;
          size: string;
          lastModified: number;
          url: string;
        };
      }
    | { loading: true }
  );

const FileCard = forwardRef<HTMLDivElement, FileCardProps>((props, ref) => {
  if ("loading" in props) {
    const { className, ...rest } = props;
    return <DisplayCard {...rest} className={className} loading ref={ref} />;
  }
  const { info, className, ...rest } = props;
  let FileIcon = <FileText />;

  switch (info.type) {
    case "text/plain":
      FileIcon = <FileType />;
      break;
    case "application/pdf":
      FileIcon = <FileText />;
      break;
    case "image/png":
      FileIcon = <FileImage />;
      break;
    case "image/jpeg":
      FileIcon = <FileImage />;
      break;
    case "application/msword":
      FileIcon = <FileText />;
      break;
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      FileIcon = <FileText />;
      break;
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      FileIcon = <FileSpreadsheet />;
      break;
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      FileIcon = <FilePieChart />;
      break;
    case "text/csv":
      FileIcon = <FileSpreadsheet />;
      break;
    case "image/svg+xml":
      FileIcon = <FileImage />;
      break;
    case "application/zip":
      FileIcon = <FileArchive />;
      break;
    case "video/mp4":
      FileIcon = <FileVideo />;
      break;
    case "video/mpeg":
      FileIcon = <FileVideo />;
      break;
    default:
      FileIcon = <File />;
      break;
  }
  return (
    <Popover>
      <PopoverTrigger className="ui-w-full">
        <DisplayCard
          ref={ref}
          {...rest}
          Icon={FileIcon}
          className={className}
          description={info.type}
          header={info.name}
        />
      </PopoverTrigger>
      <PopoverContent className="ui-grid ui-w-[280px] ui-gap-3">
        <div className="ui-flex ui-justify-between ui-px-3">
          <div className="ui-grid ui-content-center">
            <p className="ui-truncate ui-text-start ui-text-sm ui-font-semibold">
              {info.name}
            </p>
            <p className="ui-truncate ui-text-start ui-text-xs ui-opacity-50">
              {info.type}
            </p>
          </div>
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.setAttribute("href", info.url);
              link.setAttribute("download", info.name);
              link.style.display = "none";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            size="sm"
            variant="secondary"
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
          name={dayjs(new Date(info.lastModified)).format("MMM DD, YYYY")}
        />
      </PopoverContent>
    </Popover>
  );
});

FileCard.displayName = "FileCard";

export { FileCard };
