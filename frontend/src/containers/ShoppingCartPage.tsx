import { ScrollText } from "lucide-react";
import ShoppingList from "@/components/ShoppingCart/ShoppingList";
import { useTranslation } from "react-i18next";

function ShoppingCartPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-10/12 mx-auto mt-20">
      <h1 className="text-white p-1 flex flex-row items-center gap-2">
        <ScrollText className="text-white" size={35} />
        {t("unborrowedList")}
      </h1>
      <div className="w-full">
        <ShoppingList />
      </div>
    </div>
  );
}

export default ShoppingCartPage;
