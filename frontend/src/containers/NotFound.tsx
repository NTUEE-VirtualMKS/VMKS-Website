import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div>Page Not Found</div>
      <button onClick={() => navigate("/")}>back to home</button>
    </>
  );
}

export default NotFound;
