import { useUser } from "@/contexts/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FakeLoginPage() {
  const { user, setPushToLoginPage } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setPushToLoginPage(true);
      navigate("/Login");
    } else {
      setPushToLoginPage(false);
      navigate("/");
    }
  }, []);

  return <></>;
}

export default FakeLoginPage;
