import type { HTMLAttributes, ReactElement, ReactNode } from "react";
import { forwardRef } from "react";
import { uicn } from "../lib";
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
          <CardContent
            className={uicn("ui-flex ui-gap-2 ui-p-2", cardContentClassName)}
          >
            <Skeleton
              className={uicn(
                "ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted",
                iconContainerClassName,
              )}
            />
            <div
              className={uicn(
                "ui-grid ui-content-center ui-gap-1",
                textContainerClassName,
              )}
            >
              <Skeleton className={uicn("ui-h-4 ui-w-20", headerClassName)} />
              <Skeleton
                className={uicn("ui-h-3 ui-w-36", descriptionClassName)}
              />
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
          className={uicn(
            "ui-flex ui-items-center ui-gap-2 ui-p-2",
            cardContentClassName,
          )}
        >
          <div
            className={uicn(
              "ui-flex ui-h-10 ui-w-10 ui-items-center ui-justify-center ui-rounded-xl ui-bg-muted",
              iconContainerClassName,
            )}
          >
            {Icon ? (
              <Icon.type {...Icon.props} className="ui-h-6 ui-w-6" />
            ) : null}
          </div>
          <div
            className={uicn(
              "ui-grid ui-w-[calc(100%-48px)] ui-content-center",
              textContainerClassName,
            )}
          >
            <p
              className={uicn(
                "ui-truncate ui-text-start ui-text-sm ui-font-semibold",
                headerClassName,
              )}
            >
              {header}
            </p>
            <p
              className={uicn(
                "ui-truncate ui-text-start ui-text-xs ui-opacity-50",
                descriptionClassName,
              )}
            >
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  },
);
DisplayCard.displayName = "DisplayCard";

export { DisplayCard };
