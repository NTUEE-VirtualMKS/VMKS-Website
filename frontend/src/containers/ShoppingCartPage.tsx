// TODO: implement ShoppingCartPage
import { ScrollText } from "lucide-react";
import ShoppingList from "@/components/ShoppingList";

function ShoppingCartPage() {
  return (
    <div className="flex flex-col w-10/12 mx-auto mt-24">
      <h1 className="text-white p-1 flex flex-row items-center gap-2">
        <ScrollText className="text-white" size={35} />
        預借清單
      </h1>
      <div className="w-full">
        <ShoppingList />
      </div>
    </div>
  );
}

export default ShoppingCartPage;
