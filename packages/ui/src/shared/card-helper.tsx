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
    <div className="grid grid-cols-[0.5fr_1fr] px-3">
      <div className="flex items-center gap-2 opacity-50">
        {icon}
        <p className="text-sm font-medium">{label}</p>
      </div>
      <p className="text-sm">{name}</p>
    </div>
  );
}

function CardComment({
  comment,
}: {
  comment: { author: string; text: string; createdAt: string };
}): JSX.Element {
  return (
    <div className="grid grid-cols-[36px_1fr] gap-2 px-3">
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-purple-900">
        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-semibold">{comment.author}</p>
          <p className="text-xs opacity-50">{comment.createdAt}</p>
        </div>
        <p className="text-sm">{comment.text}</p>
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
    <div className="grid gap-5 px-3">
      <div className="flex gap-2">
        <p className="text-[0.66rem] opacity-50">Comments</p>
        <p className="text-[0.66rem] font-bold opacity-50">{comments.length}</p>
      </div>
      <ScrollArea className="h-[calc(var(--radix-popover-content-available-height)-10px-350px)]">
        <div className="grid gap-4">
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
    <div className="grid gap-5 px-3">
      <div className="flex gap-2">
        <p className="text-[0.66rem] opacity-50">Comments</p>
        <p className="text-[0.66rem] font-bold opacity-50">{comments.length}</p>
      </div>
      <ScrollArea className="h-[calc(var(--radix-popover-content-available-height)-10px-250px)]">
        <div className="grid gap-4">
          {comments.map((comment) => (
            <CardComment comment={comment} key={comment.createdAt} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
