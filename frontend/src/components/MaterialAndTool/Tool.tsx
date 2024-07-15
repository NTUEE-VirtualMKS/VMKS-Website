// TODO: implement ToolPage
import { useNavigate } from "react-router-dom";

function ToolPage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        所有詳細資料、照片、borrow and repair button
        <p>(3DP屬性較特別，可能需要另外考慮)</p>
      </div>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
}

export default ToolPage;
