import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <div>
      <Card className="w-[300px]">
        <CardContent className="p-4">
          <div className="bg-gray-500 w-[268px] h-[268px] rounded-lg overflow-hidden" >
            <Image className="duration-500 object-cover transition-all hover:scale-105" src="https://ui.shadcn.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&w=384&q=75" width={268} height={268} alt="Mall of Scandinavia" />
          </div>
          <div className="text-lg font-bold mt-3 line-clamp-1">Mall of Scandinavia</div>
          <Button variant={"link"} className="p-0 h-auto text-ellipsis">
            Commercial
          </Button>
          <div className="text-sm font-bold opacity-70 line-clamp-1">
            Stockholm, Sweden
          </div>
          <div className="text-sm text-muted-foreground line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
