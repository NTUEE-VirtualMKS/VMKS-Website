import { useNavigate } from "react-router-dom"

const MapPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Map Page</div>
      <p>應該要有2D地圖，並連結3D地圖</p>
        <img src="/images/interior2D.jpg" alt="Interior2D" useMap="#interior2d"></img>
        <map name="interior2d">
        
          <area shape="rect" coords="962,0,1086,68" alt="Laser" href="/button"></area>
        </map>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  )
}

export default MapPage