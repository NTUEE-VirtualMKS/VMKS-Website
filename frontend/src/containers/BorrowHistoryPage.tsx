import BorrowedList from "@/components/BorrowedList";
import { History } from "lucide-react";
import { useTranslation } from "react-i18next";

function BorrowHistoryPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-10/12 mx-auto mt-24">
      <h1 className="text-white p-1 flex flex-row items-center gap-2">
        <History className="text-white" size={35} />
        {t("borrowHistory")}
      </h1>
      <div className="w-full">
        <BorrowedList />
      </div>
    </div>
  );
}

export default BorrowHistoryPage;
