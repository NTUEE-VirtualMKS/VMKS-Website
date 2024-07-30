import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOnlineMessage, setShowOnlineMessage] = useState(false);
  const { toast } = useToast();

  const updateOnlineStatus = () => {
    if (navigator.onLine) {
      setShowOnlineMessage(true);
      setTimeout(() => {
        setShowOnlineMessage(false);
      }, 3000); // Show "You are online" for 3 seconds
    }
    setIsOnline(navigator.onLine);
    if (isOnline && showOnlineMessage) {
      toast({ title: "Your internet connection was restored." });
    }
  };

  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return { isOnline, showOnlineMessage };
};

export default useNetworkStatus;
