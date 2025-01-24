"use client";

import React, { FC } from "react";
import { Separator } from "@/components/ui/separator";
import { Server, ShieldX, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Flow from "@/components/flow";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import ContextualRisk from "@/components/RiskCard";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

interface InfoItemProps {
  label: string;
  value: string | React.ReactNode;
}

interface Asset {
  name: string;
  ip: string;
  risk: "Critical" | "Medium" | "Low";
}

const assets: Asset[] = [
  { name: "Loremipsumdolorsit", ip: "192.168.1.1", risk: "Critical" },
  { name: "Loremipsumdolorsit002", ip: "192.168.1.2", risk: "Critical" },
  { name: "Loremipsumdolorsit003", ip: "192.168.1.3", risk: "Low" },
  { name: "Loremipsumdolorsit004", ip: "192.168.1.4", risk: "Medium" },
];

const Badge: FC<{ risk: Asset["risk"] }> = ({ risk }) => {
  const colors = {
    Critical: "bg-[#FFE2E0] text-[#C6190D]",
    Medium: "bg-yellow-500 text-white",
    Low: "bg-green-500 text-white",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-[13px] font-bold md:px-4 md:text-[15px] ${colors[risk]}`}
    >
      {risk}
    </span>
  );
};

const Section: FC<SectionProps> = ({ title, children, className = "" }) => (
  <div className={className}>
    <h1 className="text-xl font-bold text-[#02983E]">{title}</h1>
    <div className="mt-3 text-xs leading-[21px] text-gray-500">{children}</div>
  </div>
);

const InfoItem: FC<InfoItemProps> = ({ label, value }) => (
  <div className="mb-3 mt-3 flex items-center justify-between">
    <p className="text-[15px] font-bold text-[#334155]">{label}</p>
    <span className="text-[15px] text-[#525D73]">{value}</span>
  </div>
);

const ServerCard: FC = () => (
  <Accordion type="single" collapsible className="w-full">
    <div className="mt-3 rounded-md bg-white px-[18px] py-[13px] shadow-md">
      <p className="text-[15px] font-bold">Lorem P</p>
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="mt-3 flex items-center rounded-md bg-[#FAFAFA] px-4 py-1.5">
          <div className="flex flex-1 items-center gap-2 border-r">
            <div
              className="flex items-center justify-center rounded-full bg-[#ECF5FF]"
              style={{ width: "53px", height: "53px" }}
            >
              <Server size={26} color="#6236CC" />
            </div>
            <div>
              <span className="text-xs font-bold">Server</span>
              <p className="text-[9.5px] text-gray-500">Server</p>
            </div>
          </div>
          <div className="ml-4 flex-1">
            <p className="text-[13px]">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-5">
          <p className="text-[15px] text-[#525D73]">
            Lorem ipsum dolor sit amet consectetur. Quis viverra etiam
            pellentesque lectus semper in massa purus. Auctor aenean aenean
            senectus massa dignissim vehicula mi erat purus. Praesent
            scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed
            urna quam.
          </p>
        </AccordionContent>
      </AccordionItem>
    </div>
  </Accordion>
);

const columns: ColumnDef<Asset>[] = [
  {
    accessorKey: "name",
    header: "Asset",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="flex size-[53px] items-center justify-center rounded-full bg-[#ECF5FF]">
          <Server size={26} color="#6236CC" />
        </div>
        <div>
          <div className="font-medium">{row.original.name}</div>
          <div className="text-xs text-gray-500">{row.original.ip}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "risk",
    header: "Contextual Risk",
    cell: ({ getValue }) => <Badge risk={getValue() as Asset["risk"]} />,
  },
];

const LeftPanel: FC = () => (
  <div className="col-span-1 mt-[27px] md:h-[calc(100vh-54px)] md:overflow-y-auto rounded-[15px] bg-white px-[30px] py-5 shadow md:col-span-1">
    <Section title="Graph Visualizer">
      Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque
      gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant
      viverra. Quisque fusce senectus facilisis non diam leo nulla sem
      pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.
    </Section>

    <Section title="Extra" className="mt-[46px]">
      Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames
      egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare.
      Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida
      integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu
      pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus
      ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus
      mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum
      habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue
      lorem quam lorem suspendisse.
    </Section>

    <div className="mt-8">
      <Separator className="bg-[#E0E2E7]" />

      <div>
        <InfoItem label="Lorem Ipsum Dolor" value="10/19/2027" />
        <InfoItem label="Lorem Ipsum Dolor" value="Ut" />
        <InfoItem
          label="Lorem Ipsum Dolor"
          value={
            <span className="flex items-center gap-2">
              <Check color="#08B94E" /> Yes
            </span>
          }
        />
        <InfoItem label="Lorem Ipsum Dolor" value="Sit" />
        <InfoItem label="Lorem Ipsum Dolor" value="Lorem Ipsum Dolor" />
        <InfoItem label="Lorem Ipsum Dolor" value="Lorem Ipsum Dolor" />
      </div>

      <Separator className="bg-[#E0E2E7]" />

      <div className="mt-3">
        <p className="text-[15px] font-bold text-[#334155]">
          Lorem Ipsum Dolor Sit
        </p>
        <ServerCard />
        <ServerCard />
        <ServerCard />
      </div>
    </div>
  </div>
);

const RightPanel: FC = () => (
  <div className="col-span-1 mt-[27px] h-fit rounded-[15px] bg-white px-[30px] py-5 shadow md:col-span-2 lg:col-span-2">
    <h1 className="text-xl font-bold text-[#02983E]">Lorem Lorem Lorem</h1>
    <div className="col-span-1 mt-5 rounded-md bg-[#FAFAFA] px-[30px] py-5 shadow md:col-span-1">
      <Flow />
      <Separator />
      <div className="mt-4 flex flex-wrap gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#E5372B] sm:h-10 sm:w-10`}
          >
            <ShieldX size={24} color="#fff" />
          </div>
          <span className="text-[13px] font-bold text-[#E5372B] sm:text-[15px]">
            Lorem
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#FF9500] sm:h-10 sm:w-10`}
          >
            <ShieldX size={24} color="#fff" />
          </div>
          <span className="text-[13px] font-bold text-[#FF9500] sm:text-[15px]">
            Lorem
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#02983E] sm:h-10 sm:w-10`}
          >
            <ShieldX size={24} color="#fff" />
          </div>
          <span className="text-[13px] font-bold text-[#02983E] sm:text-[15px]">
            Lorem
          </span>
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h1 className="text-xl font-bold text-[#02983E]">
        Lorem ipsum Dolor Sit
      </h1>

      <div className="mt-5 flex flex-wrap gap-5">
        <div className="flex-1">
          <DataTable columns={columns} data={assets} pageSize={2} />
        </div>
        <div className="flex-1">
          <ContextualRisk />
        </div>
      </div>
    </div>
  </div>
);

const HomePage: FC = () => (
  <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
    <LeftPanel />
    <RightPanel />
  </div>
);

export default HomePage;
