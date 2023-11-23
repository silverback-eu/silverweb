import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./card";
import { Skeleton } from "./skeleton";

type DisplayCardProps = {
  className?: string;
  Icon?: ReactElement;
  cardContentClassName?: string;
  iconContainerClassName?: string;
  textContainerClassName?: string;
  headerClassName?: string;
  descriptionClassName?: string;
} & HTMLAttributes<HTMLDivElement> &
  ({ header: ReactNode; description: ReactNode } | { loading: true });

const DisplayCard = forwardRef<HTMLDivElement, DisplayCardProps>(
  (props, ref) => {
    if ("loading" in props) {
      const {
        cardContentClassName,
        iconContainerClassName,
        textContainerClassName,
        headerClassName,
        descriptionClassName,
        ...rest
      } = props;
      return (
        <Card ref={ref} {...rest}>
          <CardContent className={cn("p-2 flex gap-2", cardContentClassName)}>
            <Skeleton
              className={cn(
                "flex justify-center items-center bg-muted rounded-xl h-10 w-10",
                iconContainerClassName
              )}
            />
            <div
              className={cn(
                "grid content-center gap-1",
                textContainerClassName
              )}
            >
              <Skeleton className={cn("h-4 w-20", headerClassName)} />
              <Skeleton className={cn("h-3 w-36", descriptionClassName)} />
            </div>
          </CardContent>
        </Card>
      );
    }
    const {
      Icon,
      className,
      header,
      description,
      cardContentClassName,
      iconContainerClassName,
      textContainerClassName,
      headerClassName,
      descriptionClassName,
      ...rest
    } = props;
    return (
      <Card className={className} ref={ref} {...rest}>
        <CardContent
          className={cn("p-2 flex gap-2 items-center", cardContentClassName)}
        >
          <div
            className={cn(
              "flex justify-center items-center bg-muted rounded-xl h-10 w-10",
              iconContainerClassName
            )}
          >
            {Icon ? <Icon.type {...Icon.props} className="h-6 w-6" /> : null}
          </div>
          <div
            className={cn(
              "grid content-center w-[calc(100%-40px)]",
              textContainerClassName
            )}
          >
            <p
              className={cn(
                "text-sm font-semibold text-start truncate",
                headerClassName
              )}
            >
              {header}
            </p>
            <p
              className={cn(
                "text-xs opacity-50 text-start truncate",
                descriptionClassName
              )}
            >
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
