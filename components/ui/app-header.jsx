import { Cloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export default function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 md:px-6">
      <div className="flex items-center gap-2">
        <Cloud className="h-8 w-8 text-primary" />
        <span className="text-lg font-semibold">clou-D</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative max-w-md">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
          />
        </div>
        <Avatar className="h-8 w-8">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
    </header>
  );
}
