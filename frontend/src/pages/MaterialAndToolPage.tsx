import { useNavigate, Link } from "react-router-dom"
import { MaterialType } from '../component/MaterialAndTool/MaterialType';
import { MaterialList } from '../component/MaterialAndTool/MaterialList';
import useFetchMaterialList from '../component/MaterialAndTool/UseFetchMaterialList'
import useFetchMaterial from '../component/MaterialAndTool/UseFetchMaterial';

const MaterialAndToolPage = () => {
  const navigate = useNavigate()
  const { data: materials, isPending } = useFetchMaterialList('http://localhost:8000/materials')
  return (
    <>
      <div>Material & Tool Page</div>
      <p>應該要有搜尋欄、所有材料與工具，旁邊有樹狀結構的sidebar便於查詢(還需要顯示路徑在上方)</p>
      <p>每個材料的card包含photo,fullname,position,borrow_button</p>
      <p>
        <b>Material</b>
      </p>
      <Link to={'/MaterialAndTool/Material/' + 0}>Each Material</Link> {/* +id */}
      <div>{materials && <MaterialList materials={materials} />}</div>
      <p>
        <b>Tool</b>
      </p>
      <Link to={'/MaterialAndTool/Tool/' + 0}>Each Tool</Link> {/* +id */}

      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default MaterialAndToolPage