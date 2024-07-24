// TODO: implement ShoppingList
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function ShoppingList() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-10/12 mx-auto mt-24">
      <h1 className="text-white p-1">Shopping List</h1>
    </div>
  );
}

export default ShoppingList;
