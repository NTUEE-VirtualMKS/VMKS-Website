import UserBorrowingList from "@/components/UserBorrowingList";
import { Database } from "lucide-react";

function UsersBorrowingPage() {
  return (
    <div className="flex flex-col w-10/12 mx-auto mt-24">
      <h1 className="text-white p-1 flex flex-row items-center gap-2">
        <Database className="text-white" size={35} />
        使用者借用清單
      </h1>
      <div className="w-full">
        <UserBorrowingList />
      </div>
    </div>
  );
}

export default UsersBorrowingPage;
