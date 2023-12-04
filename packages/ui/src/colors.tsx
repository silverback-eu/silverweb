export function Colors(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-stone-300 p-8 rounded-xl border-border border light text-primary">
        <div className="p-4 font-bold text-3xl tracking-tighter ">
          Light Mode:
        </div>
        <div className="bg-stone-300">
          <div className="p-4 font-bold text-xl tracking-tighter">
            Main Colors:
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 mt-2 mb-8">
            <div className="flex gap-2 items-center">
              <div className="bg-warm rounded-sm h-5 w-5" />
              Warm
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-background rounded-sm h-5 w-5" />
              Background
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-foreground rounded-sm h-5 w-5" />
              Foreground
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-primary-foreground rounded-sm h-5 w-5" />
              Primary Foreground
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-primary rounded-sm h-5 w-5" />
              Primary
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-secondary rounded-sm h-5 w-5" />
              Secondary
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-accent rounded-sm h-5 w-5" />
              Accent
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 bg-stone-300">
          <div className="flex gap-2 items-center">
            <div className="bg-primary rounded-sm h-5 w-5" />
            Primary
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-primary-foreground rounded-sm h-5 w-5" />
            Primary Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-secondary rounded-sm h-5 w-5" />
            Secondary
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-secondary-foreground rounded-sm h-5 w-5" />
            Secondary Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-accent rounded-sm h-5 w-5" />
            Accent
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-accent-foreground rounded-sm h-5 w-5" />
            Accent Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-warm rounded-sm h-5 w-5" />
            Warm
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-warm-foreground rounded-sm h-5 w-5" />
            Warm Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-destructive rounded-sm h-5 w-5" />
            Destructive
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-destructive-foreground rounded-sm h-5 w-5" />
            Destructive Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-muted rounded-sm h-5 w-5" />
            Muted
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-muted-foreground rounded-sm h-5 w-5" />
            Muted Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-popover rounded-sm h-5 w-5" />
            Popover
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-popover-foreground rounded-sm h-5 w-5" />
            Popover Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-card rounded-sm h-5 w-5" />
            Card
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-card-foreground rounded-sm h-5 w-5" />
            Card Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-border rounded-sm h-5 w-5" />
            Border
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-input rounded-sm h-5 w-5" />
            Input
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-ring rounded-sm h-5 w-5" />
            Ring
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-background rounded-sm h-5 w-5" />
            Background
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-foreground rounded-sm h-5 w-5" />
            Foreground
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-green-500 rounded-sm h-5 w-5" />
            Success
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-red-500 rounded-sm h-5 w-5" />
            Error
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-yellow-500 rounded-sm h-5 w-5" />
            Warning
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-blue-500 rounded-sm h-5 w-5" />
            Info
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-gray-500 rounded-sm h-5 w-5" />
            Gray
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-slate-500 rounded-sm h-5 w-5" />
            Slate
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-zinc-500 rounded-sm h-5 w-5" />
            Zinc
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-neutral-500 rounded-sm h-5 w-5" />
            Neutral
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-stone-500 rounded-sm h-5 w-5" />
            Stone
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-orange-500 rounded-sm h-5 w-5" />
            Orange
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-amber-500 rounded-sm h-5 w-5" />
            Amber
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-lime-500 rounded-sm h-5 w-5" />
            Lime
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-emerald-500 rounded-sm h-5 w-5" />
            Emerald
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-teal-500 rounded-sm h-5 w-5" />
            Teal
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-cyan-500 rounded-sm h-5 w-5" />
            Cyan
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-sky-500 rounded-sm h-5 w-5" />
            Sky
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-indigo-500 rounded-sm h-5 w-5" />
            Indigo
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-violet-500 rounded-sm h-5 w-5" />
            Violet
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-fuchsia-500 rounded-sm h-5 w-5" />
            Purple
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-pink-500 rounded-sm h-5 w-5" />
            Pink
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-rose-500 rounded-sm h-5 w-5" />
            Rose
          </div>
        </div>
      </div>
      <div className="bg-stone-700 p-8 rounded-xl border-border border dark">
        <div className="p-4 font-bold text-3xl tracking-tighter">
          Dark Mode:
        </div>
        <div className="bg-stone-700">
          <div className="p-4 font-bold text-xl tracking-tighter">
            Main Colors:
          </div>
          <div className="grid grid-cols-2 gap-4 p-4 mt-2 mb-8">
            <div className="flex gap-2 items-center">
              <div className="bg-warm rounded-sm h-5 w-5" />
              Warm
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-background rounded-sm h-5 w-5" />
              Background
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-foreground rounded-sm h-5 w-5" />
              Foreground
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-primary-foreground rounded-sm h-5 w-5" />
              Primary Foreground
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-primary rounded-sm h-5 w-5" />
              Primary
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-secondary rounded-sm h-5 w-5" />
              Secondary
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-accent rounded-sm h-5 w-5" />
              Accent
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 bg-stone-700">
          <div className="flex gap-2 items-center">
            <div className="bg-primary rounded-sm h-5 w-5" />
            Primary
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-primary-foreground rounded-sm h-5 w-5" />
            Primary Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-secondary rounded-sm h-5 w-5" />
            Secondary
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-secondary-foreground rounded-sm h-5 w-5" />
            Secondary Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-accent rounded-sm h-5 w-5" />
            Accent
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-accent-foreground rounded-sm h-5 w-5" />
            Accent Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-warm rounded-sm h-5 w-5" />
            Warm
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-warm-foreground rounded-sm h-5 w-5" />
            Warm Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-destructive rounded-sm h-5 w-5" />
            Destructive
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-destructive-foreground rounded-sm h-5 w-5" />
            Destructive Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-muted rounded-sm h-5 w-5" />
            Muted
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-muted-foreground rounded-sm h-5 w-5" />
            Muted Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-popover rounded-sm h-5 w-5" />
            Popover
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-popover-foreground rounded-sm h-5 w-5" />
            Popover Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-card rounded-sm h-5 w-5" />
            Card
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-card-foreground rounded-sm h-5 w-5" />
            Card Foreground
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-border rounded-sm h-5 w-5" />
            Border
          </div>

          <div className="flex gap-2 items-center">
            <div className="bg-input rounded-sm h-5 w-5" />
            Input
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-ring rounded-sm h-5 w-5" />
            Ring
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-background rounded-sm h-5 w-5" />
            Background
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-foreground rounded-sm h-5 w-5" />
            Foreground
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-green-500 rounded-sm h-5 w-5" />
            Success
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-red-500 rounded-sm h-5 w-5" />
            Error
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-yellow-500 rounded-sm h-5 w-5" />
            Warning
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-blue-500 rounded-sm h-5 w-5" />
            Info
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-gray-500 rounded-sm h-5 w-5" />
            Gray
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-slate-500 rounded-sm h-5 w-5" />
            Slate
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-zinc-500 rounded-sm h-5 w-5" />
            Zinc
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-neutral-500 rounded-sm h-5 w-5" />
            Neutral
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-stone-500 rounded-sm h-5 w-5" />
            Stone
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-orange-500 rounded-sm h-5 w-5" />
            Orange
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-amber-500 rounded-sm h-5 w-5" />
            Amber
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-lime-500 rounded-sm h-5 w-5" />
            Lime
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-emerald-500 rounded-sm h-5 w-5" />
            Emerald
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-teal-500 rounded-sm h-5 w-5" />
            Teal
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-cyan-500 rounded-sm h-5 w-5" />
            Cyan
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-sky-500 rounded-sm h-5 w-5" />
            Sky
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-indigo-500 rounded-sm h-5 w-5" />
            Indigo
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-violet-500 rounded-sm h-5 w-5" />
            Violet
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-fuchsia-500 rounded-sm h-5 w-5" />
            Purple
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-pink-500 rounded-sm h-5 w-5" />
            Pink
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-rose-500 rounded-sm h-5 w-5" />
            Rose
          </div>
        </div>
      </div>
    </div>
  );
}
