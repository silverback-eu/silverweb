import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ScrollArea } from "./scroll-area";

export function CardPopoverItem({
  icon,
  label,
  name,
}: {
  icon: JSX.Element;
  label: string;
  name: string;
}): JSX.Element {
  return (
    <div className="ui-grid ui-grid-cols-[0.5fr_1fr] ui-px-3">
      <div className="ui-flex ui-items-center ui-gap-2 ui-opacity-50">
        {icon}
        <p className="ui-text-sm ui-font-medium">{label}</p>
      </div>
      <p className="ui-text-sm">{name}</p>
    </div>
  );
}

function CardComment({
  comment,
}: {
  comment: { author: string; text: string; createdAt: string };
}): JSX.Element {
  return (
    <div className="ui-grid ui-grid-cols-[36px_1fr] ui-gap-2 ui-px-3">
      <div className="ui-relative ui-flex ui-h-9 ui-w-9 ui-shrink-0 ui-items-center ui-justify-center ui-overflow-hidden ui-rounded-full ui-bg-purple-900">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="ui-flex ui-justify-between">
          <p className="ui-text-sm ui-font-semibold">{comment.author}</p>
          <p className="ui-text-xs ui-opacity-50">{comment.createdAt}</p>
        </div>
        <p className="ui-text-sm">{comment.text}</p>
      </div>
    </div>
  );
}

export function CompanyCardCommentSection({
  comments,
}: {
  comments: { author: string; text: string; createdAt: string }[];
}): JSX.Element {
  return (
    <div className="ui-grid ui-gap-5 ui-px-3">
      <div className="ui-flex ui-gap-2">
        <p className="ui-text-[0.66rem] ui-opacity-50">Comments</p>
        <p className="ui-text-[0.66rem] ui-font-bold ui-opacity-50">
          {comments.length}
        </p>
      </div>
      <ScrollArea className="ui-h-[calc(var(--radix-popover-content-available-height)-10px-350px)]">
        <div className="ui-grid ui-gap-4">
          {comments.map((comment) => (
            <CardComment comment={comment} key={comment.createdAt} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export function ContactCardCommentSection({
  comments,
}: {
  comments: { author: string; text: string; createdAt: string }[];
}): JSX.Element {
  return (
    <div className="ui-grid ui-gap-5 ui-px-3">
      <div className="ui-flex ui-gap-2">
        <p className="ui-text-[0.66rem] ui-opacity-50">Comments</p>
        <p className="ui-text-[0.66rem] ui-font-bold ui-opacity-50">
          {comments.length}
        </p>
      </div>
      <ScrollArea className="ui-h-[calc(var(--radix-popover-content-available-height)-10px-250px)]">
        <div className="ui-grid ui-gap-4">
          {comments.map((comment) => (
            <CardComment comment={comment} key={comment.createdAt} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
