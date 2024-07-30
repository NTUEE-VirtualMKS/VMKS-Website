import { useEffect } from "react";

function FakeHome() {
  useEffect(() => {
    window.location.reload();
  }, []);

  return <></>;
}

export default FakeHome;
