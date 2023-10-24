import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CardPopoverItem({
  icon,
  label,
  name,
}: {
  icon: React.JSX.Element;
  label: string;
  name: string;
}) {
  return (
    <div className="grid grid-cols-[0.5fr_1fr] px-3">
      <div className="flex gap-2 items-center opacity-50">
        {icon}
        <p className="text-sm font-medium">{label}</p>
      </div>
      <p className="text-sm">{name}</p>
    </div>
  );
}

export function CompanyCardCommentSection({
  comments,
}: {
  comments: { author: string; text: string; createdAt: string }[];
}) {
  return (
    <div className="px-3 gap-5 grid">
      <div className="flex gap-2">
        <p className="text-[0.66rem] opacity-50">Comments</p>
        <p className="font-bold text-[0.66rem] opacity-50">{comments.length}</p>
      </div>
      <ScrollArea className="h-[calc(var(--radix-popover-content-available-height)-10px-350px)]">
        <div className="grid gap-4">
          {comments.map((comment, idx) => (
            <CardComment key={idx} comment={comment} />
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
}) {
  return (
    <div className="px-3 gap-5 grid">
      <div className="flex gap-2">
        <p className="text-[0.66rem] opacity-50">Comments</p>
        <p className="font-bold text-[0.66rem] opacity-50">{comments.length}</p>
      </div>
      <ScrollArea className="h-[calc(var(--radix-popover-content-available-height)-10px-250px)]">
        <div className="grid gap-4">
          {comments.map((comment, idx) => (
            <CardComment key={idx} comment={comment} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

function CardComment({
  comment,
}: {
  comment: { author: string; text: string; createdAt: string };
}) {
  return (
    <div className="px-3 grid grid-cols-[36px_1fr] gap-2">
      <div className="relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full items-center justify-center bg-purple-900">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
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
