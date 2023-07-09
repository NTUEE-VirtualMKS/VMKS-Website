import { useNavigate } from "react-router-dom"
import RTEditor
  from "../component/Manager/RTEditor"
const ManagerPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Manager Page</div>
      <p>管理員專區，現在拿來測試quill</p>
      <RTEditor />
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default ManagerPage