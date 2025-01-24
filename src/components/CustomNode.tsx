import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

function CustomNode({ data }: any) {
  return (
    <  Popover>
      <  PopoverTrigger className="flex flex-col items-center justify-center">
        <div
          className="relative flex h-[52.92px] w-[52.92px] items-center justify-center rounded-full"
          style={{ backgroundColor: data.iconBg }}
        >
          {data.icon}
          {data.badgeIcon && (
            <div
              className={`absolute -top-1 right-2 flex h-4 w-4 items-center justify-center rounded-full`}
              style={{ backgroundColor: data.badgeBg }}
            >
              {data.badgeIcon}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-center text-[13px] font-semibold text-[#525D73]">
            {data.name}
          </span>
          {data.ip && (
            <span className="text-center text-[10px] font-medium">
              {data.ip}
            </span>
          )}
        </div>
      </  PopoverTrigger>

      <  PopoverContent className="rounded-[15px] shadow-md w-fit">{data.info}</  PopoverContent>
      <Handle
        type="target"
        position={Position.Left}
        className="w-16 !bg-teal-500"
      />

      <Handle
        type="source"
        position={Position.Right}
        className="w-16 !bg-teal-500"
      />
    </  Popover>
  );
}

export default memo(CustomNode);
