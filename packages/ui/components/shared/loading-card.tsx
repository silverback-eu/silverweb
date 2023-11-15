import { Card, CardContent } from "./card";
import { Skeleton } from "./skeleton";

export function LoadingCard(): JSX.Element {
  return (
    <Card>
      <CardContent className="p-2 flex gap-2">
        <Skeleton className="flex justify-center items-center bg-muted rounded-xl h-10 w-10" />
        <div className="grid content-center gap-1">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-3 w-36" />
        </div>
      </CardContent>
    </Card>
  );
}
