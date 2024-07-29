import BorrowedTable from "./BorrowedTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Cpu, Hammer } from "lucide-react";

function BorrowedList() {
  return (
    <Tabs defaultValue="material">
      <div className="flex flex-row-reverse">
        <div className="w-56 mt-1">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="material"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-base font-semibold"
            >
              元件
            </TabsTrigger>
            <TabsTrigger
              value="tool"
              className="text-zinc-500 bg-[#303030] bg-opacity-30 text-base font-semibold"
            >
              工具
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
      <TabsContent value="material" className="w-full">
        <BorrowedTable tableName="元件" Icon={Cpu} />
      </TabsContent>
      <TabsContent value="tool">
        <BorrowedTable tableName="工具" Icon={Hammer} />
      </TabsContent>
    </Tabs>
  );
}

export default BorrowedList;
