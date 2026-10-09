import { CogIcon } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";

const INTERVAL_DURATION = [
  { label: "5 Seconds", value: 5 },
  { label: "4 Seconds", value: 4 },
  { label: "3 Seconds", value: 3 },
  { label: "2 Seconds", value: 2 },
  { label: "1 Second", value: 1 },
];

export function SettingPopover() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" className="text-gray-50" size="icon" />}>
        <CogIcon />
      </PopoverTrigger>

      <PopoverContent align="end" className="bg-gray-950/60 outline-gray-600/20 outline rounded-md backdrop-blur-sm w-full max-w-md">
        <PopoverHeader>
          <PopoverTitle className="text-gray-50">System & Network Setting</PopoverTitle>
        </PopoverHeader>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col p-2 rounded-sm bg-gray-950/40 outline outline-gray-800/50">
            <h3 className=" text-gray-50">MQTT IoT Broker (TCP 18883)</h3>
            <p className="text-gray-50/60 text-xs">Host is online on 128.x.x.x</p>
          </div>

          <div className="flex flex-col p-2 rounded-sm bg-gray-950/40 outline outline-gray-800/50">
            <h3 className=" text-gray-50">Backend Status</h3>
            <p className="text-gray-50/60 text-xs">Backend is online on https://xxxxxx</p>
          </div>

          <div className="flex flex-col p-2 rounded-sm bg-gray-950/40 outline outline-gray-800/50">
            <div className="flex gap-4 items-center">
              <div>
                <h3 className=" text-gray-50">Telemetry Polling Interval</h3>
                <p className="text-gray-50/60 text-xs">Interval duration for sensor synchronization</p>
              </div>

              <Select items={INTERVAL_DURATION} defaultValue={2}>
                <SelectTrigger className="w-25">
                  <SelectValue className="text-gray-50" />
                </SelectTrigger>

                <SelectContent className="bg-gray-950/40 outline outline-gray-800/50 backdrop-blur-sm">
                  <SelectGroup>
                    <SelectLabel>Interval duration</SelectLabel>
                    {INTERVAL_DURATION.map((duration) => (
                      <SelectItem key={duration.value} value={duration.value} className="text-gray-50">
                        {duration.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
