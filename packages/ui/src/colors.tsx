export function Colors(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="light rounded-xl border border-border bg-stone-300 p-8 text-primary">
        <div className="p-4 text-3xl font-bold tracking-tighter ">
          Light Mode:
        </div>
        <div className="bg-stone-300">
          <div className="p-4 text-xl font-bold tracking-tighter">
            Main Colors:
          </div>
          <div className="mb-8 mt-2 grid grid-cols-2 gap-4 p-4">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-warm" />
              Warm
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-background" />
              Background
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-foreground" />
              Foreground
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-primary-foreground" />
              Primary Foreground
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-primary" />
              Primary
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-secondary" />
              Secondary
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-accent" />
              Accent
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-stone-300 p-4">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-primary" />
            Primary
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-primary-foreground" />
            Primary Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-secondary" />
            Secondary
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-secondary-foreground" />
            Secondary Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-accent" />
            Accent
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-accent-foreground" />
            Accent Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-warm" />
            Warm
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-warm-foreground" />
            Warm Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-destructive" />
            Destructive
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-destructive-foreground" />
            Destructive Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-muted" />
            Muted
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-muted-foreground" />
            Muted Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-popover" />
            Popover
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-popover-foreground" />
            Popover Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-card" />
            Card
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-card-foreground" />
            Card Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-border" />
            Border
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-input" />
            Input
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-ring" />
            Ring
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-background" />
            Background
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-foreground" />
            Foreground
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-green-500" />
            Success
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-red-500" />
            Error
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-yellow-500" />
            Warning
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-blue-500" />
            Info
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-gray-500" />
            Gray
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-slate-500" />
            Slate
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-zinc-500" />
            Zinc
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-neutral-500" />
            Neutral
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-stone-500" />
            Stone
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-orange-500" />
            Orange
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-amber-500" />
            Amber
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-lime-500" />
            Lime
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-emerald-500" />
            Emerald
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-teal-500" />
            Teal
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-cyan-500" />
            Cyan
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-sky-500" />
            Sky
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-indigo-500" />
            Indigo
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-violet-500" />
            Violet
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-fuchsia-500" />
            Purple
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-pink-500" />
            Pink
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-rose-500" />
            Rose
          </div>
        </div>
      </div>
      <div className="dark rounded-xl border border-border bg-stone-700 p-8">
        <div className="p-4 text-3xl font-bold tracking-tighter">
          Dark Mode:
        </div>
        <div className="bg-stone-700">
          <div className="p-4 text-xl font-bold tracking-tighter">
            Main Colors:
          </div>
          <div className="mb-8 mt-2 grid grid-cols-2 gap-4 p-4">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-warm" />
              Warm
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-background" />
              Background
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-foreground" />
              Foreground
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-primary-foreground" />
              Primary Foreground
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-primary" />
              Primary
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-secondary" />
              Secondary
            </div>

            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-sm bg-accent" />
              Accent
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-stone-700 p-4">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-primary" />
            Primary
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-primary-foreground" />
            Primary Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-secondary" />
            Secondary
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-secondary-foreground" />
            Secondary Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-accent" />
            Accent
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-accent-foreground" />
            Accent Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-warm" />
            Warm
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-warm-foreground" />
            Warm Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-destructive" />
            Destructive
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-destructive-foreground" />
            Destructive Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-muted" />
            Muted
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-muted-foreground" />
            Muted Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-popover" />
            Popover
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-popover-foreground" />
            Popover Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-card" />
            Card
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-card-foreground" />
            Card Foreground
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-border" />
            Border
          </div>

          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-input" />
            Input
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-ring" />
            Ring
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-background" />
            Background
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-foreground" />
            Foreground
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-green-500" />
            Success
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-red-500" />
            Error
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-yellow-500" />
            Warning
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-blue-500" />
            Info
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-gray-500" />
            Gray
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-slate-500" />
            Slate
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-zinc-500" />
            Zinc
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-neutral-500" />
            Neutral
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-stone-500" />
            Stone
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-orange-500" />
            Orange
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-amber-500" />
            Amber
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-lime-500" />
            Lime
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-emerald-500" />
            Emerald
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-teal-500" />
            Teal
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-cyan-500" />
            Cyan
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-sky-500" />
            Sky
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-indigo-500" />
            Indigo
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-violet-500" />
            Violet
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-fuchsia-500" />
            Purple
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-pink-500" />
            Pink
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-rose-500" />
            Rose
          </div>
        </div>
      </div>
    </div>
  );
}
