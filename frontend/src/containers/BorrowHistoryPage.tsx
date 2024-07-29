import BorrowedList from "@/components/BorrowedList";
import { History } from "lucide-react";

function BorrowHistoryPage() {
  return (
    <div className="flex flex-col w-10/12 mx-auto mt-24">
      <h1 className="text-white p-1 flex flex-row items-center gap-2">
        <History className="text-white" size={35} />
        借用紀錄
      </h1>
      <div className="w-full">
        <BorrowedList />
      </div>
    </div>
  );
}

export default BorrowHistoryPage;
