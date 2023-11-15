import type { ReactElement } from "react";
import { forwardRef } from "react";
import { Card, CardContent } from "./card";

interface DisplayCardProps {
  Icon?: ReactElement;
  header?: string;
  description?: string;
  className?: string;
}

const DisplayCard = forwardRef<HTMLDivElement, DisplayCardProps>(
  ({ Icon, description, header, className }, ref): JSX.Element => {
    return (
      <Card className={className} ref={ref}>
        <CardContent className="p-2 flex gap-2 items-center">
          <div className="flex justify-center items-center bg-muted rounded-xl h-10 w-10">
            {Icon ? <Icon.type {...Icon.props} className="h-6 w-6" /> : null}
          </div>
          <div className="grid content-center w-[calc(100%-40px)]">
            <p className="text-sm font-semibold text-start truncate">
              {header}
            </p>
            <p className="text-xs opacity-50 text-start truncate">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
);

DisplayCard.displayName = "DisplayCard";

export { DisplayCard };
