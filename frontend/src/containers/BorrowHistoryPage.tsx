import BorrowHistoryList from "@/components/BorrowHistory/BorrowHistoryList";
import { History } from "lucide-react";
import { useTranslation } from "react-i18next";

function BorrowHistoryPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-10/12 mx-auto mt-20">
      <h1 className="dark:text-white p-1 flex flex-row items-center gap-2">
        <History className="dark:text-white" size={35} />
        {t("borrowHistory")}
      </h1>
      <div className="w-full">
        <BorrowHistoryList />
      </div>
    </div>
  );
}

export { BorrowHistoryPage };
