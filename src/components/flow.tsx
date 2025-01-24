"use client";
import { ReactFlow, Position, Controls } from "@xyflow/react";
import CustomNode from "./CustomNode";
import { File } from "@/components/icons";

import "@xyflow/react/dist/style.css";
import { Server, ShieldX, Users, VenetianMask } from "lucide-react";
import { useCallback, useState } from "react";

const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

const nodeTypes = {
  custom: CustomNode,
};

const InfoOne = () => {
  return (
    <div>
      <div>
        <span className="text-semibold bg-[#FFF1F0] pr-2 text-[13px] font-semibold text-[#E5372B]">
          Lorem Ipsum Dolor Sit
        </span>

        {/* Grid Items */}
        <div className="ml-4 mt-3 grid grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="text-semibold bg-[#FFF1F0] pr-2 text-[13px] font-semibold text-[#E5372B]"
            >
              1.2.3.4
            </div>
          ))}
        </div>

        {/* Highlighted Item */}
        <div className="text-semibold mt-3 w-fit bg-[#F2EDFF] pr-2 text-[13px] font-semibold text-[#6236CC]">
          Lorem: 1.2.3.4
        </div>
      </div>
    </div>
  );
};

const InfoTwo = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex size-[39px] items-center justify-center rounded-full bg-[#ECF5FF]">
          <Server size={19} color="#6236CC" />
        </div>
        <h3 className="ml-3 text-[13px] font-semibold text-gray-800">
          Loremipsu
        </h3>
      </div>

      <p className="mt-[5px] flex items-center gap-2 text-[15px]">
        <File />
        <span className="font-bold text-[#525D73]">Lorem:</span> Loremipsum
        Loremipsum
        <span className="ml-2 bg-[#F2EDFF] font-bold text-[#6236CC]">
          1.2.3.4
        </span>
      </p>

      <div className="mt-[5px] flex flex-wrap gap-2">
        {["1.2.3.4", "Loremipsum", "1.2.3.4", "1.2.3.4"].map((tag, index) => (
          <span
            key={index}
            className="text-semibold mt-3 w-fit bg-[#F2EDFF] pr-2 text-[13px] font-semibold text-[#6236CC]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const InfoFour = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="relative flex size-[39px] items-center justify-center rounded-full bg-[#ECF5FF]">
          <Server size={19} color="#6236CC" />

          <div
            className={`absolute -top-1 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C6190D]`}
          >
            <ShieldX size={10} color="#fff" />
          </div>
        </div>
        <h3 className="ml-3 text-[13px] font-semibold text-gray-800">
          Loremipsu
        </h3>
      </div>

      <p className="mt-[5px] flex items-center gap-2 text-[15px]">
        <File />
        <span className="font-bold text-[#525D73]">Lorem:</span>
        <span className="ml-2 bg-[#FFF9ED] font-bold text-[#EBA622]">
          1.2.3.4
        </span>
      </p>

      <div className="mt-[5px] flex flex-wrap gap-2">
        {["1.2.3.4", "Loremipsum", "1.2.3.4", "1.2.3.4"].map((tag, index) => (
          <span
            key={index}
            className="text-semibold mt-3 w-fit bg-[#F2EDFF] pr-2 text-[13px] font-semibold text-[#6236CC]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const initialNodes = [
  {
    id: "1",
    data: {
      id: "1",
      name: "Loremipsumm",
      icon: <VenetianMask size={26} color="#C6190D" />,
      iconBg: "#FFF1F0",
      badgeIcon: <Users size={10} color="#fff" />,
      badgeBg: "#6236CC",
      info: <InfoOne />,
    },
    type: "custom",
    position: { x: 50, y: 50 },
    sourceHandle: "right",
    ...nodeDefaults,
  },
  {
    id: "2",
    data: {
      id: "2",
      name: "Loremipsu",
      icon: <Server size={26} color="#6236CC" />,
      iconBg: "#ECF5FF",
      info: <InfoTwo />,
    },
    type: "custom",
    position: { x: 250, y: 50 },
    ...nodeDefaults,
  },
  {
    id: "3",
    data: {
      id: "3",
      name: "Loremipsu",
      icon: <Server size={26} color="#6236CC" />,
      iconBg: "#ECF5FF",
      info: <InfoTwo />,
    },
    type: "custom",
    position: { x: 450, y: 50 },
    ...nodeDefaults,
  },
  {
    id: "4",
    data: {
      id: "4",
      name: "Loremipsumdolorsit",
      icon: <Server size={26} color="#6236CC" />,
      iconBg: "#ECF5FF",
      badgeIcon: <ShieldX size={10} color="#fff" />,
      badgeBg: "#C6190D",
      ip: "192.168.1.1",
      info: <InfoFour />,
    },
    type: "custom",
    position: { x: 650, y: 0 },

    ...nodeDefaults,
  },
  {
    id: "5",
    data: {
      id: "5",
      name: "Loremipsumdolorsit002",
      icon: <Server size={26} color="#6236CC" />,
      iconBg: "#ECF5FF",
      badgeIcon: <ShieldX size={10} color="#fff" />,
      badgeBg: "#C6190D",
      ip: "192.168.1.1",
      info: <InfoFour />,
    },
    type: "custom",
    position: { x: 650, y: 100 },
    ...nodeDefaults,
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
];

function Flow() {
  const [isResponsive, setIsResponsive] = useState(false);

  const onResize = useCallback(() => {
    setIsResponsive(window.innerWidth < 768);
  }, []);

  useState(() => {
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <div className={`w-full ${isResponsive ? "h-[50vh]" : "h-[30vh]"}`}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        fitView
        fitViewOptions={{
          padding: 0.5,
        }}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
