// import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { MaterialType } from "./MaterialType";
// import { MaterialList } from "./MaterialList";
import useFetchMaterialList from "../../hooks/useFetchMaterialList";
// import useFetchMaterial from "./useFetchMaterial";

// type MaterialProps = {
//   materials: MaterialType[];
// };

const Material = () => {
  const navigate = useNavigate();
  const { data: materials, isPending } = useFetchMaterialList(
    "http://localhost:8000/materials"
  );
  return (
    <>
      <div>所有詳細資料、照片、buy and scrap button</div>
      {/* {materials && <MaterialList materials={materials}/>} */}

      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
};

export default Material;
