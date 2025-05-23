// Admin only
import AllUsersBorrowingList from "@/components/AllUsersBorrowingData/AllUsersBorrowingList";
import { Database } from "lucide-react";
import { useTranslation } from "react-i18next";

function AllUsersBorrowingDataPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-10/12 mx-auto mt-20">
      <h1 className="dark:text-white p-1 flex flex-row items-center gap-2">
        <Database className="dark:text-white" size={35} />
        {t("allUsersBorrowingData")}
      </h1>
      <div className="w-full">
        <AllUsersBorrowingList />
      </div>
    </div>
  );
}

export { AllUsersBorrowingDataPage };
