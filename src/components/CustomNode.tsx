import React, { ReactNode, memo } from "react";
import { Handle, Position } from "@xyflow/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DataItem = {
  id: string;
  name: string;
  icon: ReactNode;
  iconBg: string;
  badgeIcon: ReactNode;
  badgeBg: string;
  info: ReactNode;
  ip?: string;
};

function CustomNode({ data }: { data: DataItem }) {
  return (
    <Popover>
      <PopoverTrigger className="flex flex-col items-center justify-center">
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
          <span className="text-center text-13 font-semibold text-gray-soft-700">
            {data.name}
          </span>
          {data.ip && (
            <span className="text-center text-10 text-gray-soft-500 font-medium">
              {data.ip}
            </span>
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-fit rounded-[15px] shadow-md">
        {data.info}
      </PopoverContent>
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
    </Popover>
  );
}

export default memo(CustomNode);
