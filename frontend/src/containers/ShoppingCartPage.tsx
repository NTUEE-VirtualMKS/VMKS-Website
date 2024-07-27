// TODO: implement ShoppingCartPage
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useUser } from "@/context/UserContext";

function ShoppingCartPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="flex flex-col w-9/12 mx-auto mt-24">
      <h1 className="text-white p-1">購物車 Shopping Cart</h1>
    </div>
  );
}

export default ShoppingCartPage;
