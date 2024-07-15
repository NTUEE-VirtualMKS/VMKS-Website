// TODO: implement ShoppingList
import { useNavigate } from "react-router-dom";

function ShoppingList() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white">借用一覽</div>
      <p className="text-white">應該要有所有使用者借用的材料</p>
      <button onClick={() => navigate(-1)} className="text-white">
        go back
      </button>
    </>
  );
}

export default ShoppingList;
