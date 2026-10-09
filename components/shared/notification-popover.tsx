import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { BellIcon } from "lucide-react";
import { Button } from "../ui/button";

export function NotificationPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="icon" className="text-gray-50" />}>
        <BellIcon />
      </PopoverTrigger>

      <PopoverContent align="end" className="bg-gray-950/60 outline-gray-600/20 outline rounded-md backdrop-blur-sm">
        <PopoverHeader>
          <PopoverTitle className="text-gray-50">Notifications</PopoverTitle>
          <PopoverDescription className="text-gray-50/70">See what youre missing</PopoverDescription>
        </PopoverHeader>

        <div className="p-2 border rounded-md border-dashed border-gray-50/20">
          <div className="min-h-30 flex items-center justify-center">
            <p className="text-center text-gray-50/50">You are all caught up</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
